"use client";

import { useUser } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

import { DashboardSidebar } from "../widgets/dashboard/sidebar/DashboardSidebar";
import { addStripe } from "@/actions/add.stripe";
import { User } from "@clerk/nextjs/server";

interface ProviderProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProviderProps) {
  const pathname = usePathname();

  const { isLoaded, user } = useUser();

  const isStripeCustomerIdHas = async () => {
    await addStripe();
  };

  if (!isLoaded) return null;
  else {
    if (user) {
      isStripeCustomerIdHas();
    }
  }

  return (
    <NextUIProvider>
      {pathname !== "/dashboard/new-email" &&
      pathname !== "/" &&
      pathname !== "/sign-up" &&
      pathname !== "/subscribe" &&
      pathname !== "/sign-in" &&
      pathname !== "/success" &&
      pathname !== "/error" &&
      !pathname.includes("/sign-up") ? (
        <div className="w-full flex bg-white text-black">
          <div className="w-[290px] h-screen overflow-y-scroll">
            <DashboardSidebar />
          </div>

          {children}
        </div>
      ) : (
        <>{children}</>
      )}

      <Toaster position="top-center" reverseOrder={false} />
    </NextUIProvider>
  );
}
