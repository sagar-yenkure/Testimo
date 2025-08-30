import React from "react";
import { Card } from "../ui/card";
import { MessageSquare } from "lucide-react";

const NoCollectionCard = () => {
  return (
    <Card className="p-12 text-center bg-white border border-gray-200">
      <div className="max-w-md mx-auto">
        <div className="p-4 bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <MessageSquare className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          No testimonials found
        </h3>
        <p className="text-gray-600">
          No testimonials match the current filter.
        </p>
      </div>
    </Card>
  );
};

export default NoCollectionCard;
