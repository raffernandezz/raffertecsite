"use client";

import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TrampoFeitoShowcase } from "@/components/ui/TrampoFeitoVisuals";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  TRAMPOFEITO_APP_STORE,
  WHATSAPP_APP_PROJECT_URL,
} from "@/lib/utils";

const editorialBlocks = [
  {
    title: "O desafio",
    text: "Conectar clientes e profissionais locais com busca por proximidade, avaliações confiáveis e publicação nas duas lojas — mantendo a experiência leve no celular.",
  },
  {
    title: "A solução",
    text: "App em React Native com Supabase, login com Apple e Google, perfis completos e fluxos pensados para o uso diário, não para demo.",
  },
  {
    title: "A entrega",
    text: "Produto publicado e operacional: cadastro, busca, avaliações e contato entre cliente e profissional já disponíveis para download.",
  },
];

const technologies = [
  "React Native",
  "TypeScript",
  "Supabase",
  "Stripe",
  "Apple",
  "Google",
];

export function FeaturedProject() {
  return (
    <section
      id="trampofeito"
      className="border-t border-slate-200/70 bg-white py-20 text-[#071426] lg:py-28"
    >
      <Container>
        <FadeIn>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <p className="technical-label text-[10px] text-[#e85d5d]">
                Case real · aplicativo
              </p>
              <h2
                className="mt-3 font-[family-name:'Space_Grotesk_Variable'] font-semibold tracking-[-0.035em]"
                style={{
                  fontSize: "clamp(1.65rem, 2vw + 1rem, 2.5rem)",
                  lineHeight: 1.15,
                }}
              >
                TrampoFeito
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-7 text-slate-600">
                App publicado nas lojas — busca por proximidade, avaliações e
                contato entre clientes e profissionais.
              </p>
            </div>
            <Button
              href={TRAMPOFEITO_APP_STORE}
              external
              size="md"
              className="w-full sm:w-auto"
            >
              Conhecer o aplicativo
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.06}>
          <TrampoFeitoShowcase className="mt-10 lg:mt-12" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10 grid gap-6 border-t border-slate-200 pt-8 sm:mt-12 sm:gap-8 sm:pt-10 lg:grid-cols-3 lg:gap-10">
            {editorialBlocks.map((block) => (
              <div key={block.title}>
                <h3 className="text-sm font-semibold text-[#071426]">
                  {block.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {block.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-5 border-t border-slate-200 pt-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
            <div className="min-w-0 space-y-3 sm:space-y-4">
              <p className="text-xs tracking-wide text-slate-500">
                {technologies.join(" · ")}
              </p>
              <StoreBadges />
            </div>
            <Button
              href={WHATSAPP_APP_PROJECT_URL}
              external
              variant="outline"
              size="sm"
              className="w-full border-[#e85d5d]/40 text-[#071426] hover:border-[#e85d5d]/60 hover:bg-[#e85d5d]/5 hover:text-[#c24141] sm:w-auto"
            >
              Quero desenvolver um aplicativo
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
