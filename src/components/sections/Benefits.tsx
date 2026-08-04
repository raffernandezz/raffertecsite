"use client";

import {
  Gauge,
  Layers,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const deliverables = [
  {
    icon: Layers,
    title: "Estrutura para conversão",
    text: "Conteúdo, hierarquia e navegação pensados para conduzir o visitante até a ação.",
  },
  {
    icon: Gauge,
    title: "Performance e responsividade",
    text: "Interface rápida, testada em celular, tablet e desktop — sem comprometer a experiência.",
  },
  {
    icon: Rocket,
    title: "Entrega pronta para operar",
    text: "Publicação, integrações e suporte inicial para o projeto funcionar de verdade.",
  },
  {
    icon: ShieldCheck,
    title: "Transparência no processo",
    text: "Prévias reais, escopo claro e acompanhamento em cada etapa do desenvolvimento.",
  },
];

export function Benefits() {
  return (
    <section className="bg-[#eef4fb] py-16 text-[#071426] lg:py-24">
      <Container>
        <FadeIn>
          <p className="technical-label text-[10px] text-blue-600">
            O que você recebe
          </p>
          <h2
            className="mt-3 max-w-xl font-[family-name:'Space_Grotesk_Variable'] text-3xl font-semibold tracking-[-0.035em] sm:text-4xl"
          >
            Cada projeto com padrão de produto, não de template.
          </h2>
        </FadeIn>

        <StaggerContainer
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          staggerDelay={0.08}
        >
          {deliverables.map((item) => (
            <StaggerItem key={item.title}>
              <article
                className="group h-full rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(30,64,175,0.08)]"
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 transition-colors group-hover:border-blue-200 group-hover:bg-blue-100"
                >
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
