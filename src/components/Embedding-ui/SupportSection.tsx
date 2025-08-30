import { Shield } from "lucide-react";
import React from "react";

const SupportSection = () => {
  return (
    <section>
      <div className="bg-white rounded-2xl shadow-md border text-center px-3 py-5">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Need Help Getting Started?
          </h2>
          <p className="text-gray-600 mb-8">
            Our team will guide you through integrating testimonials into your
            React apps and keep you updated on new framework releases.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center mx-auto">
            <Shield className="w-5 h-5 mr-2" />
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
