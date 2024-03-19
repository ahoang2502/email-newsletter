import React from "react";

import Header from "@/shared/widgets/header/Header";
import { Banner } from "./features/Banner";
import { Branding } from "./features/Branding";
import { Benefits } from "./features/Benefits";
import { FeatureHighlight } from "./features/FeatureHighlight";
import { Pricing } from "./features/Pricing";
import { Footer } from "@/shared/widgets/footer/Footer";

const Home = () => {
  return (
    <div className="text-black">
      <Header />
      <Banner />
      <Branding />
      <Benefits />
      <FeatureHighlight />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
