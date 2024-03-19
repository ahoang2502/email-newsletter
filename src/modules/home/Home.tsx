import React from "react";

import Header from "@/shared/widgets/header/Header";
import { Banner } from "./elements/Banner";
import { Branding } from "./elements/Branding";
import { Benefits } from "./elements/Benefits";
import { FeatureHighlight } from "./elements/FeatureHighlight";
import { Pricing } from "./elements/Pricing";
import Footer from "@/shared/widgets/footer";


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
