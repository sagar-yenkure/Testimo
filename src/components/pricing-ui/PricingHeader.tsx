import React from "react";
import { Badge } from "../ui/badge";

const PricingHeader = ({
  isYearly,
  setIsYearly,
}: {
  isYearly: boolean;
  setIsYearly: (value: boolean) => void;
}) => {
  return (
    <div className="border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Choose the perfect plan for your business. Upgrade or downgrade at
            any time.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-50 rounded-full p-1 mb-12">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm hover:cursor-pointer font-medium transition-all ${
                !isYearly
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full hover:cursor-pointer text-sm font-medium transition-all ${
                isYearly
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Yearly
              <Badge className="ml-2 bg-green-100 text-green-700 text-xs">
                Save 17%
              </Badge>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingHeader;
