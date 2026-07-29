"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { WHATSAPP_RAFAEL_URL } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section
      data-dark-section
      className="bg-[#0a1628] py-28 lg:py-36"
    >
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Tem uma ideia ou precisa melhorar a presença digital do seu
              negócio?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-400">
              Conte o que você precisa e receba uma avaliação inicial sem
              compromisso.
            </p>
            <div className="mt-10">
              <Button
                href={WHATSAPP_RAFAEL_URL}
                size="lg"
                external
                className="bg-brand hover:bg-brand-dark"
              >
                Falar com Rafael pelo WhatsApp
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
