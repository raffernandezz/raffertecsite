"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  Building2,
  Scissors,
  Stethoscope,
  UtensilsCrossed,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  RestaurantCardMockup,
  RestaurantModalGallery,
  restaurantPreviewSurface,
  BarberCardMockup,
  BarberModalGallery,
  barberPreviewSurface,
} from "@/components/ui/PortfolioMockups";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_DESCRIBE_PROJECT_URL } from "@/lib/utils";
import { ModalPortal } from "@/components/ui/ModalPortal";

const segments = [
  {
    icon: UtensilsCrossed,
    title: "Restaurantes & food",
    features: ["Cardápio digital", "iFood / WhatsApp", "Localização e reservas"],
    accent: "from-amber-500/20 to-orange-600/10",
  },
  {
    icon: Stethoscope,
    title: "Clínicas & saúde",
    features: ["Especialidades", "Equipe médica", "Agendamento por contato"],
    accent: "from-sky-500/20 to-blue-600/10",
  },
  {
    icon: Scissors,
    title: "Barbearias & estética",
    features: ["Serviços e preços", "Galeria de trabalhos", "WhatsApp direto"],
    accent: "from-violet-500/20 to-purple-600/10",
  },
  {
    icon: Building2,
    title: "Outros segmentos",
    features: ["Sites institucionais", "Landing pages", "Sistemas sob medida"],
    accent: "from-blue-500/20 to-indigo-600/10",
  },
];

function RestaurantDemoModal({ onClose }: { onClose: () => void }) {
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
      className="fixed inset-0 z-[200] flex items-end justify-center bg-slate-900/50 sm:items-center sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <motion.div
        ref={dialogRef}
        initial={{ scale: 0.97, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.97, opacity: 0, y: 16 }}
        transition={{ duration: 0.25 }}
        className="flex h-[min(100dvh,100%)] max-h-[100dvh] w-full max-w-4xl flex-col overflow-hidden rounded-t-2xl border border-slate-200 bg-white shadow-2xl sm:h-auto sm:max-h-[min(92dvh,900px)] sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="restaurant-demo-title"
      >
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-slate-100 px-4 py-3 sm:gap-4 sm:px-6 sm:py-5 md:px-8">
          <div className="min-w-0 pr-2">
            <span
              className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
            >
              Projeto real
            </span>
            <h3
              id="restaurant-demo-title"
              className="mt-2 text-base font-semibold leading-snug text-[#071426] sm:mt-3 sm:text-xl"
            >
              Cantinho Nordestino
            </h3>
            <p className="mt-1 hidden text-sm text-slate-600 sm:block">
              Landing page para restaurante — cardápio, avaliações e pedidos.
            </p>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50 hover:text-[#071426] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
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

        <div
          className={cn(
            "min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6 sm:py-6 md:px-8",
            restaurantPreviewSurface
          )}
          data-lenis-prevent
        >
          <RestaurantModalGallery />
        </div>
      </motion.div>
    </motion.div>
  );
}

