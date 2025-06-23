import { Background } from '@/components/Background';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { OfferSection } from '@/components/sections/OfferSection';
import { LocationsSection } from '@/components/sections/LocationsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <main className="relative">
        <HeroSection />
        <OfferSection />
        <LocationsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}