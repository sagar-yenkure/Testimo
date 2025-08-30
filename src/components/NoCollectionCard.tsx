import React from "react";
import { Card } from "./ui/card";
import { MessageSquare } from "lucide-react";

const NoCollectionCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Card className="p-12 text-center bg-white border border-gray-200">
      <div className="max-w-md mx-auto">
        <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <MessageSquare className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
      </div>
    </Card>
  );
};

export default NoCollectionCard;
