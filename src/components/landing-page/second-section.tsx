// pages/what-we-offer.tsx
import React from "react";
import Image from "next/image";
import first from "../../assets/landing-page/second-section/first.png";
import second from "../../assets/landing-page/second-section/second.png";
import third from "../../assets/landing-page/second-section/third.png";
import fourth from "../../assets/landing-page/second-section/fourth.png";
import ServiceBox from "./service-box";

const SecondSection = () => {
  const services = [
    {
      image: first,
      title: "Manage payment and track transactions seamlessly.",
    },
    {
      image: second,
      title: "Access to the first and biggest interior customer base.",
    },
    {
      image: third,
      title: "Own your own personalized page, with personal link.",
    },
    {
      image: second,
      title: "No direct contact with customers/ consumers.",
    },
    {
      image: fourth,
      title: "Manage sales and track growth.",
    },
  ];
  return (
    <div className="relative  mx-auto padding-section py-12">
      <div className="max-width-section grid gap-y-8">
        {/* Title */}
        <div className="grid gap-y-2">
          <h2 className="text-2xl font-semibold text-secondary-green-100 ">
            Sell With Us
          </h2>
          <p className="text-primary-black-90 text-[12px] max-w-[80%]">
            Own and manage your personal vendor page and divert customers
            directly to you.
          </p>
        </div>

        {/* Grid of Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative">
          {services?.map((service, index) => (
            <ServiceBox
              key={index}
              image={service?.image}
              title={service?.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
