"use client";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import CollectionCard from "./CollectionCard";

import NoCollectionCard from "../NoCollectionCard";
import { useState } from "react";
import { CreateCollectionModal } from "../collection-ui/CreateCollectionModal";
import { Collection, Testimonial } from "../../../prisma/generated/prisma";

export interface collectionWithTestimonials extends Collection {
  testimonials: Testimonial[];
}

const CollectionsGrid = ({
  collections,
}: {
  collections: collectionWithTestimonials[];
}) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Your Collections</h2>
        <div className="flex items-center space-x-3">
          <Button
            onClick={() => setIsCreateModalOpen(!isCreateModalOpen)}
            className="hover:cursor-pointer"
            variant="secondary"
            size="sm"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Collection
          </Button>
        </div>
      </div>

      {collections?.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {collections?.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      ) : (
        <NoCollectionCard
          title="No Collections Yet"
          description="  Create your first testimonial collection to get started collecting
          customer feedback."
        />
      )}

      {/* Create Collection Modal */}

      <CreateCollectionModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </>
  );
};

export default CollectionsGrid;
