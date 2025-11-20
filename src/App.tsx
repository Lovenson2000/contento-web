import PhoneCarousel from "./components/Carousel";
import Footer from "./components/Footer";
import HeroTextSection from "./components/HeroTextSection";
import LogoHeader from "./components/Logo";

export default function LandingPage() {
  return (
    <div className="pb-16 md:pb-0 min-h-screen w-full bg-white overflow-x-hidden relative">
      <LogoHeader />
      <div
        className="min-h-screen mt-16 md:mt-0
        flex flex-col md:flex-row 
        items-center justify-center 
        gap-12 md:gap-20 
        px-6 md:px-12 lg:px-20 
        max-w-7xl mx-auto"
      >
        <HeroTextSection />
        <PhoneCarousel />
      </div>
      <Footer />
    </div>
  );
}
