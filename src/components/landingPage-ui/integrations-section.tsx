"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { integrations } from "@/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.05 },
  }),
};

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Integrate with Your Favorite Tools
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Seamlessly connect with popular platforms to import testimonials and
            sync your workflows.
          </p>
        </motion.div>

        {/* Grid of Integration Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-20">
          {integrations.map((integration, i) => (
            <motion.div
              key={integration.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
            >
              <Card className="p-6 text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${integration.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                >
                  <span className="text-xl text-white">
                    {<integration.icon />}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-gray-900">
                  {integration.name}
                </h3>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
