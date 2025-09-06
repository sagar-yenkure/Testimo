"use client";

import { useState } from "react";
import Sidebar from "@/components/collection-ui/Sidebar";
import InboxContent from "@/components/collection-ui/InboxSection";
import { SidebarType } from "@/types";
import EmbeddingGuide from "@/components/Embedding-ui/EmbeddingGuide";

export default function SidebarClient({ collectionId }: { collectionId: string }) {
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
        <>
            <Sidebar
                activeSidebarItem={activeSidebarItem}
                setActiveSidebarItem={setActiveSidebarItem}
            />
            <div className="flex-1 p-8 min-h-screen">{renderSidebarContent()}</div>
        </>
    );
}
