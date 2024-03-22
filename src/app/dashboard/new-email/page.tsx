"use client";

import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";

import { ICONS } from "@/shared/utils/Icons";
import { EmailEditorComponent } from "@/shared/components/editor/EmailEditor";

const NewEmailPage = () => {
  const searchParams = useSearchParams();
  const subject = searchParams.get("subject");

  if (!subject) redirect("/dashboard/write");

  const subjectTitle = subject.replace(/-/g, " ");

  return (
    <div className="w-full flex bg-[#f7f7f7] text-black">
      <div className="w-full p-5 bg-white rounded-r-xl">
        {/* Back Arrow */}
        <Link
          href="/dashboard/write"
          className="opacity-[0.7] w-min flex text-xl items-center"
        >
          <span className="">{ICONS.backArrow}</span>
          <span className="">Exit</span>
        </Link>

        {/* Email Editor */}
        <div className="my-5">
          <EmailEditorComponent subjectTitle={subjectTitle} />
        </div>
      </div>
    </div>
  );
};

export default NewEmailPage;
