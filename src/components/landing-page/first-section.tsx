import { BackgroundImage } from "@mantine/core";
import React from "react";
import Shop from "../../assets/icons/shop.svg";
import firstsection from "../../assets/landing-page/first-section.png";
import Button from "../button";
import Image from "next/image";
import SlidingText from "../sliding-text";
import { useMediaQuery } from "react-responsive";

const FirstSection = () => {
  const sliderTexts = [
    "Collaborated with over a 100+ Vendors",
    "Trusted by Industry Leaders",
    "Providing Quality Products",
    "Over 1000+ Happy Customers",
    "Fast and Reliable Shipping",
    "Award-Winning Customer Service",
    "Custom-Made Furniture Solutions",
    "Affordable Interior Design Options",
    "Exclusive Furniture Collections",
    "Empowering Local Vendors",
    "Eco-Friendly Materials",
    "Proudly Nigerian-Owned",
  ];
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1024px)" });

  const backgroundImageSrc = isSmallScreen
    ? "../../assets/bg-images/lp-firstsection-small.png"
    : "../../assets/bg-images/lp-firstsection.png";

  return (
    <section className="w-screen overflow-hidden  ">
      <BackgroundImage
        src={backgroundImageSrc}
        className=" h-[calc(100vh-80px)] lg:h-[calc(100vh-100px)] relative  padding-section"
      >
        <div className="  grid lg:grid-cols-2 max-width-section gap-10 items-center h-full ">
          <div className=" grid  gap-y-3 md:gap-y-4 lg:gap-y-6">
            <Image src={Shop} alt="shop icon" />
            <p className="text-base md:text-lg text-primary-black-90 font-semibold">
              Become a vendor
            </p>
            <h1 className="text-white text-[34px] md:text-4xl lg:text-5xl font-semibold">
              Sell With Us
            </h1>
            <h3 className=" text-sm md:text-base  text-white max-w-[60%] md:max-w-[628px] ">
              Own and manage your personal vendor page and divert customers
              directly to you. Sell variety of interior wears including custom
              made furniture, accessories, lighting etc. Have access to the
              biggest customer base for furniture retail in Nigeria.
            </h3>
            <div className="w-[170px] md:w-[200px] mt-3 md:mt-0">
              <Button
                title="Sign Up"
                onclick={() => {}}
                className="bg-white text-secondary-green-100 font-semibold text-base "
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src={firstsection}
              className="w-full h-[70%] object-contain"
              alt="landing-page"
            />
          </div>
        </div>
        <div className=" absolute inset-x-0 bottom-0  bg-secondary-green-90   text-primary-black-90/50 text-center p-5">
          <SlidingText texts={sliderTexts} />
        </div>
      </BackgroundImage>
    </section>
  );
};

export default FirstSection;
