"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, CheckCircle, Star } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Collect and Show{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Customer Love
              </span>{" "}
              With Ease
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl"
            >
              Capture video & text testimonials and showcase them anywhere.
              Build trust, increase conversions, and grow your business with
              authentic customer stories.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link
                href="/signin"
                className="bg-blue-600 flex hover:bg-blue-700 hover:cursor-pointer text-white px-4 py-2 justify-center items-center rounded-lg text-lg"
              >
                Try for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Product Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="p-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Share your testimonial
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Play className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-blue-200 rounded-full">
                          <div className="h-2 bg-blue-600 rounded-full w-3/4"></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <div>
                          <div className="h-3 bg-gray-200 rounded w-20 mb-1"></div>
                          <div className="h-2 bg-gray-100 rounded w-16"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-100 rounded w-full"></div>
                        <div className="h-2 bg-gray-100 rounded w-4/5"></div>
                        <div className="h-2 bg-gray-100 rounded w-3/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Submit Testimonial
                </Button>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3"
            >
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-900">5.0</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-green-500 text-white rounded-lg shadow-lg p-3"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm font-medium">+127 testimonials</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
