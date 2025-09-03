"use client";
import {
  Shield,
  BarChart3,
  MessageSquare,
  Sparkles,
  Globe,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Collect Testimonials",
      description:
        "Effortlessly gather text and video testimonials from your customers with our intuitive collection forms.",
    },
    {
      icon: Sparkles,
      title: "Beautiful Displays",
      description:
        "Showcase testimonials with stunning layouts - grid, masonry, carousel, and more with smooth animations.",
    },
    {
      icon: Shield,
      title: "Trust & Compliance",
      description:
        "Built-in consent management and spam protection to ensure authentic, compliant testimonials.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description:
        "Track performance metrics, conversion rates, and testimonial effectiveness with detailed analytics.",
    },
    {
      icon: Globe,
      title: "Easy Integration",
      description:
        "Embed testimonials anywhere with our simple widget or use our powerful API for custom implementations.",
    },
    {
      icon: TrendingUp,
      title: "Boost Conversions",
      description:
        "Increase sales and build trust with social proof that converts visitors into customers.",
    },
  ];
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-purple-100 text-purple-700">
              Features
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need to showcase social proof
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From collection to display, our platform handles every aspect of
              testimonial management with enterprise-grade security and
              beautiful design.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
