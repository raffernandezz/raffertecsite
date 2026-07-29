"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { WHATSAPP_PROPOSAL_URL } from "@/lib/utils";

const included = [
  "Design responsivo",
  "Apresentação da empresa",
  "Serviços",
  "Botão para WhatsApp",
  "Localização",
  "Publicação",
  "Até 2 rodadas de ajustes iniciais",
];

export function LandingOffer() {
  return (
    <section id="oferta" className="bg-white py-28 lg:py-36">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-white p-8 text-center sm:p-12">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Sua empresa ainda não possui uma página profissional?
            </h2>

            <div className="mt-8">
              <p className="text-lg font-semibold text-foreground">
                Landing page essencial a partir de R$ 297
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Para negócios que precisam apresentar serviços, localização e
                contato em uma página profissional.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Plano básico com até 5 seções, botão para WhatsApp e publicação.
                Projetos com recursos adicionais recebem orçamento personalizado.
              </p>
            </div>

            <ul className="mt-8 grid gap-2 text-left sm:grid-cols-2">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-muted"
                >
                  <svg
                    className="h-4 w-4 shrink-0 text-brand"
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
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs leading-relaxed text-muted">
              Domínio, serviços externos e funcionalidades adicionais podem ser
              cobrados separadamente.
            </p>

            <div className="mt-10">
              <Button href={WHATSAPP_PROPOSAL_URL} size="lg" external>
                Quero solicitar uma proposta
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
