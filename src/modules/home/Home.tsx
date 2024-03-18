import React from "react";

import Header from "@/shared/widgets/header/Header";
import { Banner } from "./features/Banner";
import { Branding } from "./features/Branding";
import { Benefits } from "./features/Benefits";

const Home = () => {
  return (
    <div className="text-black">
      <Header />

      <Banner />

      <Branding />

      <Benefits />
    </div>
  );
};

export default Home;
