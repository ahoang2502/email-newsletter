import React from "react";
import { Tab, Tabs } from "@nextui-org/react";

import { useSettingsFilter } from "@/shared/hooks/useSettingsFilter";

export const SettingsTabs = () => {
  const { activeItem, setActiveItem } = useSettingsFilter();

  return (
    <Tabs
      variant="underlined"
      aria-label="Tabs variants"
      selectedKey={activeItem}
      //   @ts-ignore
      onSelectionChange={setActiveItem}
    >
      <Tab key="API Access" title="API Access" />
      <Tab key="Customize profile" title="Customize profile" />
    </Tabs>
  );
};
