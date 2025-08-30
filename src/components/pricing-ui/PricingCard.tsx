"use client";

import { plans } from "@/constants";
import { Check, X } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const PricingCard = ({
  plan,
  isYearly,
}: {
  plan: (typeof plans)[0];
  isYearly: boolean;
}) => {
  const getSavings = (plan: (typeof plans)[0]) => {
    if (plan.monthlyPrice === 0) return null;
    const yearlyTotal = plan.monthlyPrice * 12;
    const savings = yearlyTotal - plan.yearlyPrice;
    return savings;
  };

  const getPrice = (plan: (typeof plans)[0]) => {
    if (plan.monthlyPrice === 0) return "Free";
    const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
    const period = isYearly ? "year" : "month";
    return `$${price}/${period}`;
  };

  const Icon = plan.icon;
  const savings = getSavings(plan);
  return (
    <div
      className={`relative bg-white rounded-2xl transition-all duration-300 hover:shadow-xl ${
        plan.popular
          ? "border-2 border-blue-500 shadow-lg scale-105"
          : "border border-gray-200 hover:border-gray-300"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-blue-500 text-white px-4 py-1">
            Most Popular
          </Badge>
        </div>
      )}

      <div className="p-3">
        {/* Plan Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 mx-auto mb-1 bg-gray-100 rounded-xl flex items-center justify-center">
            <Icon className="w-6 h-6 text-gray-700" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {plan.name}
          </h3>
          <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

          <div className="mb-6">
            <div className="text-4xl font-bold text-gray-900 mb-1">
              {getPrice(plan)}
            </div>
            {isYearly && savings && (
              <div className="text-sm text-green-600 font-medium">
                Save ${savings}/year
              </div>
            )}
          </div>

          <Button
            className={`w-full ${
              plan.popular
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-gray-900 hover:bg-gray-800 text-white"
            }`}
          >
            {plan.monthlyPrice === 0 ? "Get Started" : "Start Free Trial"}
          </Button>
        </div>

        {/* Features */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Text testimonials</span>
            <span className="font-medium text-gray-900">
              {plan.features.textTestimonials}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Video testimonials</span>
            <span className="font-medium text-gray-900">
              {plan.features.videoTestimonials}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Collections</span>
            <span className="font-medium text-gray-900">
              {plan.features.collections}
            </span>
          </div>

          <div className="pt-4 border-t border-gray-100 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Remove watermark</span>
              {!plan.features.watermark ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <X className="w-4 h-4 text-gray-400" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
