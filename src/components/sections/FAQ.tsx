"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { WHATSAPP_URL } from "@/lib/utils";

const faqs = [
  [
    "Como é definido o valor de um projeto?",
    "O investimento considera escopo, quantidade de telas, integrações, conteúdo e complexidade técnica. Depois da conversa inicial, enviamos uma proposta clara com entregas, prazo e condições.",
  ],
  [
    "A RafferTec faz apenas sites e landing pages?",
    "Não. Desenvolvemos sites institucionais, aplicativos Android e iOS, sistemas web, painéis administrativos, automações e integrações entre plataformas.",
  ],
  [
    "Em quanto tempo o projeto fica pronto?",
    "O prazo depende do escopo e da disponibilidade dos materiais. Um site objetivo pode levar poucas semanas; produtos e sistemas mais complexos são organizados em etapas.",
  ],
  [
    "Vou conseguir acompanhar o desenvolvimento?",
    "Sim. Você recebe atualizações, prévias e participa das decisões importantes. O processo foi desenhado para evitar surpresas na entrega.",
  ],
  [
    "Vocês ajudam com conteúdo e identidade visual?",
    "Ajudamos a organizar a mensagem, a hierarquia do conteúdo e a direção visual. Quando o projeto exige produção especializada adicional, alinhamos isso antes de iniciar.",
  ],
  [
    "Existe suporte depois da publicação?",
    "Sim. A entrega inclui orientação e suporte inicial. Manutenção contínua, evolução e novas funcionalidades podem ser contratadas conforme a necessidade.",
  ],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section-shell bg-white py-20 text-[#071426] lg:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <FadeIn>
            <div className="lg:sticky lg:top-28">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
                <MessageCircle className="h-5 w-5" />
              </span>
              <p className="technical-label mt-6 text-[10px] text-blue-600">
                Perguntas frequentes
              </p>
              <h2
                className="mt-4 font-[family-name:'Space_Grotesk_Variable'] font-semibold tracking-[-0.04em]"
                style={{
                  fontSize: "clamp(1.65rem, 2vw + 1rem, 2.5rem)",
                  lineHeight: 1.15,
                }}
              >
                Antes de começar, tire suas dúvidas.
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
                Não encontrou sua pergunta? Fale diretamente com a gente.
              </p>
              <Button
                href={WHATSAPP_URL}
                external
                variant="outline"
                className="mt-7"
              >
                Fazer uma pergunta
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="space-y-3">
              {faqs.map(([q, a], i) => {
                const active = open === i;
                const panelId = `faq-panel-${i}`;
                const buttonId = `faq-button-${i}`;
                return (
                  <article
                    key={q}
                    className={`overflow-hidden rounded-2xl border transition-all ${
                      active
                        ? "border-blue-200 bg-blue-50/50"
                        : "border-slate-200 bg-[#f8fafc] hover:border-slate-300"
                    }`}
                  >
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => setOpen(active ? null : i)}
                      className="flex w-full items-center gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset sm:p-6"
                      aria-expanded={active}
                      aria-controls={panelId}
                    >
                      <span className="technical-label text-[9px] text-blue-600">
                        0{i + 1}
                      </span>
                      <span className="flex-1 text-sm font-semibold sm:text-base">
                        {q}
                      </span>
                      <motion.span
                        animate={{ rotate: active ? 45 : 0 }}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200"
                        aria-hidden="true"
                      >
                        <Plus className="h-4 w-4" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {active && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-6 pl-[4.75rem] text-sm leading-7 text-slate-600 sm:px-6 sm:pl-[5.25rem]">
                            {a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </article>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
