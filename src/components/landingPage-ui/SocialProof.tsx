"use client";
import { motion } from "framer-motion";

const SocialProof = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join thousands of businesses growing with testimonials
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Companies using TestimonialPro see an average 35% increase in
            conversions within the first month.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {[
              "TechCorp",
              "InnovateLabs",
              "DigitalFlow",
              "StartupX",
              "GrowthCo",
              "TechVision",
            ].map((company, index) => (
              <div key={index} className="text-white font-semibold text-lg">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
