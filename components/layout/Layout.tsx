import React from "react";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Header from "@/components/header";
type Props = {};

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <title>Auction</title>
      </Head>
      <div className="flex flex-col min-h-[100vh]">
        <NextNProgress height={7} />
        <Header />
        <main className="flex-grow md:mt-28">{children}</main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
