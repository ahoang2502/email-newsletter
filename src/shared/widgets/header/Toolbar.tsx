"use client";

import { useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Toolbar = () => {
  const { user } = useUser();

  return (
    <>
      <Button color="primary" className="text-base lg:text-lg">
        Start Trial
      </Button>

      {user ? (
        <>
          <Link href="/dashboard">
            <Image
              src={user?.imageUrl}
              alt={user?.fullName || "user image"}
              width={40}
              height={40}
              className="rounded-full"
            />
          </Link>
        </>
      ) : (
        <Link href="/sign-in" className="text-base lg:text-lg">
          Login
        </Link>
      )}
    </>
  );
};
