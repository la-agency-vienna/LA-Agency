import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { ScrollTextSection } from '@/components/sections/ScrollTextSection';
import { OfferSection } from '@/components/sections/OfferSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <HeroSection />
        <ScrollTextSection />
        <OfferSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}