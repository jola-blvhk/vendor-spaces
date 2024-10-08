"use client";

import React from "react";
import Button from "../button";
import InputField from "../input/input";

const NeedHelp = () => {
  return (
    <div className="padding-section">
      <div className="max-width-section">
        <div className=" bg-secondary-green-100/20 rounded-[15px] border border-[#d9d9d9] grid md:flex gap-6 md:justify-between md:items-center px-4 py-12 md:px-10 lg:px-14">
          <div className="space-y-2">
            <h1 className=" font-semibold md:pb-2 text-secondary-green-100  text-3xl md:text-4xl lg:text-6xl  ">
              Need Help?
              <span className="text-base md:text-2xl lg:text-3xl xl:text-4xl"></span>
            </h1>
            <p className="text-primary-black-90 text-sm md:text-base lg:text-lg">
              Kindly reach out to our customer care representative by entering
              your email address.
            </p>
          </div>
          <div className=" md:w-[40%] xl:w-[45%] space-y-4 md:space-y-5">
            <InputField placeholder="enter your email" />
            <div className="md:w-[224px]">
              <Button title="Enter" onclick={() => {}} backgroundImage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
