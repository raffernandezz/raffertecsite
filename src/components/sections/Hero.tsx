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
  const showcaseY = useTransform(scrollY, [0, 500], [0, reduceMotion ? 0 : 12]);
  const showcaseOpacity = useTransform(
    scrollY,
    [0, 400],
    [1, reduceMotion ? 1 : 0.65]
  );

  return (
    <section className="relative bg-white pt-[4.25rem] text-[#071426] lg:pt-[4.5rem]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_85%_40%,rgba(59,130,246,0.06),transparent_65%)]"
      />

      <Container className="relative max-w-7xl">
        <div className="grid min-w-0 items-center gap-10 py-10 sm:gap-12 sm:py-12 lg:grid-cols-2 lg:gap-x-14 lg:py-16">
          <div className="relative z-10 min-w-0 lg:max-w-[36rem]">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap items-center gap-x-3 gap-y-2"
            >
              <span className="technical-label text-[10px] text-blue-600">
                RafferTec
              </span>
              <span
                aria-hidden="true"
                className="hidden h-3 w-px bg-slate-200 sm:block"
              />
              <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-slate-200/90 bg-slate-50/80 px-3 py-1">
                <span className="status-pulse relative flex h-2 w-2 shrink-0 items-center justify-center">
                  <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-[11px] font-medium tracking-wide text-slate-600">
                  Disponível para novos projetos
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06, duration: 0.5 }}
              className="mt-5 font-[family-name:'Space_Grotesk_Variable'] font-semibold tracking-[-0.04em] text-[#071426]"
              style={{
                fontSize: "clamp(1.75rem, 4.2vw + 0.6rem, 2.85rem)",
                lineHeight: 1.1,
              }}
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
              transition={{ delay: 0.12, duration: 0.45 }}
              className="mt-5 max-w-[28rem] text-[15px] leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-7"
            >
              Sites, apps, sistemas e automações sob medida para empresas —
              da estratégia à publicação, com acompanhamento direto.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.45 }}
              className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center"
            >
              <Button
                href={WHATSAPP_DESCRIBE_PROJECT_URL}
                external
                size="lg"
                className="w-full sm:w-auto"
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

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.22, duration: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5 border-t border-slate-100 pt-6"
            >
              {trustItems.map((item) => (
                <li
                  key={item.label}
                  className="flex min-w-0 items-center gap-2 text-[12px] text-slate-600 sm:text-[13px]"
                >
                  <item.icon className="h-3.5 w-3.5 shrink-0 text-blue-600" />
                  <span>{item.label}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            ref={showcaseRef}
            style={{ y: showcaseY, opacity: showcaseOpacity }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-0 flex min-w-0 items-center justify-center lg:justify-end"
          >
            <HeroCapabilityVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
