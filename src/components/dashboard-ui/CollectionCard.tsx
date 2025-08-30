import React from "react";
import { Calendar, ExternalLink, MessageSquare, Video } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { collectionWithTestimonials } from "./CollectionsGrid";
import Image from "next/image";
import Link from "next/link";

const CollectionCard = ({
  collection,
}: {
  collection: collectionWithTestimonials;
}) => {
  const totalText =
    collection.testimonials?.filter((t) => t.type === "TEXT").length ?? 0;
  const totalVideo =
    collection.testimonials?.filter((t) => t.type === "VIDEO").length ?? 0;

  return (
    <Card className="p-6 bg-white border border-gray-200 hover:shadow-lg transition-all duration-200 hover:border-blue-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex gap-3 items-center">
            <Image
              height={50}
              width={50}
              src={collection.logo.trim()}
              alt={collection.title}
              className="w-10 h-10 object-cover border-2 rounded-full"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {collection.name}
            </h3>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center p-3 bg-blue-50 rounded-lg">
          <MessageSquare className="w-5 h-5 text-blue-600 mr-2" />
          <div>
            <p className="text-sm font-medium text-gray-900">{totalText}</p>
            <p className="text-xs text-gray-600">Text</p>
          </div>
        </div>
        <div className="flex items-center p-3 bg-purple-50 rounded-lg">
          <Video className="w-5 h-5 text-purple-600 mr-2" />
          <div>
            <p className="text-sm font-medium text-gray-900">{totalVideo}</p>
            <p className="text-xs text-gray-600">Video</p>
          </div>
        </div>
      </div>

      {/* Meta Info */}
      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
        <div className="flex items-center">
          <Calendar className="w-3 h-3 mr-1" />
          Created {new Date(collection.createdAt).toLocaleDateString()}
        </div>
        <div>Updated {new Date(collection.updatedAt).toLocaleDateString()}</div>
      </div>

      {/* Actions */}
      <Button
        asChild
        size="sm"
        className="bg-blue-700 hover:bg-blue-900 text-white"
      >
        <Link href={`/dashboard/${collection.id}`}>
          <ExternalLink className="w-4 h-4 mr-2" />
          View Collection
        </Link>
      </Button>
    </Card>
  );
};

export default CollectionCard;
