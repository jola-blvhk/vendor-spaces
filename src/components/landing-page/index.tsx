import React from "react";
import FirstSection from "./first-section";
import SecondSection from "./second-section";
import SecondSectionMd from "./second-section-md";
import NeedHelp from "./need-help";

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
     
      <NeedHelp />
    </>
  );
};

export default LandingPage;
