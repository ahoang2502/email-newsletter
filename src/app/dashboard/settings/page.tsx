"use client";

import { UserProfile } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import { SettingsTabs } from "@/shared/components/tabs/SettingsTabs";
import { useGetMembership } from "@/shared/hooks/useGetMembership";
import { useSettingsFilter } from "@/shared/hooks/useSettingsFilter";
import { generateApiKey } from "@/shared/utils/TokenGenerator";
import { Button, Snippet } from "@nextui-org/react";
import { ICONS } from "@/shared/utils/Icons";
import toast from "react-hot-toast";

const SettingsPage = () => {
  const { activeItem } = useSettingsFilter();
  const { data } = useGetMembership();
  const [apiKey, setApiKey] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const apiKey = Cookies.get("api_key");

    if (!apiKey) {
      generateApiKeyHandler();
    } else setApiKey(apiKey);
  }, []);

  const generateApiKeyHandler = async () => {
    await generateApiKey().then((res) => {
      Cookies.set("api_key", res);

      setApiKey(res);
    });
  };

  const handleCopy = () => {
    const smallText = document.querySelector(".copy-text") as HTMLElement;

    if (smallText) {
      const textToCopy = smallText.innerText;

      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true);

        toast.success("Copied");
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      });
    }
  };

  const handleRegenerateApiKey = async () => {
    await generateApiKey().then((res) => {
      Cookies.set("api_key", res);

      toast.success("API Key updated!");
      setApiKey(res);
    });
  };

  return (
    <div className="w-full p-5 h-screen">
      <SettingsTabs />

      {activeItem === "Customize profile" && (
        <div className="w-full h-full flex justify-center">
          <UserProfile />
        </div>
      )}

      {activeItem === "API Access" && (
        <div className="">
          {data?.plan === "SCALE" ? (
            <div className="w-full h-[90vh] flex items-center justify-center">
              <h3 className="">
                Please update your subscription plan to get access of API.
              </h3>
            </div>
          ) : (
            <div className="p-4 w-full space-y-1">
              <h2 className="">
                Subscribe at {process.env.NEXT_PUBLIC_WEBSITE_URL}/api/subscribe
                using the following API key
              </h2>

              <h3 className="font-semibold">API KEY: </h3>

              <div className="max-w-[700px] text-black px-2 py-1 border-[2px] rounded-2xl flex justify-start items-center space-x-2">
                <div className="flex justify-center items-center border-r-[2px] pr-1">
                  <span
                    className="hover:bg-zinc-200 transition p-2 rounded-lg text-lg cursor-pointer"
                    onClick={
                      apiKey
                        ? handleCopy
                        : () => toast.error("Please wait for API key to load")
                    }
                  >
                    {ICONS.copy}
                  </span>
                  <span
                    className="hover:bg-zinc-200 transition p-2.5 rounded-lg text-sm cursor-pointer"
                    onClick={handleRegenerateApiKey}
                  >
                    {ICONS.regenerate}
                  </span>
                </div>

                <p
                  className={`truncate copy-text ${
                    apiKey ? "text-black" : "text-zinc-400"
                  }`}
                >
                  {apiKey ? apiKey : "Loading API Key..."}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
