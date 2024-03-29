"use client";

import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";
import { useEffect, useRef, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Button } from "@nextui-org/react";

import { DefaultJsonData } from "@/assets/mails/default";
import { saveEmail } from "@/actions/save.email";
import { getEmailDetails } from "@/actions/get.email-details";
import { sendEmail } from "@/shared/utils/EmailSender";

type Props = {
  subjectTitle: string;
};

export function EmailEditorComponent({ subjectTitle }: Props) {
  const [loading, setLoading] = useState(true);
  const [jsonData, setJsonData] = useState<any | null>(DefaultJsonData);

  const router = useRouter();
  const { user } = useUser();
  const emailEditorRef = useRef<EditorRef>(null);

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml(async (data) => {
      const { design, html } = data;

      setJsonData(design);
      console.log("env", process.env.NEXT_PUBLIC_USER_EMAIL);

      await sendEmail({
        userEmail: [process.env.NEXT_PUBLIC_USER_EMAIL!],
        subject: subjectTitle,
        content: html,
      }).then((res) => {
        toast.success("Email sent successfully!");

        router.push("/dashboard/write");
      });
    });
  };

  const onReady: EmailEditorProps["onReady"] = () => {
    const unlayer: any = emailEditorRef.current?.editor;

    unlayer.loadDesign(jsonData);
  };

  const saveDraft = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml(async (data) => {
      const { design } = data;

      await saveEmail({
        title: subjectTitle,
        content: JSON.stringify(design),
        newsLetterOwnerId: user?.id!,
      }).then((res: any) => {
        console.log({ res });
        toast.success(res?.message || "Successfully saved email");

        router.push("/dashboard/write");
      });
    });
  };

  const getEmail = async () => {
    await getEmailDetails({
      title: subjectTitle,
      newsLetterOwnerId: user?.id!,
    }).then((res: any) => {
      if (res) {
        setJsonData(JSON.parse(res?.content));
      }

      setLoading(false);
    });
  };

  useEffect(() => {
    getEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      {!loading && (
        <div className="w-full h-[90vh] relative">
          <EmailEditor
            minHeight="80vh"
            ref={emailEditorRef}
            onReady={onReady}
          />

          <div className="absolute bottom-0 flex items-center justify-end gap-4 right-0 w-full border-t p-3">
            <Button
              className="bg-transparent cursor-pointer flex items-center gap-1 text-black border border-[#00000048] text-lg rounded-lg"
              onClick={saveDraft}
            >
              <span className="opacity-[0.7] ">Save draft</span>
            </Button>

            <Button
              className="bg-[#000] text-white cursor-pointer flex items-center gap-1 border text-lg rounded-lg"
              onClick={exportHtml}
            >
              <span>Send</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
