import metadata from "@/components/landingPage-ui/metadata";
import StatsSection from "@/components/landingPage-ui/StatsSection";
import FeaturesSection from "@/components/landingPage-ui/FeaturesSection";
import SocialProof from "@/components/landingPage-ui/SocialProof";
import CTA from "@/components/landingPage-ui/CTA";
import HeroSection from "@/components/landingPage-ui/HeroSection";
import LiveDemo from "@/components/landingPage-ui/LiveDemo";
import Pricing from "@/components/pricing-ui/Pricing";

export { metadata };

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <LiveDemo />
      <SocialProof />
      <Pricing />
      <CTA />
    </div>
  );
}
