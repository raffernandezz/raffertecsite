"use client";

import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { WHATSAPP_URL } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(37,99,235,0.08),transparent_65%)]"
      />

      <Container className="relative">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-[0_20px_50px_rgba(15,40,90,0.06)] sm:p-12 lg:p-16">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl"
            />
            <div
              className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl"
            />

            <p className="technical-label text-[10px] text-blue-600">
              Próximo passo
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-[family-name:'Space_Grotesk_Variable'] text-3xl font-semibold tracking-[-0.04em] text-[#071426] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Tem uma ideia ou precisa elevar a presença digital do seu negócio?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-7 text-slate-600">
              Conte o que você precisa. Respondemos com os próximos passos — sem
              compromisso e sem burocracia.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={WHATSAPP_URL}
                size="lg"
                external
                className="button-sheen min-w-[220px]"
              >
                Falar com a RafferTec
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button
                href="#oferta"
                variant="outline"
                size="lg"
                className="min-w-[220px]"
              >
                Enviar detalhes do projeto
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
