"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

const faqs = [
  {
    question: "Quanto custa uma landing page?",
    answer:
      "A landing page essencial começa em R$ 297 para projetos objetivos, com até 5 seções, botão para WhatsApp, publicação e até 2 rodadas de ajustes iniciais. O valor final depende da quantidade de seções, conteúdo e funcionalidades adicionais.",
  },
  {
    question: "Em quanto tempo fica pronta?",
    answer:
      "O prazo é definido conforme o projeto e o envio dos materiais necessários.",
  },
  {
    question: "A landing page funciona no celular?",
    answer:
      "Sim. Todas as páginas são desenvolvidas para funcionar em computadores, tablets e celulares.",
  },
  {
    question: "Vocês também criam aplicativos e sistemas?",
    answer:
      "Sim. A RafferTec também desenvolve aplicativos mobile, sistemas web, automações e integrações.",
  },
  {
    question: "Preciso já ter textos e imagens?",
    answer:
      "Não necessariamente. Podemos orientar a organização do conteúdo, mas fotos, informações e identidade visual do negócio ajudam a deixar o projeto mais personalizado.",
  },
  {
    question: "O domínio e a hospedagem estão inclusos?",
    answer:
      "O domínio pode ter custo anual, e a hospedagem depende da solução escolhida. Serviços externos são avaliados conforme o projeto. Qualquer custo recorrente é informado antes da contratação.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-brand"
        aria-expanded={isOpen}
      >
        <span className="pr-8 text-base font-medium text-foreground">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-6 w-6 shrink-0 items-center justify-center text-muted"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[15px] leading-relaxed text-muted">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface py-28 lg:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <SectionHeader
              label="Perguntas frequentes"
              title="Tire suas dúvidas"
              description="Respondemos as perguntas mais comuns. Se a sua não estiver aqui, fale conosco."
              align="left"
            />
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              {faqs.map((faq, i) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
