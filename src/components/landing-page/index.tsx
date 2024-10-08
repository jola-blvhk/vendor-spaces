import React from "react";
import FirstSection from "./first-section";
import SecondSection from "./second-section";
import { useMediaQuery } from "react-responsive";
import SecondSectionMd from "./second-section-md";
import { BackgroundImage } from "@mantine/core";

const LandingPage = () => {
  return (
    <>
      <FirstSection />
      <section className="lg:hidden">
        <SecondSection />
      </section>

      <section className="hidden lg:block">
        <SecondSectionMd />
      </section>
    </>
  );
};

export default LandingPage;
