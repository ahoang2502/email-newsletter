"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export const Toolbar = () => {
  return (
    <>
      <Button color="primary" className="text-base lg:text-lg">
        Start Trial
      </Button>

      <Link href="/sign-up" className="text-base lg:text-lg">Sign up</Link>
    </>
  );
};
