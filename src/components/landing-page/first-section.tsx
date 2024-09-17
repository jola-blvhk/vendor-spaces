import { BackgroundImage } from "@mantine/core";
import React from "react";
import Shop from "../../assets/icons/shop.svg";

import Button from "../button";
import Image from "next/image";

const FirstSection = () => {
  return (
    <section className="w-screen overflow-hidden  ">
      <BackgroundImage
        src="../../assets/bg-images/lp-firstsection.png"
        className=" h-[calc(100vh-80px)] lg:h-[calc(100vh-100px)] relative  padding-section"
      >
        <div className="  grid md:grid-cols-2 max-width-section items-center h-full ">
          <div className=" grid  gap-y-4 md:gap-y-6">
            <Image src={Shop} alt="shop icon" />
            <p className="text-base md:text-lg text-primary-black-90 font-semibold">
              Become a vendor
            </p>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold">
              Sell With Us
            </h1>
            <h3 className=" text-base text-white max-w-[628px] md:text-lg ">
              Own and manage your personal vendor page and divert customers
              directly to you. Sell variety of interior wears including custom
              made furniture, accessories, lighting etc. Have access to the
              biggest customer base for furniture retail in Nigeria.
            </h3>
            <div className="w-[170px] md:w-[200px]">
              <Button
                title="Sign Up"
                onclick={() => {}}
                className="bg-white text-secondary-green-100 font-semibold text-base lg:text-lg"
              />
            </div>
          </div>
          <div></div>
        </div>
        <div className=" absolute inset-x-0 bottom-0  bg-secondary-green-90   text-primary-black-90/50 text-center p-5">
          text-center
        </div>
      </BackgroundImage>
    </section>
  );
};

export default FirstSection;
