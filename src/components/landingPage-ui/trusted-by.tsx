"use client";

import { motion } from "framer-motion";
import { companies } from "@/constants";

export function TrustedBy() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of businesses already collecting and showcasing
            testimonials with Testimo.
          </p>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-8 items-center justify-items-center">
            {companies.map(({ name, Icon }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                title={name}
              >
                <Icon className="w-8 h-8 text-gray-700" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
