import { Framework } from "@/types";
import { getCodeExample, getInstallCommand } from "@/utils/Embedding";
import { AlertCircle, Check, Code, Copy, Download } from "lucide-react";
import React, { useState } from "react";

interface IntegrationSectionProps {
  selectedFramework: string;
  isProductionReady: boolean;
  selectedFrameworkData?: Framework;
  collectionId: string;
  selectedTheme: string;
}

const IntegrationSection = ({
  selectedFramework,
  isProductionReady,
  selectedFrameworkData,
  selectedTheme,
  collectionId,
}: IntegrationSectionProps) => {
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = async (text: string, codeType: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(codeType);
      setTimeout(() => setCopiedCode(""), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section className="mb-12">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="px-8 py-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900">
              Integration for {selectedFrameworkData?.name}
            </h2>
            {!isProductionReady && (
              <div className="bg-orange-100 px-4 py-2 rounded-full">
                <span className="text-orange-800 text-sm font-medium">
                  ⚠️ Experimental
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Warning for non-production frameworks */}
          {!isProductionReady &&
            selectedFrameworkData?.status === "coming-soon" && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">
                      Framework Coming Soon
                    </h3>
                    <p className="text-blue-800 text-sm mb-3">
                      Support for {selectedFrameworkData?.name} is currently in
                      development. We&apos;re working hard to bring you a great
                      integration experience.
                    </p>
                    <div className="text-sm text-blue-700">
                      <p className="font-medium mb-1">
                        For immediate production use, we recommend:
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          React - Full feature set with TypeScript support
                        </li>
                        <li>Next.js - SSR/SSG ready with SEO optimization</li>
                        <li>
                          Remix - Full-stack React with progressive enhancement
                        </li>
                      </ul>
                      <p className="font-medium mt-3 mb-1">Stay updated:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Follow our roadmap for release timelines</li>
                        <li>Join our newsletter for framework updates</li>
                        <li>Request early access to beta versions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

          {/* Installation */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Installation
            </h3>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm whitespace-pre">
                  {getInstallCommand(selectedFramework)}
                </pre>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(
                    getInstallCommand(selectedFramework),
                    "install"
                  )
                }
                className="absolute right-4 top-4 p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                {copiedCode === "install" ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {/* Code Example */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              Implementation Example
            </h3>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-gray-300 text-sm">
                  <code>
                    {getCodeExample(
                      selectedFramework,
                      collectionId,
                      selectedTheme
                    )}
                  </code>
                </pre>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(
                    getCodeExample(
                      selectedFramework,
                      collectionId,
                      selectedTheme
                    ),
                    "code"
                  )
                }
                className="absolute right-4 top-4 p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                {copiedCode === "code" ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
