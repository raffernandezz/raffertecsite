"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  LandingMockup,
  LandingScreen,
  DeviceFrame,
  type LandingVariant,
} from "@/components/ui/LandingMockup";
import {
  RestaurantConceptCardPreview,
  RestaurantConceptModalGallery,
} from "@/components/ui/RestaurantConceptShowcase";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const possibilities: {
  title: string;
  variant: LandingVariant;
  features: string[];
  portfolio?: boolean;
}[] = [
  {
    title: "Landing page para restaurante",
    variant: "restaurant",
    portfolio: true,
    features: [
      "Apresentação do negócio",
      "Cardápio",
      "Localização",
      "WhatsApp",
      "Reservas por contato",
    ],
  },
  {
    title: "Landing page para clínica",
    variant: "clinic",
    features: [
      "Apresentação da clínica",
      "Especialidades",
      "Profissionais",
      "Localização",
      "Contato para agendamento",
    ],
  },
  {
    title: "Landing page para barbearia",
    variant: "barber",
    features: [
      "Apresentação da barbearia",
      "Serviços",
      "Preços",
      "Galeria",
      "WhatsApp",
    ],
  },
];

function DemoModal({
  variant,
  title,
  portfolio,
  onClose,
}: {
  variant: LandingVariant;
  title: string;
  portfolio?: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 sm:items-center sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <motion.div
        ref={dialogRef}
        initial={{ scale: 0.97, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.97, opacity: 0, y: 16 }}
        transition={{ duration: 0.25 }}
        className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <span className="inline-block rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
              Projeto conceitual
            </span>
            <h3
              id="demo-modal-title"
              className="mt-3 text-xl font-semibold text-foreground"
            >
              {title}
            </h3>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:bg-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            aria-label="Fechar demonstração"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {portfolio && variant === "restaurant" ? (
          <div className="rounded-xl bg-[#faf5ef] px-4 py-6 sm:px-6 sm:py-8">
            <RestaurantConceptModalGallery />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-8 rounded-xl bg-surface px-4 py-8 sm:flex-row sm:px-10 sm:py-10">
            <DeviceFrame type="laptop" className="w-full max-w-md">
              <LandingScreen variant={variant} density="modal" />
            </DeviceFrame>
            <DeviceFrame type="phone" className="w-[100px] shrink-0 sm:w-[110px]">
              <LandingScreen variant={variant} compact density="modal" />
            </DeviceFrame>
          </div>
        )}

        <p className="mt-6 text-center text-sm leading-relaxed text-muted">
          Demonstração visual de possibilidade de projeto. Não representa um
          cliente real.
        </p>
      </motion.div>
    </motion.div>
  );
}

export function LandingPossibilities() {
  const [demo, setDemo] = useState<(typeof possibilities)[0] | null>(null);

  return (
    <section id="possibilidades" className="bg-white py-28 lg:py-36">
      <Container>
        <FadeIn>
          <SectionHeader
            label="Exemplos de landing pages"
            title="Possibilidades para o seu negócio"
            description="Cada landing page é criada de forma personalizada, respeitando a identidade, o público e os objetivos de cada empresa."
          />
        </FadeIn>

        <StaggerContainer className="mt-16 grid items-stretch gap-8 lg:grid-cols-3">
          {possibilities.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:border-gray-200 hover:shadow-md">
                <div className="flex shrink-0 items-center justify-center bg-[#faf5ef] px-4 py-8 sm:px-5">
                  {item.portfolio && item.variant === "restaurant" ? (
                    <RestaurantConceptCardPreview />
                  ) : (
                    <LandingMockup variant={item.variant} size="md" />
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-block w-fit rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
                    Projeto conceitual
                  </span>
                  <h3 className="mt-4 min-h-[3.5rem] text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <ul className="mt-4 flex flex-1 flex-col gap-2">
                    {item.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-brand" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pb-8">
                    <button
                      type="button"
                      onClick={() => setDemo(item)}
                      className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all duration-200 hover:border-brand hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:w-auto"
                    >
                      Ver demonstração
                    </button>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>

      <AnimatePresence>
        {demo && (
          <DemoModal
            variant={demo.variant}
            title={demo.title}
            portfolio={demo.portfolio}
            onClose={() => setDemo(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
