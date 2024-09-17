"use client";

import LandingPage from "@/components/landing-page";
import RootLayout from "@/components/Layout";
import ReduxProvider from "@/redux/redux-provider";
export default function Home() {
  return (
    <ReduxProvider>
      <RootLayout>
        <div className="grid  pt-20 md:pt-[100px] ">
          <LandingPage />
        </div>
      </RootLayout>
    </ReduxProvider>
  );
}
