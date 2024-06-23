"use client";

import { FC } from "react";
import { HeroBanner, InvoiceCTA, Steps } from "@/components";

const HomePage: FC = () => {
  return (
    <main>
      <HeroBanner />
      <Steps />
      <InvoiceCTA />
      <Steps />
    </main>
  );
};

export default HomePage;
