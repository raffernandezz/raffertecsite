"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const segments = [
  "Restaurantes",
  "Clínicas",
  "Barbearias",
  "Oficinas",
  "Imobiliárias",
  "Advogados",
  "Salões de beleza",
  "Academias",
  "Pet shops",
  "Escritórios contábeis",
];

export function Segments() {
  return (
    <section className="border-y border-border bg-surface py-14">
      <Container>
        <FadeIn>
          <p className="mb-8 text-center text-sm text-muted">
            Atendemos negócios de todos os segmentos
          </p>
        </FadeIn>
      </Container>

      <div className="relative overflow-hidden">
        <div className="flex animate-marquee gap-12 whitespace-nowrap">
          {[...segments, ...segments].map((segment, i) => (
            <span
              key={`${segment}-${i}`}
              className="text-sm font-medium text-muted/60"
            >
              {segment}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
