import React, { useState } from "react";
import FrameworkSection from "../Embedding-ui/FrameworkSection";
import IntegrationSection from "../Embedding-ui/IntegrationSection";
import ConfigurationSection from "../Embedding-ui/ConfigurationSection";
import LivePreviewSection from "../Embedding-ui/LivePreviewSection";
import SupportSection from "../Embedding-ui/SupportSection";
import { frameworks } from "@/constants";

interface EmbeddingGuideProps {
  collectionId: string;
}

const EmbeddingGuide: React.FC<EmbeddingGuideProps> = ({ collectionId }) => {
  const [selectedFramework, setSelectedFramework] = useState("react");
  const [selectedTheme, setSelectedTheme] = useState("light");

  const selectedFrameworkData = frameworks.find(
    (f) => f.id === selectedFramework
  );
  const isProductionReady = selectedFrameworkData?.status === "ready";

  return (
    <div className="min-h-screen ">
      <FrameworkSection
        selectedFramework={selectedFramework}
        setSelectedFramework={setSelectedFramework}
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
      />
      <IntegrationSection
        isProductionReady={isProductionReady}
        selectedFrameworkData={selectedFrameworkData}
        selectedFramework={selectedFramework}
        collectionId={collectionId}
        selectedTheme={selectedTheme}
      />
      {isProductionReady && <ConfigurationSection />}
      <LivePreviewSection
        collectionId={collectionId}
        selectedTheme={selectedTheme}
      />
      <SupportSection />
    </div>
  );
};

export default EmbeddingGuide;
