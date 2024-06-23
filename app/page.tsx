"use client";

import { FC } from "react";
import { Features, HeroBanner, InvoiceCTA, Steps } from "@/components";

const HomePage: FC = () => {
  return (
    <main>
      <HeroBanner />
      <Steps />
      <InvoiceCTA />
      <Steps />

      <Features />
    </main>
  );
};

export default HomePage;
