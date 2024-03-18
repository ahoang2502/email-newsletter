import Link from "next/link";
import React from "react";

import { Logo } from "./Logo";
import { NavItems } from "./NavItems";
import { Toolbar } from "./Toolbar";

const Header = () => {
  return (
    <header className="w-full sticky top-0 left-0 z-[999] border-b px-4 lg:px-10 flex items-center justify-between h-[80px] bg-white text-black">
      <div className="">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="">
        <NavItems />
      </div>

      <div className="flex items-center gap-3">
        <Toolbar />
      </div>
    </header>
  );
};

export default Header;
