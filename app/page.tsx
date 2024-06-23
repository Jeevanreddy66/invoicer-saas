"use client";

import { FC } from "react";
import {
  FAQ,
  Features,
  HeroBanner,
  InvoiceCTA,
  Pricing,
  Steps,
} from "@/components";

const HomePage: FC = () => {
  return (
    <main>
      <HeroBanner />
      <Steps />
      <InvoiceCTA />
      <Steps />

      <Features />
      <Pricing />
      <FAQ />
    </main>
  );
};

export default HomePage;
