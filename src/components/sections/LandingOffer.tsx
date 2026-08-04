"use client";

import { CheckCircle2, Clock3, MessageSquareText, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ui/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";

const assurances = [
  {
    icon: MessageSquareText,
    title: "Conversa direta",
    text: "Você fala com quem vai construir.",
  },
  {
    icon: Clock3,
    title: "Etapas visíveis",
    text: "Acompanhamento durante todo o projeto.",
  },
  {
    icon: ShieldCheck,
    title: "Escopo transparente",
    text: "Prazos e custos alinhados antes de começar.",
  },
];

export function LandingOffer() {
  return (
    <section id="oferta" className="section-shell bg-[#f8fafc] py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <FadeIn>
            <div className="lg:sticky lg:top-28">
              <p className="technical-label text-[10px] text-blue-600">
                Comece uma conversa
              </p>
              <h2 className="mt-5 font-[family-name:'Space_Grotesk_Variable'] text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#071426] sm:text-5xl">
                Seu próximo projeto pode começar aqui.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-7 text-slate-600">
                Conte o que sua empresa precisa. Nós ajudamos a definir o melhor
                caminho — site, aplicativo, sistema ou automação.
              </p>
              <div className="mt-8 space-y-3">
                {assurances.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-[#071426]">
                        {title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-7 flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Primeiro contato sem custo e sem compromisso.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.06}>
            <ContactForm />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
