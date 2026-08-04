"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { StoreBadges } from "@/components/ui/StoreBadges";

const BASE = "/assets/trampofeito";

const deviceScreens = {
  splash: {
    src: `${BASE}/device-splash.png`,
    alt: "Splash screen do TrampoFeito com identidade visual do app",
  },
  home: {
    src: `${BASE}/device-home.png`,
    alt: "Tela inicial do TrampoFeito com profissionais em destaque",
  },
  search: {
    src: `${BASE}/device-search.png`,
    alt: "Busca de profissionais no TrampoFeito",
  },
  login: {
    src: `${BASE}/device-login.png`,
    alt: "Login com Apple no TrampoFeito",
  },
  register: {
    src: `${BASE}/device-register.png`,
    alt: "Cadastro de trabalhador no TrampoFeito",
  },
};

type DeviceSize = "sm" | "md" | "lg" | "xl";

const deviceWidths: Record<DeviceSize, string> = {
  sm: "w-[156px] sm:w-[180px]",
  md: "w-[180px] sm:w-[204px]",
  lg: "w-[204px] sm:w-[240px]",
  xl: "w-[220px] sm:w-[260px]",
};

/** Mockup de dispositivo com fundo transparente */
export function DeviceMockup({
  src,
  alt,
  size = "md",
  className,
  style,
}: {
  src: string;
  alt: string;
  size?: DeviceSize;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <figure
      className={cn("shrink-0", deviceWidths[size], className)}
      style={style}
    >
      <Image
        src={src}
        alt={alt}
        width={500}
        height={1000}
        className="h-auto w-full object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.5)]"
        sizes="(max-width: 640px) 180px, 240px"
      />
    </figure>
  );
}

/** Hero — 3 telas em leque com animação flutuante */
export function HeroPhoneCluster({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex items-end justify-center gap-2 sm:gap-4 lg:justify-end lg:gap-5",
        className
      )}
    >
      <DeviceMockup
        src={deviceScreens.login.src}
        alt={deviceScreens.login.alt}
        size="md"
        className="-rotate-3 translate-y-5 opacity-95 animate-float-slower [--rotate:-3deg]"
        style={{ animationDelay: "0.4s" }}
      />
      <DeviceMockup
        src={deviceScreens.splash.src}
        alt={deviceScreens.splash.alt}
        size="xl"
        className="z-10 animate-float-slow"
      />
      <DeviceMockup
        src={deviceScreens.register.src}
        alt={deviceScreens.register.alt}
        size="lg"
        className="rotate-4 translate-y-4 animate-float-slower [--rotate:4deg]"
        style={{ animationDelay: "0.8s" }}
      />
    </div>
  );
}

const showcaseSlides = [
  {
    ...deviceScreens.splash,
    step: "01",
    label: "Identidade",
    hint: "Primeira impressão e marca do app",
    glow: "12%",
  },
  {
    ...deviceScreens.register,
    step: "02",
    label: "Cadastro",
    hint: "Fluxo completo para trabalhadores",
    glow: "30%",
  },
  {
    ...deviceScreens.login,
    step: "03",
    label: "Acesso",
    hint: "Login com Apple e Google",
    glow: "50%",
  },
  {
    ...deviceScreens.home,
    step: "04",
    label: "Descoberta",
    hint: "Profissionais em destaque na região",
    glow: "70%",
  },
  {
    ...deviceScreens.search,
    step: "05",
    label: "Busca",
    hint: "Encontre quem resolve perto de você",
    glow: "88%",
  },
];

const spring = { type: "spring" as const, stiffness: 260, damping: 28 };

