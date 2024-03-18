import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

import { partners } from "@/app/configs/constants";

export const Branding = () => {
  return (
    <div className="border-t-2 border-b border-[#000] py-10 bg-white">
      <h3 className="uppercase text-xl md:text-2xl text-center max-w-3xl mx-auto font-[400] z-20 relative">
        CREATED BY THE EARLY MORNING BREW TEAM
      </h3>

      <div className="w-full text-center pt-1 ">
        <h3 className="uppercase bg-[#f091dd] rounded p-2 text-xl md:text-2xl text-center inline-block font-medium z-20 relative">
          NOW POWERING THE WORLD&apos;S TOP NEWSLETTERS
        </h3>
      </div>

      <Marquee className="w-full flex justify-around">
        {partners.map((i: PartnersTypes, index: number) => (
          <Image
            key={i.url}
            src={i.url}
            alt="partner"
            width={200}
            height={200}
            className="md:mx-8 w-[150px] md:w-[180px] mx-3"
          />
        ))}
        {partners.map((i: PartnersTypes, index: number) => (
          <Image
            key={i.url}
            src={i.url}
            alt="partner"
            width={200}
            height={200}
            className="md:mx-8 w-[150px] md:w-[180px] mx-3"
          />
        ))}
      </Marquee>
    </div>
  );
};
