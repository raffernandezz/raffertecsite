"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const pillars = [
  { label: "Direto", detail: "sem intermediários" },
  { label: "Próximo", detail: "com acompanhamento" },
  { label: "Completo", detail: "da ideia à entrega" },
];

export function About() {
  return (
    <section
      id="sobre"
      className="overflow-hidden bg-[#eef4fb] py-20 text-[#071426] lg:py-28"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <FadeIn>
            <div className="relative mx-auto max-w-[440px] lg:mx-0">
              <div className="absolute -top-3 -left-3 h-full w-full rounded-[1.75rem] border border-blue-300/60" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-2 shadow-[0_24px_55px_rgba(30,64,175,0.1)]">
                <div className="relative aspect-[4/4.5] w-full overflow-hidden rounded-[1.35rem] bg-[#f8fafc]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
                    <Image
                      src="/assets/logo.png"
                      alt="RafferTec"
                      width={632}
                      height={591}
                      className="h-20 w-auto sm:h-24"
                    />
                    <span className="mt-5 font-[family-name:'Space_Grotesk_Variable'] text-2xl font-semibold tracking-tight text-[#071426]">
                      RafferTec
                    </span>
                    <span className="mt-2 text-center text-xs tracking-[0.16em] text-slate-500 uppercase">
                      Tecnologia sob medida
                    </span>
                  </div>
                </div>
                <div className="absolute inset-x-5 bottom-5 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-sm">
                  <p className="technical-label text-[9px] text-blue-600">
                    Empresa 100% remota
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#071426]">
                    Atendimento em todo o Brasil
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <div>
              <p className="technical-label text-[10px] text-blue-600">
                Sobre a RafferTec
              </p>
              <h2 className="mt-5 font-[family-name:'Space_Grotesk_Variable'] text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl">
                Um parceiro técnico,
                <br />
                não uma caixa-preta.
              </h2>
              <div className="mt-6 space-y-4 text-[15px] leading-7 text-slate-600">
                <p>
                  A RafferTec desenvolve sites, aplicativos, sistemas e
                  automações com foco em estratégia, identidade e entrega real.
                </p>
                <p>
                  Menos ruído, decisões mais rápidas e responsabilidade clara:
                  você acompanha o projeto de perto, do briefing à publicação.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-2 border-y border-slate-300 py-5">
                {pillars.map((pillar) => (
                  <div key={pillar.label}>
                    <strong className="text-base text-blue-700 sm:text-xl">
                      {pillar.label}
                    </strong>
                    <span className="mt-1 block text-[10px] text-slate-500 sm:text-[11px]">
                      {pillar.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
