import { CustomerFeedback } from "@/components/landingPage-ui/customer-feedback";
import { HeroSection } from "@/components/landingPage-ui/hero-section";
import { IntegrationsSection } from "@/components/landingPage-ui/integrations-section";
import { TrustedBy } from "@/components/landingPage-ui/trusted-by";

const Home = async () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustedBy />
      <IntegrationsSection />
      <CustomerFeedback />
    </main>
  );
};

export default Home;
