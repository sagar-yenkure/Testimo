import React from "react";
import { Card } from "./ui/card";
import { Crown } from "lucide-react";
import { Button } from "./ui/button";

const CurrentPlan = () => {
  return (
    <Card className="p-6 mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Crown className="w-8 h-8 text-yellow-300 mr-3" />
          <div>
            <h3 className="text-xl font-bold">Pro Plan</h3>
            <p className="text-blue-100">
              Unlimited collections • Advanced analytics • Priority support
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold">$29/mo</p>
          <Button
            variant="secondary"
            className="mt-2 bg-white text-blue-600 hover:bg-gray-100"
          >
            Manage Plan
          </Button>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-blue-400">
        <div className="flex items-center justify-between text-sm">
          <span>Collections used: {3} of ∞</span>
          <span>Next billing: Feb 15, 2024</span>
        </div>
      </div>
    </Card>
  );
};

export default CurrentPlan;
