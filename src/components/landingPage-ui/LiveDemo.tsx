"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import {
  // Testimonials,
  TESTIMONIALS_THEME,
  TESTIMONIALS_VARIANT,
} from "testimo-react";
// import { mockTestimonials } from "@/constants";

interface TabOption {
  value: string;
  label: string;
  description?: string;
}

const variantOptions: TabOption[] = [
  { value: "masonry", label: "Masonry" },
  { value: "carousel", label: "Carousel" },
  { value: "scroll", label: "Scroll" },
  { value: "list", label: "List" },
];

const themeOptions: TabOption[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "gradient", label: "Gradient" },
  { value: "minimal", label: "Minimal" },
];

interface TabGroupProps {
  options: TabOption[];
  activeValue: string;
  onChange: (value: TESTIMONIALS_THEME | TESTIMONIALS_VARIANT) => void;
  colorScheme: "indigo" | "violet";
}

const TabGroup: React.FC<TabGroupProps> = ({
  options,
  activeValue,
  onChange,
  colorScheme,
}) => {
  const colors = {
    indigo: {
      active: "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25",
      inactive: "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50",
      background: "bg-gray-100/80",
    },
    violet: {
      active: "bg-violet-600 text-white shadow-lg shadow-violet-500/25",
      inactive: "text-gray-700 hover:text-violet-600 hover:bg-violet-50/50",
      background: "bg-gray-100/80",
    },
  };

  return (
    <div
      className={`inline-flex p-1.5 ${colors[colorScheme].background} backdrop-blur-sm rounded-xl border border-white/20 shadow-sm`}
    >
      {options.map((option) => {
        const isActive = activeValue === option.value;
        return (
          <button
            key={option.value}
            onClick={() =>
              onChange(
                option.value as TESTIMONIALS_THEME | TESTIMONIALS_VARIANT
              )
            }
            className={`relative px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 ease-out min-w-[90px] ${isActive
              ? colors[colorScheme].active
              : colors[colorScheme].inactive
              }`}
          >
            {isActive && (
              <motion.div
                layoutId={`tab-${colorScheme}`}
                className={`absolute inset-0 ${colors[colorScheme].active} rounded-lg`}
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10 block font-semibold">
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

const LiveDemo = () => {
  const [demoTheme, setDemoTheme] = useState<TESTIMONIALS_THEME>("light");
  const [demoVariant, setDemoVariant] =
    useState<TESTIMONIALS_VARIANT>("masonry");

  return (
    <section id="demo" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-emerald-100 text-emerald-800 font-medium px-4 py-1 rounded-full">
            Interactive Demo
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent tracking-tight">
            Explore Testimonials in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Switch between layouts and themes to see instant results
          </p>
        </motion.div>

        {/* Controls and Preview Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        >
          {/* Controls Header */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 border-b border-gray-200 p-8">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              {/* Variant Selection */}
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <span className="text-sm font-semibold text-gray-700 tracking-wide uppercase">
                    Layout
                  </span>
                </div>
                <TabGroup
                  options={variantOptions}
                  activeValue={demoVariant}
                  onChange={(value) =>
                    setDemoVariant(value as TESTIMONIALS_VARIANT)
                  }
                  colorScheme="indigo"
                />
              </div>

              {/* Divider */}
              <div className="hidden lg:block w-px h-16 bg-gray-300"></div>
              <div className="lg:hidden w-16 h-px bg-gray-300"></div>

              {/* Theme Selection */}
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                  <span className="text-sm font-semibold text-gray-700 tracking-wide uppercase">
                    Theme
                  </span>
                </div>
                <TabGroup
                  options={themeOptions}
                  activeValue={demoTheme}
                  onChange={(value) =>
                    setDemoTheme(value as TESTIMONIALS_THEME)
                  }
                  colorScheme="violet"
                />
              </div>
            </div>
          </div>

          {/* Live Preview Area */}
          <div className="p-8">
            {/* <Testimonials
              data={mockTestimonials}
              variant={demoVariant}
              theme={demoTheme}
            /> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveDemo;
