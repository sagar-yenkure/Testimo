import { ConfigurationOptions } from "@/constants";
import { Settings } from "lucide-react";
import React from "react";

const ConfigurationSection = () => {
  return (
    <section className="mb-12">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="px-8 py-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center">
            <Settings className="mr-3" />
            Configuration Options
          </h2>
          <p className="text-gray-600 mt-2">
            Complete configuration reference for production use
          </p>
        </div>
        <div className="p-8">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Property
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Default
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {ConfigurationOptions.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4">
                      <code className="text-sm font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {item.prop}
                      </code>
                    </td>
                    <td className="px-6 py-4">
                      <code className="text-sm font-mono bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {item.type}
                      </code>
                    </td>
                    <td className="px-6 py-4">
                      <code className="text-sm font-mono text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        {item.default}
                      </code>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfigurationSection;
