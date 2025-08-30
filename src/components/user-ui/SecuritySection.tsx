import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from "../ui/card";

const SecuritySection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Security</CardTitle>
        <CardDescription>Adjust your security preferences</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 text-sm">Security content goes here...</p>
      </CardContent>
    </Card>
  );
};

export default SecuritySection;
