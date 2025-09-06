"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const CTA = () => {
  return (
    <section className="py-20  bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to boost your conversions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses that trust TestimonialPro to showcase
            their customer success stories.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signin" passHref>
              <Button
                asChild
                size="lg"
                className=" text-white px-8 py-3"
              >
                <span>
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 inline" />
                </span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
