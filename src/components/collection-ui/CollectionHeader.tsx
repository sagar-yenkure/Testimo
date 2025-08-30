import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { collectionWithTestimonials } from "../dashboard-ui/CollectionsGrid";

const CollectionHeader = ({
  collection,
}: {
  collection: collectionWithTestimonials;
}) => {
  // Derived stats
  const totalTestimonials = collection.testimonials?.length ?? 0;
  const textTestimonials =
    collection.testimonials?.filter((t) => t.type === "TEXT")?.length ?? 0;

  const videoTestimonials =
    collection.testimonials?.filter((t) => t.type === "VIDEO")?.length ?? 0;

  const highlightedTestimonials =
    collection.testimonials?.filter((t) => t.status === "HIGHLIGHTED")
      ?.length ?? 0;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard">
            <Button variant="secondary" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {collection.name}
            </h1>
            <p className="text-gray-600 mt-1">{collection.description}</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <p className="text-2xl font-bold text-blue-600">
            {totalTestimonials}
          </p>
          <p className="text-sm text-gray-600">Total</p>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <p className="text-2xl font-bold text-green-600">
            {textTestimonials}
          </p>
          <p className="text-sm text-gray-600">Text</p>
        </div>
        <div className="text-center p-3 bg-purple-50 rounded-lg">
          <p className="text-2xl font-bold text-purple-600">
            {videoTestimonials}
          </p>
          <p className="text-sm text-gray-600">Video</p>
        </div>
        <div className="text-center p-3 bg-yellow-50 rounded-lg">
          <p className="text-2xl font-bold text-yellow-600">
            {highlightedTestimonials}
          </p>
          <p className="text-sm text-gray-600">Highlighted</p>
          <p className="text-xs italic py-1 text-gray-900">
            Highlighted ones will be visible on wall of love
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionHeader;
