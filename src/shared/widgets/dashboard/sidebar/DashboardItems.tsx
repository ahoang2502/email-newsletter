import { useClerk } from "@clerk/nextjs";
import { redirect, usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Link from "next/link";

import useRouteChange from "@/shared/hooks/useRouteChange";
import { sideBarBottomItems, sideBarItems } from "@/app/configs/constants";
import { ICONS } from "@/shared/utils/Icons";
import { SidebarFooterLogo } from "./SidebarFooterLogo";

type Props = {
  bottomContent?: boolean;
};

export const DashboardItems = ({ bottomContent }: Props) => {
  const { activeRoute, setActiveRoute } = useRouteChange();
  const { signOut, user } = useClerk();

  const pathname = usePathname();

  const handleLogout = () => {
    signOut();

    redirect("/sign-in");
  };

  useEffect(() => {
    setActiveRoute(pathname);
  }, [pathname, setActiveRoute]);

  return (
    <div className="mt-2">
      {!bottomContent ? (
        <>
          {sideBarItems.map((item: DashboardSideBarTypes, index: number) => (
            <Link
              key={index}
              href={item.url}
              className={`px-2 py-2.5 flex rounded-2xl items-center ${
                item.url === activeRoute && "bg-[#463bbd]/10"
              }`}
            >
              <span
                className={`text-xl mr-3 ${
                  item.url === activeRoute && "text-[#463bbd] "
                }`}
              >
                {item.icon}
              </span>

              <span
                className={`text-lg mr-2 ${
                  item.url === activeRoute && "text-[#463bbd] "
                } `}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </>
      ) : (
        <div className="flex flex-col justify-between h-full">
          {sideBarBottomItems.map(
            (item: DashboardSideBarTypes, index: number) => (
              <Link
                href={
                  item.url === "/"
                    ? `/subscribe?username=${user?.username}`
                    : item.url
                }
                key={index}
                className={`px-2 py-2.5 flex rounded-2xl items-center ${
                  item.url === activeRoute && "bg-[#463bbd]/10"
                }`}
              >
                <span
                  className={`text-xl mr-3 ${
                    item.url === activeRoute && "text-[#463bbd] "
                  }`}
                >
                  {item.icon}
                </span>

                <span
                  className={`text-lg mr-2 ${
                    item.url === activeRoute && "text-[#463bbd] "
                  } `}
                >
                  {item.title}
                </span>
              </Link>
            )
          )}

          {/* Sign out */}
          <div
            className="px-2 py-2.5 flex items-center cursor-pointer"
            onClick={handleLogout}
          >
            <span className="text-xl mr-3">{ICONS.logOut}</span>

            <span className="text-lg">Sign Out</span>
          </div>

          {/* Footer */}
        </div>
      )}
    </div>
  );
};
