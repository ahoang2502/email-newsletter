import React from "react";

import Header from "@/shared/widgets/header/Header";
import { Banner } from "./features/Banner";
import { Branding } from "./features/Branding";

const Home = () => {
  return (
    <div className="text-black">
      <Header />

      <Banner />

      <Branding />
    </div>
  );
};

export default Home;
