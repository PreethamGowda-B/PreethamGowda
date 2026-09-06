import AmbientCanvas from "@/components/hero/AmbientCanvas";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import ContextCursor from "@/components/ui/ContextCursor";
import CommandPalette from "@/components/navigation/CommandPalette";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";
import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import TechEcosystem from "@/components/skills/TechEcosystem";
import CareerTimeline from "@/components/experience/CareerTimeline";
import EducationDeck from "@/components/education/EducationDeck";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <div data-theme-root className="relative min-h-screen bg-(--bg-primary) text-(--text-primary) flex flex-col selection:bg-cyan-500/25 selection:text-white overflow-x-hidden transition-colors duration-250">
        {/* Filmic noise texture */}
        <NoiseOverlay />

        {/* Desktop Contextual Kinetic Cursor (touch-disabled, reduced-motion safe) */}
        <ContextCursor />

        {/* Global Command Palette (Cmd+K / Ctrl+K) */}
        <CommandPalette />

        {/* Interactive ambient particle canvas (paused when hidden) */}
        <AmbientCanvas />

        {/* Primary Floating Navigation */}
        <Navbar />

        {/* Main Orchestrated Experience */}
        <main className="relative z-10 flex-1 flex flex-col">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <TechEcosystem />
          <CareerTimeline />
          <EducationDeck />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
