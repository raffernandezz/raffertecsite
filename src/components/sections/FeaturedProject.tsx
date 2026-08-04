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
      className="border-t border-slate-200/80 bg-white pb-10 text-[#071426] lg:pb-14 pt-16 lg:pt-24"
    >
      <Container>
        <FadeIn>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] text-[#e85d5d]">
                CASE REAL
              </p>
              <h2 className="mt-2 font-[family-name:'Space_Grotesk_Variable'] text-3xl font-semibold tracking-[-0.035em] sm:text-[2.75rem]">
                TrampoFeito
              </h2>
            </div>
            <Button href={TRAMPOFEITO_APP_STORE} external size="md">
              Conhecer o aplicativo
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.06}>
          <TrampoFeitoShowcase className="mt-10 lg:mt-12" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 grid gap-8 border-t border-slate-200 pt-10 lg:grid-cols-3 lg:gap-10 lg:pt-12">
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

          <div className="mt-10 flex flex-col gap-6 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-4">
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
              className="border-[#e85d5d]/40 text-[#071426] hover:border-[#e85d5d]/60 hover:bg-[#e85d5d]/5 hover:text-[#c24141]"
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
