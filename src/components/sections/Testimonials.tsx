"use client";

import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const rating = 4.8;
const reviewCount = 11;

const testimonials = [
  {
    name: "Camila R.",
    role: "Restaurante · São Bernardo",
    stars: 5,
    text: "Combinamos o site em duas conversas. O cardápio ficou fácil de atualizar e o pedido pelo WhatsApp passou a aparecer mais.",
  },
  {
    name: "Diego S.",
    role: "Barbearia · Diadema",
    stars: 5,
    text: "Não ficou com cara de template. A equipe mostrou prévias reais e ajustou o que eu pedia sem enrolar.",
  },
  {
    name: "Fernanda M.",
    role: "Clínica · ABC Paulista",
    stars: 4,
    text: "O prazo atrasou uns dias, mas avisaram. No fim o site ficou limpo, rápido no celular e com agendamento direto.",
  },
];

function Stars({ value, size = "sm" }: { value: number; size?: "sm" | "md" }) {
  const iconClass = size === "md" ? "h-5 w-5" : "h-3.5 w-3.5";

  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.min(1, Math.max(0, value - i));
        return (
          <span key={i} className="relative inline-flex">
            <Star className={iconClass} fill="transparent" stroke="#d6d3d1" strokeWidth={1.6} />
            {fill > 0 && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <Star
                  className={iconClass}
                  fill="#f59e0b"
                  stroke="#f59e0b"
                  strokeWidth={1.6}
                />
              </span>
            )}
          </span>
        );
      })}
    </span>
  );
}

export function Testimonials() {
  return (
    <section
      id="opinioes"
      className="section-shell bg-white py-16 text-[#071426] lg:py-24"
      aria-labelledby="testimonials-title"
    >
      <Container>
        <FadeIn>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="technical-label text-[10px] text-blue-600">
                Quem já contratou
              </p>
              <h2
                id="testimonials-title"
                className="mt-3 max-w-xl font-[family-name:'Space_Grotesk_Variable'] text-3xl font-semibold tracking-[-0.035em] sm:text-4xl"
              >
                Feedback direto, sem discurso de agência.
              </h2>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-[#f8fafc] px-5 py-4">
              <div>
                <p className="font-[family-name:'Space_Grotesk_Variable'] text-3xl font-semibold tracking-tight text-[#071426]">
                  {rating.toFixed(1)}
                </p>
                <Stars value={rating} size="md" />
              </div>
              <div className="border-l border-slate-200 pl-4">
                <p className="text-sm font-medium text-[#071426]">
                  {reviewCount} avaliações
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  Projetos entregues entre 2024 e 2026
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <StaggerContainer
          className="mt-10 grid gap-4 md:grid-cols-3"
          staggerDelay={0.08}
        >
          {testimonials.map((item) => (
            <StaggerItem key={item.name}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 sm:p-6">
                <Stars value={item.stars} />
                <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
                  “{item.text}”
                </p>
                <div className="mt-5 border-t border-slate-200 pt-4">
                  <p className="text-sm font-semibold text-[#071426]">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">{item.role}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
