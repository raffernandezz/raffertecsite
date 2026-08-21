"use client";

import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { WHATSAPP_URL } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-20 lg:py-28">
      <Container className="relative">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white px-6 py-10 text-center shadow-[0_16px_44px_rgba(15,40,90,0.05)] sm:px-10 sm:py-12 lg:px-16 lg:py-14">
            <p className="technical-label text-[10px] text-blue-600">
              Próximo passo
            </p>
            <h2
              className="mx-auto mt-4 max-w-2xl font-[family-name:'Space_Grotesk_Variable'] font-semibold tracking-[-0.04em] text-[#071426]"
              style={{
                fontSize: "clamp(1.65rem, 2vw + 1rem, 2.5rem)",
                lineHeight: 1.15,
              }}
            >
              Tem uma ideia ou precisa elevar a presença digital do seu negócio?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-7 text-slate-600">
              Conte o que você precisa. Respondemos com os próximos passos — sem
              compromisso e sem burocracia.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={WHATSAPP_URL}
                size="lg"
                external
                className="w-full min-w-0 sm:w-auto sm:min-w-[220px]"
              >
                Falar com a RafferTec
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button
                href="#oferta"
                variant="outline"
                size="lg"
                className="w-full min-w-0 sm:w-auto sm:min-w-[220px]"
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
