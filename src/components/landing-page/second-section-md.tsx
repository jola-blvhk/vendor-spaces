import React from "react";
import first from "../../assets/landing-page/second-section/first.png";
import second from "../../assets/landing-page/second-section/second.png";
import third from "../../assets/landing-page/second-section/third.png";
import fourth from "../../assets/landing-page/second-section/fourth.png";
import line from "../../assets/bg-images/lp-secondsection.png";
import ServiceBox from "./service-box";
import Button from "../button";
import Image from "next/image";

const SecondSectionMd = () => {
  return (
    <div className="relative  padding-section py-16 lg:py-24">
      <div className=" relative max-width-section grid gap-y-3">
        <div className="grid h-[300px] grid-cols-3 gap-4 justify-between">
          <div className="grid gap-y-4 h-fit">
            <h2 className="text-2xl lg:text-3xl font-medium text-secondary-green-100">
              What we are offering
            </h2>
            <p className="text-sm md:text-base text-primary-black-90">
              Own and manage your personal vendor page and divert customers
              directly to you.
            </p>
            <div className="w-[170px] md:w-[200px] mt-3 md:mt-0">
              <Button
                backgroundImage
                title="Sign Up"
                onclick={() => {}}
                className="  text-base "
              />
            </div>
          </div>
          <div className=" justify-self-center place-self-end">
            <ServiceBox
              image={first}
              title="Manage payment and track transactions seamlessly."
            />
          </div>
          <div className="justify-self-end h-fit">
            <ServiceBox image={second} title="Manage sales and track growth." />
          </div>
        </div>
        <div className="grid h-[300px] grid-cols-3 gap-4 justify-between">
          <div className="">
            <ServiceBox
              image={second}
              title="Access to the first and biggest interior customer base."
            />
          </div>
          <div className="grid content-end">
            <ServiceBox
              image={third}
              title="Own your own personalized page, with personal link."
            />
          </div>
          <div className=" h-fit">
            <ServiceBox
              image={fourth}
              title="No direct contact with customers/ consumers."
            />
          </div>
        </div>
        <Image
          src={line}
          className="absolute inset-0  m-auto w-[80%] h-auto object-contain"
          alt="line"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default SecondSectionMd;
