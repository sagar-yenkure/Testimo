"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Badge } from "../ui/badge";
import CollectionTestimonialsCard from "./CollectionTestimonialsCard";
import NoCollectionCard from "../NoCollectionCard";
import { InboxTabType } from "@/types";
import { trpc } from "@/trpc/client";
import CollectionHeader from "./CollectionHeader";

const InboxContent = ({ collectionId }: { collectionId: string }) => {
  const { data: collection, isLoading } =
    trpc.testimonial.getTestimonial.useQuery({
      id: collectionId,
    });

  const [activeTab, setActiveTab] = useState<InboxTabType>("all");

  if (isLoading) {
    return <p className="p-4">Loading testimonials...</p>;
  }

  if (!collection?.data) {
    return (
      <NoCollectionCard title="No Data" description="Collection not found" />
    );
  }

  const testimonials = collection.data?.testimonials || [];

  const filterTestimonials = (type: InboxTabType) => {
    switch (type) {
      case "video":
        return testimonials.filter((t) => t.type === "VIDEO");
      case "text":
        return testimonials.filter((t) => t.type === "TEXT");
      case "liked":
        return testimonials.filter((t) => t.status === "LIKED");
      case "isHighlighted":
        return testimonials.filter((t) => t.status === "HIGHLIGHTED");
      case "archived":
        return testimonials.filter((t) => t.status === "ARCHIVED");
      case "spam":
        return testimonials.filter((t) => t.status === "SPAM");
      default:
        return testimonials;
    }
  };

  const filteredTestimonials = filterTestimonials(activeTab);

  const tabItems = [
    { id: "all", label: "All", count: testimonials.length },
    {
      id: "video",
      label: "Video",
      count: testimonials.filter((t) => t.type === "VIDEO").length,
    },
    {
      id: "text",
      label: "Text",
      count: testimonials.filter((t) => t.type === "TEXT").length,
    },
    {
      id: "isHighlighted",
      label: "highlighted",
      count: testimonials.filter((t) => t.status === "HIGHLIGHTED").length,
    },
    {
      id: "liked",
      label: "Liked",
      count: testimonials.filter((t) => t.status === "LIKED").length,
    },
    {
      id: "archived",
      label: "Archived",
      count: testimonials.filter((t) => t.status == "ARCHIVED").length,
    },
    {
      id: "spam",
      label: "Spam",
      count: testimonials.filter((t) => t.status === "SPAM").length,
    },
  ];

  return (
    <div className="space-y-6">
      <CollectionHeader collection={collection.data} />

      <Tabs
        value={activeTab}
        onValueChange={(value: string) => setActiveTab(value as InboxTabType)}
        className="w-full"
      >
        <TabsList className="grid w-full md:grid-cols-8 bg-white border border-gray-200 rounded-lg p-1 h-full">
          {tabItems.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="flex items-center px-2 hover:cursor-pointer data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <span>{tab.label}</span>
              <Badge variant="secondary" className="text-xs">
                {tab.count}
              </Badge>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          {filteredTestimonials.length === 0 ? (
            <NoCollectionCard
              title="No testimonials found"
              description="Try changing the filter to see results"
            />
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {filteredTestimonials.map((testimonial) => (
                <CollectionTestimonialsCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InboxContent;
