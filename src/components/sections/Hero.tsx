"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroMockup } from "@/components/ui/LandingMockup";
import { WHATSAPP_URL } from "@/lib/utils";

const highlights = [
  {
    title: "Design responsivo",
    description: "Funciona em computadores, tablets e celulares.",
  },
  {
    title: "Processo ágil",
    description:
      "Estrutura organizada para desenvolver e publicar o projeto sem etapas desnecessárias.",
  },
  {
    title: "Atendimento personalizado",
    description: "Acompanhamento direto em cada etapa do projeto.",
  },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white pt-28 pb-16 lg:pt-0 lg:pb-0">
      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="order-1"
          >
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Soluções digitais para o seu negócio
            </p>

            <h1 className="text-[2.25rem] font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
              Transforme sua presença digital em{" "}
              <span className="text-brand">novos clientes</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Landing pages, sites, aplicativos e sistemas desenvolvidos para
              apresentar seu negócio com profissionalismo e facilitar o contato
              com seus clientes.
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted/80">
              Cada projeto é desenvolvido de acordo com a identidade e a
              necessidade do seu negócio.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={WHATSAPP_URL} size="lg" external>
                Solicitar orçamento
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
              <Button href="#trampofeito" variant="secondary" size="lg">
                Conhecer projetos
              </Button>
            </div>

            <div className="mt-12 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.title}>
                  <p className="text-sm font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="order-2 flex justify-center px-2 sm:px-4 lg:justify-end lg:px-0"
          >
            <HeroMockup className="w-full max-w-[min(100%,32.5rem)]" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
