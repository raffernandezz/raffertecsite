import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Solutions } from "@/components/sections/Solutions";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { LandingPossibilities } from "@/components/sections/LandingPossibilities";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { LandingOffer } from "@/components/sections/LandingOffer";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#071426] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand"
      >
        Ir para o conteúdo
      </a>
      <Header />
      <main id="main">
        <Hero />
        <ScrollReveal y={40}>
          <LandingPossibilities />
        </ScrollReveal>
        <ScrollReveal y={40}>
          <FeaturedProject />
        </ScrollReveal>
        <SectionDivider />
        <ScrollReveal y={36}>
          <Solutions />
        </ScrollReveal>
        <SectionDivider />
        <ScrollReveal y={36}>
          <Benefits />
        </ScrollReveal>
        <SectionDivider />
        <ScrollReveal y={36}>
          <HowItWorks />
        </ScrollReveal>
        <ScrollReveal y={20} delay={0.04}>
          <TechMarquee />
        </ScrollReveal>
        <ScrollReveal y={36}>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal y={36}>
          <About />
        </ScrollReveal>
        <ScrollReveal y={40}>
          <FAQ />
        </ScrollReveal>
        <ScrollReveal y={40}>
          <LandingOffer />
        </ScrollReveal>
        <ScrollReveal y={32}>
          <FinalCTA />
        </ScrollReveal>
      </main>
      <ScrollReveal y={28}>
        <Footer />
      </ScrollReveal>
      <WhatsAppFloat />
    </>
  );
}
