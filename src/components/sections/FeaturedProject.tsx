"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { FadeIn } from "@/components/ui/FadeIn";
import { TRAMPOFEITO_URL } from "@/lib/utils";

const features = [
  "Cadastro de clientes e profissionais",
  "Busca de profissionais por localização",
  "Perfis com avaliações",
  "Sistema de favoritos",
  "Login com Apple e Google",
  "Disponível para Android e iOS",
];

const technologies = [
  "React Native",
  "TypeScript",
  "Supabase",
  "Firebase",
  "Stripe",
];

export function FeaturedProject() {
  return (
    <section id="trampofeito" data-dark-section className="bg-[#0f0f0f] py-28 lg:py-36">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[45%_55%] lg:gap-16">
          <FadeIn>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 text-xs font-medium text-red-400">
                Projeto real desenvolvido e publicado
              </span>

              <p className="mt-6 text-sm font-medium tracking-wide text-red-400 uppercase">
                Projeto em destaque
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                De uma ideia a um aplicativo publicado
              </h2>

              <p className="mt-2 text-xl font-medium text-white/90">TrampoFeito</p>

              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-gray-400">
                O TrampoFeito foi desenvolvido para conectar clientes a
                profissionais de diferentes segmentos, com cadastro, busca,
                perfis, avaliações, favoritos e disponibilidade para Android e
                iOS.
              </p>

              <ul className="mt-8 space-y-2.5">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-gray-300"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <StoreBadges className="mt-10" />

              <div className="mt-5">
                <Button
                  href={TRAMPOFEITO_URL || "#trampofeito"}
                  size="md"
                  external={!!TRAMPOFEITO_URL}
                  variant="secondary"
                  className="border-white/20 bg-white/10 text-white hover:border-white/30 hover:bg-white/15"
                >
                  Conhecer o TrampoFeito
                </Button>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs font-medium tracking-wide text-gray-500 uppercase">
                  Tecnologias utilizadas
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-xs text-gray-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 lg:p-4">
              <Image
                src="/assets/trampofeito.png"
                alt="Apresentação do aplicativo TrampoFeito desenvolvido pela RafferTec"
                width={1024}
                height={1536}
                className="h-auto w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
