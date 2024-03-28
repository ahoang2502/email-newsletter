import { useAtom } from "jotai";

import { settingsActiveItem } from "@/app/configs/constants";

export const useSettingsFilter = () => {
  const [activeItem, setActiveItem] = useAtom<string>(settingsActiveItem);

  return { activeItem, setActiveItem };
};
