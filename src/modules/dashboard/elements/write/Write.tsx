"use client";

import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { ICONS } from "@/shared/utils/Icons";
import { getEmails } from "@/actions/get.emails";
import { useClerk } from "@clerk/nextjs";
import Link from "next/link";

export const Write = () => {
  const [emailTitle, setEmailTitle] = useState("");
  const [open, setOpen] = useState(false);

  const [emails, setEmails] = useState<any>([]);
  const [emailsLoading, setEmailsLoading] = useState(false);
  const router = useRouter();

  const { user } = useClerk();

  const handleCreate = () => {
    if (emailTitle.length === 0) {
      toast.error("Email subject cannot be empty");
    } else {
      const formattedTitle = emailTitle.replace(/\s+/g, "-").replace(/&/g, "-");

      router.push(`/dashboard/new-email?subject=${formattedTitle}`);
    }
  };

  const findEmails = async () => {
    setEmailsLoading(true);

    await getEmails({ newsLetterOwnerId: user?.id! })
      .then((res) => setEmails(res))
      .catch((error) => console.log("🔴 [FIND_EMAILS]", error))
      .finally(() => setEmailsLoading(false));
  };

  useEffect(() => {
    findEmails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleDelete = async (id: string) => {
    //TODO
  };

  return (
    <div className="w-full flex p-5 flex-wrap gap-6 relative">
      <div
        className="w-[200px] h-[200px] bg-slate-50 flex flex-col items-center justify-center border rounded cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-2xl block text-center mb-2">{ICONS.plus}</span>

        <h5 className="text-xl ">Create new </h5>
      </div>

      <div className="w-[200px] h-[200px] z-[0] relative flex flex-col items-center justify-center rounded">
        <p className="animate-spin">{ICONS.spinner}</p>
      </div>

      {/* Saved emails */}
      {emails &&
        emails.map((i: any) => {
          const formattedTitle = i?.title
            ?.replace(/\s+/g, "-")
            .replace(/&/g, "-");

          return (
            <div
              key={i._id}
              className="w-[200px] h-[200px] z-[0] relative bg-slate-50 flex flex-col items-center justify-center rounded border cursor-pointer"
            >
              <span
                className="absolute block z-20 right-2 top-2 text-2xl cursor-pointer"
                onClick={() => handleDelete(i?._id)}
              >
                {ICONS.delete}
              </span>

              <Link
                className="text-xl "
                href={`/dashboard/new-email?subject=${formattedTitle}`}
              >
                {i.title}
              </Link>
            </div>
          );
        })}

      {open && (
        <div className="absolute flex items-center justify-center top-0 left-0 bg-[#00000028] h-screen w-full">
          <div className="w-[600px] p-5 bg-white rounded shadow relative">
            <div className="absolute top-3 right-3">
              <span
                className="text-lg cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                {ICONS.cross}
              </span>
            </div>

            <h5 className="text-2xl">Enter your email subject</h5>

            <input
              type="text"
              name=""
              id=""
              value={emailTitle}
              className="border rounded-md w-full mt-4 h-[35px] px-2 outline-none"
              onChange={(e) => setEmailTitle(e.target.value)}
            />

            <Button
              color="primary"
              className="rounded-md text-xl mt-3"
              onClick={handleCreate}
            >
              Continue
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
