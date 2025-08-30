"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Sidebar from "@/components/collection-ui/Sidebar";
import InboxContent from "@/components/collection-ui/InboxSection";
import { SidebarType } from "@/types";
import EmbeddingGuide from "@/components/Embedding-ui/EmbeddingGuide";

const CollectionDetail = () => {
  const params = useParams();
  const collectionId = params?.id as string;

  const [activeSidebarItem, setActiveSidebarItem] =
    useState<SidebarType>("inbox");

  const renderSidebarContent = () => {
    switch (activeSidebarItem) {
      case "integrations":
        return <h1 className="text-xl font-semibold">Integrations</h1>;
      case "embed":
        return <EmbeddingGuide collectionId={collectionId} />;
      default:
        return <InboxContent collectionId={collectionId} />;
    }
  };

  return (
    <div className=" bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="flex max-w-7xl mx-auto">
        <Sidebar
          activeSidebarItem={activeSidebarItem}
          setActiveSidebarItem={setActiveSidebarItem}
        />
        <div className="flex-1 p-8 min-h-screen">{renderSidebarContent()}</div>
      </div>
    </div>
  );
};

export default CollectionDetail;
