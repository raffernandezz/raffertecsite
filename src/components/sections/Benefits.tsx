"use client";

import { Gauge, Layers, Rocket, ShieldCheck } from "lucide-react";
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
    <section className="bg-white py-20 text-[#071426] lg:py-28">
      <Container>
        <FadeIn>
          <p className="technical-label text-[10px] text-blue-600">
            O que você recebe
          </p>
          <h2
            className="mt-4 max-w-xl font-[family-name:'Space_Grotesk_Variable'] font-semibold tracking-[-0.035em] text-[#071426]"
            style={{
              fontSize: "clamp(1.65rem, 2vw + 1rem, 2.5rem)",
              lineHeight: 1.15,
            }}
          >
            Cada projeto com padrão de produto, não de template.
          </h2>
        </FadeIn>

        <StaggerContainer
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.07}
        >
          {deliverables.map((item) => (
            <StaggerItem key={item.title}>
              <article className="group h-full rounded-2xl border border-slate-200/90 bg-[#f8fafc] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-[0_16px_40px_rgba(15,40,90,0.06)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-blue-600 transition-colors group-hover:border-blue-100 group-hover:bg-blue-50">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold tracking-[-0.02em] sm:text-lg">
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
