"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
  ["01", "Imersão", "Objetivo, público, referências e restrições. A gente começa fazendo as perguntas certas."],
  ["02", "Direção", "Organizamos conteúdo, experiência e uma linguagem visual que pertence à sua marca."],
  ["03", "Construção", "Design e código avançam juntos, com prévias reais e decisões transparentes."],
  ["04", "Refino", "Testamos detalhes, responsividade, velocidade e ajustamos o que ainda não convence."],
  ["05", "Lançamento", "Publicação acompanhada, documentação e suporte para tudo continuar funcionando."],
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="overflow-hidden bg-[#f1f4f8] py-24 text-[#071426] lg:py-36">
      <Container>
        <FadeIn><div className="grid gap-8 lg:grid-cols-2"><div><p className="technical-label text-[10px] font-bold text-brand">Nosso processo</p><h2 className="display-type mt-4 text-5xl uppercase sm:text-7xl">Clareza antes<br />da complexidade.</h2></div><p className="max-w-md self-end text-base leading-relaxed text-[#526074]">Você acompanha o projeto evoluir. Sem semanas de silêncio, apresentações teatrais ou surpresas no final.</p></div></FadeIn>
        <div className="mt-16 lg:ml-[25%]">
          {steps.map(([number, title, description], index) => (
            <FadeIn key={number} delay={index * .05}>
              <motion.article whileHover={{ x: 12 }} className="group grid gap-4 border-t border-[#071426]/25 py-7 transition-colors hover:border-brand sm:grid-cols-[5rem_12rem_1fr] sm:items-center">
                <span className="technical-label text-xs text-brand">{number}</span>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="max-w-lg text-sm leading-relaxed text-[#526074]">{description}</p>
              </motion.article>
            </FadeIn>
          ))}
          <div className="border-t border-[#071426]/25" />
        </div>
      </Container>
    </section>
  );
}
