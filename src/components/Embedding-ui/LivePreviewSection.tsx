import { Play } from "lucide-react";
import React from "react";

interface LiveSectionProps {
  selectedTheme: string;
  collectionId: string;
}

const LivePreviewSection = ({
  selectedTheme,
  collectionId,
}: LiveSectionProps) => {
  const demoUsers = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      rating: 5,
      text: "This widget has transformed how we showcase social proof. Setup was incredibly easy and the customization options are perfect.",
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "StartupXYZ",
      rating: 5,
      text: "Outstanding integration with our React app. The TypeScript support and documentation made implementation seamless.",
    },
    {
      name: "Emily Rodriguez",
      role: "CTO",
      company: "Enterprise Co",
      rating: 5,
      text: "Production-ready quality with enterprise-grade security. Exactly what we needed for our customer testimonials.",
    },
  ];
  return (
    <section className="mb-12">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="px-8 py-6 ">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center">
            <Play className="mr-3" />
            Live Preview
          </h2>
          <p className="text-gray-600 mt-2">
            Interactive preview of your testimonials widget
          </p>
        </div>
        <div className="p-6">
          <div
            className={`rounded-xl border-2 border-dashed border-gray-300 p-8 ${
              selectedTheme === "dark" ? "bg-gray-900" : "bg-gray-50"
            }`}
          >
            <div
              className={
                selectedTheme === "dark" ? "text-white" : "text-gray-900"
              }
            >
              <h3 className="text-2xl font-bold text-center mb-8">
                What our customers say
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {demoUsers.map((testimonial, i) => (
                  <div
                    key={i}
                    className={`p-6 rounded-xl ${
                      selectedTheme === "dark"
                        ? "bg-gray-800 border border-gray-700"
                        : "bg-white border border-gray-200"
                    } shadow-sm hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="ml-3">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">
                          {testimonial.role}
                        </div>
                        <div className="text-xs text-gray-400">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm mb-4 leading-relaxed">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-400 text-lg">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8 items-center">
                <p className="text-sm text-gray-500">
                  Collection ID:{" "}
                  <code className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-md text-xs font-mono">
                    {collectionId}
                  </code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LivePreviewSection;
