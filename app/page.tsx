"use client";

import { FC } from "react";
import { HeroBanner, Steps } from "@/components";

const HomePage: FC = () => {
  return (
    <main>
      <HeroBanner />
      <Steps />
    </main>
  );
};

export default HomePage;
