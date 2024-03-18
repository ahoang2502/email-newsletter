import React from "react";

import Header from "@/shared/widgets/header/Header";
import { Banner } from "./features/Banner";

export const Home = () => {
  return (
    <div className="text-black">
      <Header />

      <Banner />
    </div>
  );
};
