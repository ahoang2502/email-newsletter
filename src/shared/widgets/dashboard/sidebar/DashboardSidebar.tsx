"use client";

import { useUser } from "@clerk/nextjs";

import { ICONS } from "@/shared/utils/Icons";
import { DashboardItems } from "./DashboardItems";
import { UserPlan } from "./UserPlan";
import { SidebarFooterLogo } from "./SidebarFooterLogo";

export const DashboardSidebar = () => {
  const { user } = useUser();

  return (
    <div className="p-2 h-screen flex flex-col justify-between ">
      <div className="">
        <div className="p-2 flex items-center bg-[#f5f5f5f5] rounded-2xl ">
          <span className="text-2xl">{ICONS.home}</span>

          <h5 className="pl-2 pt-1 capitalize ">{user?.username} Newsletter</h5>
        </div>

        <div className="">
          <DashboardItems />
          <UserPlan />

          <DashboardItems bottomContent={true} />
        </div>
      </div>

      <div className="border-t">
        <br />
        <div className="w-full flex justify-center cursor-pointer ">
          <SidebarFooterLogo />
        </div>

        <p className="text-sm text-center text-zinc-500 pt-4 pb-5">
          © {new Date().getFullYear()} ENewsletter, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};
