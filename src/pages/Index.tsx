import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import VideosSection from "@/components/VideosSection";
import StudioSection from "@/components/StudioSection";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <VideosSection />
      <StudioSection />
      <EventsSection />
      <Footer />
    </div>
  );
};

export default Index;
