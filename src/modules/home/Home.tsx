import React from "react";

import Header from "@/shared/widgets/header/Header";
import { Banner } from "./features/Banner";
import { Branding } from "./features/Branding";
import { Benefits } from "./features/Benefits";
import { FeatureHighlight } from "./features/FeatureHighlight";

const Home = () => {
  return (
    <div className="text-black">
      <Header />
      <Banner />
      <Branding />
      <Benefits />
      <FeatureHighlight />
    </div>
  );
};

export default Home;
