import React from "react";
import { Card } from "../ui/card";
import { BarChart3, MessageSquare, TrendingUp, Video } from "lucide-react";
import { collectionWithTestimonials } from "./CollectionsGrid";

const OverviewStats = ({
  collections,
}: {
  collections: collectionWithTestimonials[];
}) => {
  const totalText = collections?.reduce(
    (acc, c) =>
      acc + (c.testimonials?.filter((t) => t.type === "TEXT").length ?? 0),
    0
  );

  const totalVideo = collections?.reduce(
    (acc, c) =>
      acc + (c.testimonials?.filter((t) => t.type === "VIDEO").length ?? 0),
    0
  );

  const topCollection =
    collections && collections.length > 0
      ? collections.reduce((top, current) => {
          const currentCount = current.testimonials?.length ?? 0;
          const topCount = top.testimonials?.length ?? 0;
          return currentCount > topCount ? current : top;
        })
      : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Card className="p-6 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">
              Total Collections
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {collections?.length}
            </p>
          </div>
          <div className="p-3 bg-blue-100 rounded-full">
            <BarChart3 className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">
              Text Testimonials
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{totalText}</p>
          </div>
          <div className="p-3 bg-green-100 rounded-full">
            <MessageSquare className="w-6 h-6 text-green-600" />
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">
              Video Testimonials
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {totalVideo}
            </p>
          </div>
          <div className="p-3 bg-purple-100 rounded-full">
            <Video className="w-6 h-6 text-purple-600" />
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Top Collection</p>
            <p className="text-lg font-semibold text-gray-900 mt-2">
              {topCollection ? topCollection.name : "No Collections"}
            </p>
            {topCollection && (
              <p className="text-sm text-gray-500">
                {topCollection.testimonials?.length ?? 0} Testimonials
              </p>
            )}
          </div>
          <div className="p-3 bg-orange-100 rounded-full">
            <TrendingUp className="w-6 h-6 text-orange-600" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OverviewStats;
