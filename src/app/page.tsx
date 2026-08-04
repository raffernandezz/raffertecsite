import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Hero } from "@/components/sections/Hero";
import { CredibilityBar } from "@/components/sections/CredibilityBar";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Solutions } from "@/components/sections/Solutions";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { LandingPossibilities } from "@/components/sections/LandingPossibilities";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { LandingOffer } from "@/components/sections/LandingOffer";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScrollReveal y={28}>
          <CredibilityBar />
        </ScrollReveal>
        <ScrollReveal y={20} delay={0.04}>
          <TechMarquee />
        </ScrollReveal>
        <SectionDivider />
        <ScrollReveal y={36}>
          <Solutions />
        </ScrollReveal>
        <SectionDivider />
        <ScrollReveal y={40}>
          <FeaturedProject />
        </ScrollReveal>
        <ScrollReveal y={40}>
          <LandingPossibilities />
        </ScrollReveal>
        <SectionDivider />
        <ScrollReveal y={36}>
          <HowItWorks />
        </ScrollReveal>
        <SectionDivider />
        <ScrollReveal y={36}>
          <Benefits />
        </ScrollReveal>
        <ScrollReveal y={40}>
          <LandingOffer />
        </ScrollReveal>
        <ScrollReveal y={36}>
          <About />
        </ScrollReveal>
        <ScrollReveal y={40}>
          <FAQ />
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