/** Case — showcase interativo com glow que segue a tela em foco */
export function TrampoFeitoShowcase({ className }: { className?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScroll, setCanScroll] = useState(false);

  const activeSlide = showcaseSlides[activeIndex];

  const scrollToIndex = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(showcaseSlides.length - 1, index));
    setActiveIndex(clamped);

    const el = scrollRef.current;
    if (!el) return;

    const slide = el.querySelectorAll<HTMLElement>("[data-slide]")[clamped];
    if (!slide) return;

    const target =
      slide.offsetLeft - (el.clientWidth - slide.offsetWidth) / 2;
    el.scrollTo({ left: target, behavior: reduceMotion ? "auto" : "smooth" });
  }, [reduceMotion]);

  const syncActiveFromScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const slides = el.querySelectorAll<HTMLElement>("[data-slide]");
    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;

    slides.forEach((slide, i) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const dist = Math.abs(center - slideCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });

    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const checkLayout = () => {
      setCanScroll(el.scrollWidth > el.clientWidth + 8);
    };

    checkLayout();
    window.addEventListener("resize", checkLayout);
    return () => window.removeEventListener("resize", checkLayout);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !canScroll) return;

    el.addEventListener("scroll", syncActiveFromScroll, { passive: true });
    return () => el.removeEventListener("scroll", syncActiveFromScroll);
  }, [canScroll, syncActiveFromScroll]);

  function stepBy(direction: number) {
    scrollToIndex(activeIndex + direction);
  }

  return (
    <div
      className={cn(
        "relative rounded-3xl border border-slate-200 bg-white",
        className
      )}
    >
      {/* Fundo isolado — não corta os mockups nas bordas */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(232,93,93,0.06),transparent_65%)]"
        />
        <motion.div
          className="absolute top-[30%] h-[min(320px,55vw)] w-[min(320px,55vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e85d5d]/12 blur-[90px]"
          animate={{ left: activeSlide.glow }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 55, damping: 22 }
          }
        />
        <motion.div
          className="absolute top-[58%] h-[min(200px,40vw)] w-[min(240px,45vw)] -translate-x-1/2 rounded-full bg-[#f97316]/8 blur-[70px]"
          animate={{
            left: activeSlide.glow,
            opacity: activeIndex === 0 ? 0.75 : 0.35,
          }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 48, damping: 24 }
          }
        />
      </div>

      <div className="relative px-5 py-8 sm:px-10 sm:py-10 lg:px-6 lg:py-10">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-3 pb-1 [-ms-overflow-style:none] scrollbar-none sm:gap-5 sm:px-4 lg:gap-5 lg:justify-center lg:overflow-visible lg:px-2 [&::-webkit-scrollbar]:hidden"
        >
          {showcaseSlides.map((screen, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={screen.alt}
                data-slide
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="snap-center shrink-0"
              >
                <motion.button
                  type="button"
                  onClick={() => scrollToIndex(index)}
                  aria-label={`Ver tela: ${screen.label}`}
                  aria-pressed={isActive}
                  animate={{
                    scale: isActive ? 1 : 0.9,
                    y: isActive ? 0 : 10,
                    opacity: isActive ? 1 : 0.48,
                  }}
                  whileHover={
                    reduceMotion || isActive
                      ? undefined
                      : { scale: 0.94, opacity: 0.72 }
                  }
                  transition={spring}
                  className="cursor-pointer border-0 bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-[#e85d5d]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <DeviceMockup
                    src={screen.src}
                    alt={screen.alt}
                    size="lg"
                    className={cn(
                      "mx-auto w-[168px] sm:w-[188px] lg:w-[196px] transition-[filter] duration-500",
                      isActive &&
                        "drop-shadow-[0_28px_56px_rgba(232,93,93,0.28)]"
                    )}
                  />
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Contexto da tela em foco */}
        <div className="mt-8 flex flex-col items-center text-center">
          <motion.div
            key={activeIndex}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="technical-label text-[9px] text-[#e85d5d]">
              {activeSlide.step} · Jornada do app
            </p>
            <p className="mt-1 font-[family-name:'Space_Grotesk_Variable'] text-lg font-semibold text-[#071426]">
              {activeSlide.label}
            </p>
            <p className="mt-1 text-sm text-slate-500">{activeSlide.hint}</p>
          </motion.div>

          {/* Navegação + indicadores */}
          <div className="mt-6 flex items-center gap-4">
            <button
              type="button"
              onClick={() => stepBy(-1)}
              disabled={activeIndex === 0}
              aria-label="Tela anterior"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-slate-300 hover:text-[#071426] disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:text-slate-500"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {showcaseSlides.map((slide, i) => (
                <button
                  key={slide.label}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Ir para ${slide.label}`}
                  aria-current={i === activeIndex ? "step" : undefined}
                  className="group flex flex-col items-center gap-1.5 px-0.5"
                >
                  <motion.span
                    className="block h-1 rounded-full bg-slate-200"
                    animate={{
                      width: i === activeIndex ? 32 : 10,
                      backgroundColor:
                        i === activeIndex
                          ? "rgba(232, 93, 93, 0.95)"
                          : "rgba(226, 232, 240, 1)",
                    }}
                    transition={spring}
                  />
                  <span
                    className={cn(
                      "text-[9px] tracking-wide transition-colors",
                      i === activeIndex
                        ? "text-[#e85d5d]"
                        : "text-slate-400 group-hover:text-slate-600"
                    )}
                  >
                    {slide.label}
                  </span>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => stepBy(1)}
              disabled={activeIndex === showcaseSlides.length - 1}
              aria-label="Próxima tela"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-slate-300 hover:text-[#071426] disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:text-slate-500"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {canScroll && (
            <p className="mt-4 text-[11px] text-slate-600 lg:hidden">
              Deslize ou toque uma tela para explorar
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/** @deprecated Use TrampoFeitoShowcase */
export function CasePhoneCarousel({ className }: { className?: string }) {
  return <TrampoFeitoShowcase className={className} />;
}

export function PublishedStoresSeal({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4", className)}>
      <span className="text-xs text-slate-500">App publicado em</span>
      <StoreBadges />
    </div>
  );
}
