"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Copy, Check, ArrowRight } from "lucide-react";

import { useState } from "react";

export function TryItYourself() {
  const [copiedReact, setCopiedReact] = useState(false);
  const [copiedHtml, setCopiedHtml] = useState(false);

  const htmlCode = `<div id="testimonial-widget"></div>
<script 
  src="https://widget.Testimo.com/embed.js"
  data-widget-id="demo-widget-123"
  data-theme="light"
></script>`;

  const reactCode = `import TestimonialWidget from '@Testimo/react';

function App() {
  return (
    <div>
      <TestimonialWidget 
        widgetId="demo-widget-123"
        theme="light"
        layout="grid"
      />
    </div>
  );
}`;

  const copyToClipboard = (text: string, type: "react" | "html") => {
    navigator.clipboard.writeText(text);
    if (type === "react") {
      setCopiedReact(true);
      setTimeout(() => setCopiedReact(false), 2000);
    } else {
      setCopiedHtml(true);
      setTimeout(() => setCopiedHtml(false), 2000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Try It Yourself
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Embed testimonials on your site in minutes. Copy the code below and
            see the magic happen.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* HTML Code Block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden">
                <div className="bg-gray-900 px-4 py-3 flex items-center justify-between">
                  <span className="text-white font-medium">HTML</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(htmlCode, "html")}
                    className="text-white hover:bg-gray-800"
                  >
                    {copiedHtml ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <div className="bg-gray-950 p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300 font-mono">
                    <code>{htmlCode}</code>
                  </pre>
                </div>
              </Card>
            </motion.div>

            {/* React Code Block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="bg-blue-900 px-4 py-3 flex items-center justify-between">
                  <span className="text-white font-medium">React</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(reactCode, "react")}
                    className="text-white hover:bg-blue-800"
                  >
                    {copiedReact ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <div className="bg-gray-950 p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300 font-mono">
                    <code>{reactCode}</code>
                  </pre>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Live Preview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2].map((item) => (
                  <div
                    key={item}
                    className="p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mr-3"></div>
                      <div>
                        <p className="font-medium text-sm text-gray-900">
                          Customer Name
                        </p>
                        <div className="flex text-yellow-400 text-xs">
                          ★★★★★
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      &quot;This widget is exactly what we needed. Super easy to
                      implement and looks great on our site!&quot;
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Create your widget in minutes and start collecting testimonials
                today. No credit card required for the free plan.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Create Your Widget
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
