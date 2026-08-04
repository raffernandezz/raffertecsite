"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, Code2, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroCapabilityVisual } from "@/components/ui/HeroShowcase";
import { WHATSAPP_DESCRIBE_PROJECT_URL } from "@/lib/utils";

const trustItems = [
  { icon: Code2, label: "Projetos sob medida" },
  { icon: Users, label: "Acompanhamento direto" },
  { icon: Globe, label: "Empresa 100% remota" },
];

export function Hero() {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const showcaseY = useTransform(scrollY, [0, 500], [0, reduceMotion ? 0 : 16]);
  const showcaseOpacity = useTransform(
    scrollY,
    [0, 400],
    [1, reduceMotion ? 1 : 0.5]
  );

  return (
    <section className="relative bg-white pt-[4.5rem] text-[#071426] lg:pt-[4.75rem]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_80%_45%,rgba(59,130,246,0.07),transparent_70%)]" />

      <Container className="relative max-w-7xl">
        <div className="grid min-w-0 items-center gap-8 py-8 sm:gap-10 sm:py-10 lg:grid-cols-2 lg:gap-x-10 lg:py-12">
          <div className="relative z-10 min-w-0 lg:max-w-[34rem]">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 shadow-sm"
            >
              <span className="status-pulse relative flex h-2 w-2 shrink-0 items-center justify-center">
                <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[11px] font-medium tracking-wide text-slate-600">
                Disponível para novos projetos
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06, duration: 0.55 }}
              className="mt-5 font-[family-name:'Space_Grotesk_Variable'] text-[1.85rem] font-semibold leading-[1.12] tracking-[-0.04em] text-[#071426] sm:text-[2.35rem] lg:text-[2.65rem] xl:text-[2.85rem] lg:leading-[1.08]"
            >
              Tecnologia sob medida
              <br />
              para negócios
              <br />
              <span className="text-gradient-blue-light">que querem crescer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.5 }}
              className="mt-4 max-w-md text-[15px] leading-7 text-slate-600 sm:mt-5 lg:text-[16px]"
            >
              Sites, apps, sistemas e automações — da estratégia à publicação,
              com acompanhamento direto.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.5 }}
              className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center"
            >
              <Button
                href={WHATSAPP_DESCRIBE_PROJECT_URL}
                external
                size="lg"
                className="button-sheen w-full sm:w-auto"
              >
                Descrever meu projeto
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
              <Button
                href="#possibilidades"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Ver trabalhos
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.24, duration: 0.45 }}
              className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2"
            >
              {trustItems.map((item) => (
                <span
                  key={item.label}
                  className="flex min-w-0 items-center gap-2 text-[12px] text-slate-600 sm:text-[13px]"
                >
                  <item.icon className="h-4 w-4 shrink-0 text-blue-600" />
                  <span className="truncate">{item.label}</span>
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            ref={showcaseRef}
            style={{ y: showcaseY, opacity: showcaseOpacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-0 min-w-0 flex items-center justify-center lg:justify-end"
          >
            <HeroCapabilityVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
