"use client";

import { Heart, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";

export function Footer() {
  const footerLinks = {
    Product: ["Features", "Integrations", "Pricing", "API", "Changelog"],
    Company: ["About", "Blog", "Careers", "Press", "Partners"],
    Support: ["Help Center", "Documentation", "Status", "Contact", "Community"],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "GDPR",
      "Security",
    ],
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                  <Heart className="w-5 h-5 text-white fill-current" />
                </div>
                <span className="text-xl font-bold">Testimo</span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                The easiest way to collect and showcase customer testimonials.
                Build trust, increase conversions, and grow your business with
                authentic customer stories.
              </p>

              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Stay Updated</h4>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                  />
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Testimo. All rights reserved.
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>Made with ❤️ for growing businesses</span>
            <div className="flex items-center space-x-1">
              <span>Status:</span>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-green-400">All systems operational</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
