"use client";

import type { Metadata } from "next";

import { Poppins, Megrim } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ReduxProvider from "@/redux/redux-provider";
import Head from "next/head";
import Footer from "@/components/footer";
import { createTheme, MantineProvider } from "@mantine/core";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const megrim = Megrim({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-megrim",
});

const theme = createTheme({
  /** Put your mantine theme override here */
});

// export const metadata: Metadata = {
//   title: "Spaces Interior Market Place",
//   description: "an interior marketplace",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <Head>
        <title>Spaces Vendor</title>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          />
        </Head>
      </Head>
      <html lang="en">
        <body className={` ${poppins.variable} ${megrim.variable}`}>
          <MantineProvider theme={theme}>
            {children}
            {/* <Header /> */}
          </MantineProvider>
          {/* <Footer /> */}
        </body>
      </html>
    </ReduxProvider>
  );
}
