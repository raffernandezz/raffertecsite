import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Hero } from "@/components/sections/Hero";
import { Segments } from "@/components/sections/Segments";
import { Benefits } from "@/components/sections/Benefits";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Solutions } from "@/components/sections/Solutions";
import { LandingPossibilities } from "@/components/sections/LandingPossibilities";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LandingOffer } from "@/components/sections/LandingOffer";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Segments />
        <Benefits />
        <FeaturedProject />
        <Solutions />
        <LandingPossibilities />
        <HowItWorks />
        <LandingOffer />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
