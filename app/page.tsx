"use client";

import { FC } from "react";
import { Features, HeroBanner, InvoiceCTA, Pricing, Steps } from "@/components";

const HomePage: FC = () => {
  return (
    <main>
      <HeroBanner />
      <Steps />
      <InvoiceCTA />
      <Steps />

      <Features />
      <Pricing />
    </main>
  );
};

export default HomePage;
