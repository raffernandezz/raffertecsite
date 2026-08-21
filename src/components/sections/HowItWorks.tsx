"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
  [
    "01",
    "Imersão",
    "Objetivo, público, referências e restrições. A gente começa fazendo as perguntas certas.",
  ],
  [
    "02",
    "Direção",
    "Organizamos conteúdo, experiência e uma linguagem visual que pertence à sua marca.",
  ],
  [
    "03",
    "Construção",
    "Design e código avançam juntos, com prévias reais e decisões transparentes.",
  ],
  [
    "04",
    "Refino",
    "Testamos detalhes, responsividade, velocidade e ajustamos o que ainda não convence.",
  ],
  [
    "05",
    "Lançamento",
    "Publicação acompanhada, documentação e suporte para tudo continuar funcionando.",
  ],
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="overflow-hidden bg-[#f1f4f8] py-20 text-[#071426] lg:py-28"
    >
      <Container>
        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-12">
            <div>
              <p className="technical-label text-[10px] text-blue-600">
                Nosso processo
              </p>
              <h2
                className="mt-4 max-w-lg font-[family-name:'Space_Grotesk_Variable'] font-semibold tracking-[-0.04em] text-[#071426]"
                style={{
                  fontSize: "clamp(1.75rem, 2.2vw + 1rem, 2.75rem)",
                  lineHeight: 1.12,
                }}
              >
                Clareza antes da complexidade.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-[15px] lg:justify-self-end">
              Você acompanha o projeto evoluir. Sem semanas de silêncio,
              apresentações teatrais ou surpresas no final.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 lg:mt-16 lg:ml-[12%] xl:ml-[18%]">
          {steps.map(([number, title, description], index) => (
            <FadeIn key={number} delay={index * 0.04}>
              <motion.article
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="group grid gap-3 border-t border-slate-300/80 py-6 transition-colors hover:border-blue-400 sm:grid-cols-[4.5rem_10rem_1fr] sm:items-start sm:gap-6 sm:py-7"
              >
                <span className="technical-label text-[10px] text-blue-600">
                  {number}
                </span>
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#071426]">
                  {title}
                </h3>
                <p className="max-w-lg text-sm leading-7 text-slate-600">
                  {description}
                </p>
              </motion.article>
            </FadeIn>
          ))}
          <div className="border-t border-slate-300/80" />
        </div>
      </Container>
    </section>
  );
}
