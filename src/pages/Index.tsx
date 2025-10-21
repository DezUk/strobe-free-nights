import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import PetitionSection from "@/components/PetitionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <PetitionSection />
      <Footer />
    </div>
  );
};

export default Index;
