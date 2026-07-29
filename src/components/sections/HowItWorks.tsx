"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
  {
    number: "01",
    title: "Você apresenta sua ideia",
    description:
      "Conversamos para entender o negócio, o público e o objetivo do projeto.",
  },
  {
    number: "02",
    title: "Definimos a melhor solução",
    description:
      "Organizamos conteúdo, estrutura, funcionalidades e identidade visual.",
  },
  {
    number: "03",
    title: "Desenvolvemos o projeto",
    description:
      "Criamos a página, aplicativo ou sistema com acompanhamento durante o processo.",
  },
  {
    number: "04",
    title: "Você aprova",
    description:
      "Realizamos os ajustes combinados antes da publicação.",
  },
  {
    number: "05",
    title: "Publicamos e entregamos",
    description:
      "O projeto é disponibilizado e preparado para uso.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-surface py-28 lg:py-36">
      <Container>
        <FadeIn>
          <SectionHeader
            label="Como funciona"
            title="Como funciona"
            description="Processo simples, transparente e sem surpresas. Você acompanha cada etapa."
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.08}>
              <div className="relative">
                <p className="text-sm font-medium text-brand">{step.number}</p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