function BarberDemoModal({ onClose }: { onClose: () => void }) {
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
      className="fixed inset-0 z-[200] flex items-end justify-center bg-slate-900/50 sm:items-center sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <motion.div
        ref={dialogRef}
        initial={{ scale: 0.97, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.97, opacity: 0, y: 16 }}
        transition={{ duration: 0.25 }}
        className="flex h-[min(100dvh,100%)] max-h-[100dvh] w-full max-w-4xl flex-col overflow-hidden rounded-t-2xl border border-slate-200 bg-white shadow-2xl sm:h-auto sm:max-h-[min(92dvh,900px)] sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="barber-demo-title"
      >
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-slate-100 px-4 py-3 sm:gap-4 sm:px-6 sm:py-5 md:px-8">
          <div className="min-w-0 pr-2">
            <span
              className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
            >
              Projeto real
            </span>
            <h3
              id="barber-demo-title"
              className="mt-2 text-base font-semibold leading-snug text-[#071426] sm:mt-3 sm:text-xl"
            >
              Conexão 12 Barber Shop
            </h3>
            <p className="mt-1 hidden text-sm text-slate-600 sm:block">
              Landing page para barbearia — serviços, galeria e agendamento.
            </p>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50 hover:text-[#071426] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
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

        <div
          className={cn(
            "min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6 sm:py-6 md:px-8",
            barberPreviewSurface
          )}
          data-lenis-prevent
        >
          <BarberModalGallery />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function LandingPossibilities() {
  const [activeDemo, setActiveDemo] = useState<"restaurant" | "barber" | null>(
    null
  );

  return (
    <section
      id="possibilidades"
      className="section-shell relative overflow-hidden bg-white pb-24 pt-10 lg:pb-32 lg:pt-14"
    >
      <Container>
        <FadeIn>
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <p className="technical-label text-[10px] text-blue-600">
                Trabalhos · sites por segmento
              </p>
              <h2
                className="mt-4 max-w-2xl font-[family-name:'Space_Grotesk_Variable'] text-3xl font-semibold tracking-[-0.045em] text-[#071426] sm:text-4xl lg:text-5xl"
              >
                Cada negócio tem uma linguagem visual própria.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600">
              Mostramos trabalho real quando existe — e adaptamos a estratégia,
              conteúdo e interface para o seu segmento, sem copiar template
              genérico.
            </p>
          </div>
        </FadeIn>

        {/* Projeto real — restaurante */}
        <FadeIn delay={0.06}>
          <article
            className="group mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-[#f8fafc] transition-all duration-500 hover:border-blue-300 hover:shadow-[0_24px_60px_rgba(15,40,90,0.08)] lg:grid lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div
              className={cn(
                "flex min-h-[220px] items-center justify-center overflow-hidden px-3 py-6 sm:min-h-[280px] sm:px-8 sm:py-10 lg:min-h-[420px] lg:border-r lg:border-slate-200",
                restaurantPreviewSurface
              )}
            >
              <RestaurantCardMockup />
            </div>

            <div className="flex flex-col p-7 sm:p-8 lg:p-10">
              <span
                className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold tracking-wide text-emerald-700"
              >
                Projeto real
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-[#071426] sm:text-[1.65rem]">
                Cantinho Nordestino
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Landing page para restaurante de comida nordestina — com
                cardápio, avaliações, localização e pedidos via iFood e
                WhatsApp.
              </p>
              <ul className="mt-6 flex flex-col gap-2.5 border-t border-slate-200 pt-5">
                {[
                  "Apresentação do negócio",
                  "Cardápio completo",
                  "Localização e horários",
                  "WhatsApp e iFood",
                  "Reservas por contato",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setActiveDemo("restaurant")}
                  className="inline-flex min-h-[46px] items-center justify-center rounded-xl border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  Ver telas do projeto
                </button>
                <Button
                  href={WHATSAPP_DESCRIBE_PROJECT_URL}
                  external
                  variant="outline"
                  size="md"
                  className="min-h-[46px]"
                >
                  Quero um site assim
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </article>
        </FadeIn>

        {/* Projeto real — barbearia */}
        <FadeIn delay={0.08}>
          <article
            className="group mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-[#f8fafc] transition-all duration-500 hover:border-blue-300 hover:shadow-[0_24px_60px_rgba(15,40,90,0.08)] lg:grid lg:grid-cols-[0.8fr_1.2fr]"
          >
            <div className="flex flex-col p-7 sm:p-8 lg:p-10">
              <span
                className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold tracking-wide text-emerald-700"
              >
                Projeto real
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-[#071426] sm:text-[1.65rem]">
                Conexão 12 Barber Shop
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Landing page para barbearia em Diadema — visual premium,
                agendamento, serviços, galeria e localização.
              </p>
              <ul className="mt-6 flex flex-col gap-2.5 border-t border-slate-200 pt-5">
                {[
                  "Hero com identidade marcante",
                  "Agendamento e WhatsApp",
                  "Serviços e experiência",
                  "Galeria de trabalhos",
                  "Localização e horários",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setActiveDemo("barber")}
                  className="inline-flex min-h-[46px] items-center justify-center rounded-xl border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  Ver telas do projeto
                </button>
                <Button
                  href={WHATSAPP_DESCRIBE_PROJECT_URL}
                  external
                  variant="outline"
                  size="md"
                  className="min-h-[46px]"
                >
                  Quero um site assim
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div
              className={cn(
                "flex min-h-[220px] items-center justify-center overflow-hidden px-3 py-6 sm:min-h-[280px] sm:px-8 sm:py-10 lg:min-h-[420px] lg:border-l lg:border-slate-200",
                barberPreviewSurface
              )}
            >
              <BarberCardMockup />
            </div>
          </article>
        </FadeIn>

        {/* Segmentos — sem mockups falsos */}
        <FadeIn delay={0.1}>
          <p className="mt-14 text-center text-xs font-medium tracking-wide text-slate-500">
            Também desenvolvemos para
          </p>
        </FadeIn>

        <StaggerContainer
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.07}
        >
          {segments.map((segment) => (
            <StaggerItem key={segment.title}>
              <article
                className="group h-full rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-blue-200 hover:shadow-[0_16px_40px_rgba(15,40,90,0.06)]"
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-gradient-to-br ${segment.accent} text-blue-700 transition-transform duration-300 group-hover:scale-105`}
                >
                  <segment.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-[#071426]">
                  {segment.title}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {segment.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-xs leading-5 text-slate-500"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>

      <ModalPortal>
        <AnimatePresence>
          {activeDemo === "restaurant" && (
            <RestaurantDemoModal onClose={() => setActiveDemo(null)} />
          )}
          {activeDemo === "barber" && (
            <BarberDemoModal onClose={() => setActiveDemo(null)} />
          )}
        </AnimatePresence>
      </ModalPortal>
    </section>
  );
}
