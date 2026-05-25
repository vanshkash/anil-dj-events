import HeroSection from "@/components/server/HeroSection";
import ServicesSection from "@/components/server/ServicesSection";
import GallerySection from "@/components/server/GallerySection";
import AboutSection from "@/components/server/AboutSection";
import ContactSection from "@/components/server/ContactSection";
import ReviewsSection from "@/components/server/ReviewsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
     <ContactSection/>
     <ReviewsSection/>
    </>
  );
}