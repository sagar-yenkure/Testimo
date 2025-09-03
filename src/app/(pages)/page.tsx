import HeroSection from "@/components/landingPage-ui/hero-section";
import StatsSection from "@/components/landingPage-ui/StatsSection";
import FeaturesSection from "@/components/landingPage-ui/FeaturesSection";
import Live_demo from "@/components/landingPage-ui/Live-demo";
import SocialProof from "@/components/landingPage-ui/SocialProof";
import CTA from "@/components/landingPage-ui/CTA";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <Live_demo />
      <SocialProof />
      <CTA />
    </div>
  );
}
