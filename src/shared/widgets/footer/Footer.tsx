import Link from "next/link";
import React from "react";

import { FooterLogo } from "./FooterLogo";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTiktok,
  FaX,
  FaYoutube,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-6">
      <div className="w-[95%] md:flex m-auto py-5 ">
        <div className="w-full md:w-[40%]">
          <Link href="/">
            <FooterLogo />
          </Link>

          <p className="text-xl mt-4 font-light tracking-wide">
            Get ENewsletter updates delivered directly to your inbox
          </p>

          <br />
          <div className="flex items-center w-full ">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email"
              className="bg-transparent w-full md:w-[60%] border h-[42px] pl-3 rounded rounded-r-[0px] outline-none"
            />

            <button className="w-[90px] cursor-pointer rounded-r h-[43px] bg-blue-500 border border-l-[0px] text-lg outline-none">
              Submit
            </button>
          </div>

          <br />
          <p className="text-xs tracking-wide font-light">
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from our company.
          </p>
        </div>

        <div className="w-full md:w-[60%] flex justify-center py-5 md:py-0">
          <div className="md:w-[80%] flex justify-around w-full">
            <div className="">
              <ul className="">
                <li className="text-base tracking-wide font-light pb-4 cursor-pointer ">
                  Create
                </li>
                <li className="text-base tracking-wide font-light pb-4 cursor-pointer">
                  Write
                </li>
                <li className="text-base tracking-wide font-light pb-4 cursor-pointer">
                  Grow
                </li>
                <li className="text-base tracking-wide font-light pb-4 cursor-pointer">
                  Monetize
                </li>
                <li className="text-base tracking-wide font-light pb-4 cursor-pointer">
                  Analyze
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="text-base tracking-wide font-light pb-4 cursor-pointer">
                  Careers
                </li>
                <li className="text-base tracking-wide font-light pb-4 cursor-pointer">
                  Pricing
                </li>
                <li className="text-base tracking-wide font-light pb-4 cursor-pointer">
                  Shop
                </li>
                <li className="text-base tracking-wide font-light pb-4 cursor-pointer">
                  Compare
                </li>
                <li className="text-base tracking-wide font-light pb-4 cursor-pointer">
                  Love
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white h-[1px] mx-12 mt-6" />

      <div className="mt-12 px-8 justify-between flex">
        <div className="space-y-3">
          <ul className="flex space-x-3 sm:justify-between">
            <li className="text-sm font-light">Terms</li>
            <li className="text-sm font-light">Privacy</li>
            <li className="text-sm font-light">Support</li>
            <li className="text-sm font-light">Sitemap</li>
          </ul>

          <p className="text-sm pb-10 text-zinc-500 font-light">
            © {new Date().getFullYear()} ENewsletter, Inc. All rights reserved.
          </p>
        </div>

        <div className="space-x-5 hidden sm:flex">
          <FaGithub size={20} />
          <FaFacebook size={20} />
          <FaYoutube size={20} />
          <FaTiktok size={20} />
          <FaX size={20} />
          <FaLinkedin size={20} />
        </div>
      </div>
    </footer>
  );
};
