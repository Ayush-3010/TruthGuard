import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContentAnalyzer from "@/components/ContentAnalyzer";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import AICapabilitiesSection from "@/components/AICapabilitiesSection";
import EducationSection from "@/components/EducationSection";
import ResourcesSection from "@/components/ResourceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-bg overflow-x-hidden">
      <ParticleBackground />
      <Header />
      
      <main className="relative z-10">
        <HeroSection />
        <ContentAnalyzer />
        <FeaturesSection />
        <PricingSection />
        <AICapabilitiesSection />
        <EducationSection />
        <ResourcesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;