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
  restaurantThumbScreens,
  BarberCardMockup,
  BarberModalGallery,
  barberPreviewSurface,
  barberThumbScreens,
  AnsCardMockup,
  AnsModalGallery,
  ansPreviewSurface,
  ansThumbScreens,
  ProjectThumbStrip,
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

function AnsDemoModal({ onClose }: { onClose: () => void }) {
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
        aria-labelledby="ans-demo-title"
      >
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-slate-100 px-4 py-3 sm:gap-4 sm:px-6 sm:py-5 md:px-8">
          <div className="min-w-0 pr-2">
            <span
              className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
            >
              Projeto real
            </span>
            <h3
              id="ans-demo-title"
              className="mt-2 text-base font-semibold leading-snug text-[#071426] sm:mt-3 sm:text-xl"
            >
              ANS Partner
            </h3>
            <p className="mt-1 hidden text-sm text-slate-600 sm:block">
              Site imobiliário premium com catálogo e painel administrativo.
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
            ansPreviewSurface
          )}
          data-lenis-prevent
        >
          <AnsModalGallery />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function LandingPossibilities() {
  const [activeDemo, setActiveDemo] = useState<
    "restaurant" | "barber" | "ans" | null
  >(null);

  return (
    <section
      id="possibilidades"
      className="relative overflow-hidden border-y border-blue-100/80 bg-[#eef4fb] py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
      />
      <Container>
        <FadeIn>
          <div className="max-w-2xl">
            <p className="technical-label text-[10px] text-blue-600">
              Portfólio
            </p>
            <h2
              className="mt-4 font-[family-name:'Space_Grotesk_Variable'] text-3xl font-semibold tracking-[-0.045em] text-[#071426] sm:text-4xl lg:text-5xl"
            >
              Trabalhos reais, não demonstrações.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">
              Sites e sistemas entregues para negócios reais — cada um com
              identidade própria, telas completas e foco em conversão.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.06}>
          <article
            className="group relative mt-12 overflow-hidden rounded-[1.75rem] border border-blue-200/90 bg-white shadow-[0_22px_60px_rgba(15,40,90,0.1)] ring-1 ring-blue-500/10 transition-all duration-500 hover:border-blue-300 hover:shadow-[0_32px_80px_rgba(15,40,90,0.14)] lg:grid lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div
              className={cn(
                "flex min-h-[260px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_40%_30%,rgba(180,140,70,0.1),transparent_55%)] px-3 py-8 sm:min-h-[320px] sm:px-8 sm:py-12 lg:min-h-[480px] lg:border-r lg:border-slate-100",
                ansPreviewSurface
              )}
            >
              <AnsCardMockup />
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex w-fit rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[10px] font-semibold tracking-wide text-blue-700">
                  Destaque
                </span>
                <span className="inline-flex w-fit rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold tracking-wide text-emerald-700">
                  Projeto real
                </span>
                <span className="inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-semibold tracking-wide text-slate-600">
                  Imobiliário · sistema
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-[#071426] sm:text-[1.85rem]">
                ANS Partner
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Plataforma imobiliária premium — site público com catálogo de
                imóveis e painel administrativo completo para gestão do conteúdo.
              </p>
              <ul className="mt-5 flex flex-col gap-2 border-t border-slate-100 pt-4">
                {[
                  "Hero e identidade institucional",
                  "Catálogo com busca e filtros",
                  "Painel administrativo",
                  "Gestão de banners e conteúdo",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                    {feature}
                  </li>
                ))}
              </ul>
              <ProjectThumbStrip screens={ansThumbScreens} totalCount={9} />
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setActiveDemo("ans")}
                  className="inline-flex min-h-[46px] items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  Ver telas do projeto
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </button>
                <Button
                  href={WHATSAPP_DESCRIBE_PROJECT_URL}
                  external
                  variant="outline"
                  size="md"
                  className="min-h-[46px]"
                >
                  Quero um site assim
                </Button>
              </div>
            </div>
          </article>
        </FadeIn>

        <FadeIn delay={0.08}>
          <article
            className="group mt-7 overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white shadow-[0_18px_50px_rgba(15,40,90,0.06)] transition-all duration-500 hover:border-blue-300 hover:shadow-[0_28px_70px_rgba(15,40,90,0.1)] lg:grid lg:grid-cols-[1.15fr_0.85fr]"
          >
            <div
              className={cn(
                "flex min-h-[240px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_40%_30%,rgba(37,99,235,0.06),transparent_55%)] px-3 py-7 sm:min-h-[300px] sm:px-8 sm:py-10 lg:min-h-[440px] lg:border-r lg:border-slate-100",
                restaurantPreviewSurface
              )}
            >
              <RestaurantCardMockup />
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex w-fit rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold tracking-wide text-emerald-700">
                  Projeto real
                </span>
                <span className="inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-semibold tracking-wide text-slate-600">
                  Restaurante
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-[#071426] sm:text-[1.7rem]">
                Cantinho Nordestino
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Landing page para restaurante de comida nordestina — com
                cardápio, avaliações, localização e pedidos via iFood e
                WhatsApp.
              </p>
              <ul className="mt-5 flex flex-col gap-2 border-t border-slate-100 pt-4">
                {[
                  "Apresentação do negócio",
                  "Cardápio completo",
                  "Localização e horários",
                  "WhatsApp e iFood",
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
              <ProjectThumbStrip
                screens={restaurantThumbScreens}
                totalCount={5}
              />
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setActiveDemo("restaurant")}
                  className="inline-flex min-h-[46px] items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  Ver telas do projeto
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </button>
                <Button
                  href={WHATSAPP_DESCRIBE_PROJECT_URL}
                  external
                  variant="outline"
                  size="md"
                  className="min-h-[46px]"
                >
                  Quero um site assim
                </Button>
              </div>
            </div>
          </article>
        </FadeIn>

        <FadeIn delay={0.1}>
          <article
            className="group mt-7 overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white shadow-[0_18px_50px_rgba(15,40,90,0.06)] transition-all duration-500 hover:border-blue-300 hover:shadow-[0_28px_70px_rgba(15,40,90,0.1)] lg:grid lg:grid-cols-[0.85fr_1.15fr]"
          >
            <div className="flex flex-col justify-center p-7 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex w-fit rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold tracking-wide text-emerald-700">
                  Projeto real
                </span>
                <span className="inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-semibold tracking-wide text-slate-600">
                  Barbearia
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-[#071426] sm:text-[1.7rem]">
                Conexão 12 Barber Shop
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Landing page para barbearia em Diadema — visual premium,
                agendamento, serviços, galeria e localização.
              </p>
              <ul className="mt-5 flex flex-col gap-2 border-t border-slate-100 pt-4">
                {[
                  "Hero com identidade marcante",
                  "Agendamento e WhatsApp",
                  "Serviços e experiência",
                  "Galeria de trabalhos",
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
              <ProjectThumbStrip
                screens={barberThumbScreens}
                totalCount={3}
              />
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setActiveDemo("barber")}
                  className="inline-flex min-h-[46px] items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  Ver telas do projeto
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </button>
                <Button
                  href={WHATSAPP_DESCRIBE_PROJECT_URL}
                  external
                  variant="outline"
                  size="md"
                  className="min-h-[46px]"
                >
                  Quero um site assim
                </Button>
              </div>
            </div>

            <div
              className={cn(
                "flex min-h-[240px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_60%_30%,rgba(37,99,235,0.06),transparent_55%)] px-3 py-7 sm:min-h-[300px] sm:px-8 sm:py-10 lg:min-h-[440px] lg:border-l lg:border-slate-100",
                barberPreviewSurface
              )}
            >
              <BarberCardMockup />
            </div>
          </article>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="mt-16 text-center text-xs font-medium tracking-wide text-slate-500">
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
                className="group h-full rounded-2xl border border-slate-200/90 bg-white p-5 transition-all duration-300 hover:border-blue-200 hover:shadow-[0_16px_40px_rgba(15,40,90,0.06)]"
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
          {activeDemo === "ans" && (
            <AnsDemoModal onClose={() => setActiveDemo(null)} />
          )}
        </AnimatePresence>
      </ModalPortal>
    </section>
  );
}
