import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center space-y-4">
      <h5 className="text-green-600 p-3 bg-green-200 rounded-xl">
        Congratulations, your subscription has been activated!
      </h5>

      <Link
        href="/dashboard"
        className="text-zinc-600 text-sm hover:text-black hover:underline"
      >
        Back to dashboard →
      </Link>
    </div>
  );
};

export default SuccessPage;
