"use client";

import { useState } from "react";
import { plans } from "@/constants";
import PricingCard from "./PricingCard";
import PricingFaq from "./PricingFaq";
import PricingHeader from "./PricingHeader";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <PricingHeader isYearly={isYearly} setIsYearly={setIsYearly} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {plans?.map((plan) => (
            <PricingCard key={plan.name} plan={plan} isYearly={isYearly} />
          ))}
        </div>

        <PricingFaq />
      </div>
    </div>
  );
};

export default Pricing;
