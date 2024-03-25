"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

import { subscribe } from "@/actions/add.subscribe";
import { ICONS } from "@/shared/utils/Icons";

const SubscribePage = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const username: string = searchParams.get("username")!;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    await subscribe({ email: value, username })
      .then((res) => {
        setLoading(false);

        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("You are successfully subscribed!");
        }
      })
      .catch((error) => {
        console.log("🔴 [SUBSCRIBE_SUBMIT]", error);
        setLoading(false);
      });

    setValue("");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center h-screen bg-white">
      <Link
        href="/dashboard"
        className="text-zinc-700 flex justify-center items-center top-20 left-20 fixed hover:underline hover:text-black pr-3 pl-1 py-1 rounded-md"
      >
        {ICONS.backArrow} Back to Dashboard
      </Link>

      <div className="">
        <h1 className="text-7xl pb-8 capitalize text-black">
          {username} Newsletter
        </h1>
      </div>

      <form
        action=""
        className="flex w-full max-w-md border rounded overflow-hidden"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          required
          value={value}
          placeholder="Enter you email"
          onChange={(e) => setValue(e.target.value)}
          className="px-4 py-4 w-full text-gray-700 leading-tight focus:outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="px-8 bg-blue-500 text-white font-bold py-4 rounded-r hover:bg-blue-600 focus:outline-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribePage;
