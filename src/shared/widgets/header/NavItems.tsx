import React from "react";

import { navItems } from "@/app/configs/constants";
import Link from "next/link";

export const NavItems = () => {
  return (
    <div className="w-full hidden md:flex items-center ">
      {navItems.map((item: NavItems, index: number) => (
        <Link
          key={index}
          href={item.href as string}
          className="px-5 md:text-base lg:text-lg"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};
