import { frameworks, themes } from "@/constants";
import { AlertCircle, CheckCircle, Globe } from "lucide-react";
import React from "react";

interface FrameworkSectionProps {
  selectedFramework: string;
  setSelectedFramework: (v: string) => void;
  setSelectedTheme: (v: string) => void;
  selectedTheme: string;
}

const FrameworkSection = ({
  selectedFramework,
  setSelectedFramework,
  selectedTheme,
  setSelectedTheme,
}: FrameworkSectionProps) => {
  const getFrameworkStatus = (status: string) => {
    switch (status) {
      case "ready":
        return {
          icon: <CheckCircle className="w-4 h-4 text-green-500" />,
          label: "Production Ready",
          className: "bg-green-50 text-green-700 border-green-200",
        };
      case "lab":
        return {
          icon: <AlertCircle className="w-4 h-4 text-orange-500" />,
          label: "Lab - Experimental",
          className: "bg-orange-50 text-orange-700 border-orange-200",
        };
      default:
        return {
          icon: <AlertCircle className="w-4 h-4 text-gray-500" />,
          label: "Coming Soon",
          className: "bg-gray-50 text-gray-700 border-gray-200",
        };
    }
  };
  return (
    <section className="mb-6">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="px-8 py-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center mb-2">
            <Globe className="mr-3" />
            Choose Your Framework
          </h2>
          <p className="text-gray-600">
            Select your framework to see tailored integration examples and
            instructions
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((framework) => {
              const status = getFrameworkStatus(framework.status);
              return (
                <button
                  key={framework.id}
                  onClick={() => setSelectedFramework(framework.id)}
                  className={`p-6 hover:cursor-pointer rounded-xl border-2 transition-all duration-300 hover:scale-105 text-left ${
                    selectedFramework === framework.id
                      ? `${framework.color} text-white border-transparent shadow-xl transform scale-105`
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{framework.name}</h3>
                    <div
                      className={`px-2 py-1 rounded-full text-xs font-medium border flex items-center space-x-1 ${
                        selectedFramework === framework.id
                          ? "bg-white/20 border-white/30"
                          : status.className
                      }`}
                    >
                      {status.icon}
                      <span>{status.label}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Theme Selection */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Theme Selection
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme.id)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                    selectedTheme === theme.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="font-medium text-gray-900">{theme.name}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    {theme.description}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;
