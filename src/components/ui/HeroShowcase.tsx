"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Database, Globe, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const servicePills = [
  { icon: Globe, label: "Sites" },
  { icon: Smartphone, label: "Apps" },
  { icon: Database, label: "Sistemas" },
];

export function HeroCapabilityVisual({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={cn("relative w-full min-w-0", className)}>
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease }}
        className="relative mx-auto w-full max-w-[min(100%,640px)] lg:max-w-none"
      >
        <div
          className="relative aspect-[4/3] w-full max-h-[min(52vh,420px)] sm:max-h-[min(56vh,480px)] lg:aspect-[16/11] lg:max-h-[min(72vh,680px)] xl:max-h-[min(75vh,740px)]"
        >
          <Image
            src="/assets/hero/hero-brand-seamless.png"
            alt=""
            width={1920}
            height={1080}
            className="h-full w-full object-contain object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 50vw"
            priority
            aria-hidden
          />

          <div
            className="pointer-events-none absolute left-[18%] top-[16%] hidden h-[64%] w-[72%] bg-[radial-gradient(ellipse_at_60%_50%,rgba(59,130,246,0.07),transparent_70%)] min-[520px]:block"
            aria-hidden
          />

          {/* Pills sobre a imagem — telas maiores */}
          <div className="pointer-events-none absolute inset-0 hidden min-[520px]:block">
            {servicePills.map((pill, i) => (
              <motion.div
                key={pill.label}
                initial={reduceMotion ? false : { opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.45, ease }}
                className="absolute flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 shadow-[0_8px_28px_rgba(15,40,90,0.08)] backdrop-blur-sm"
                style={{
                  top: `${14 + i * 22}%`,
                  left: `${4 + (i % 2) * 2}%`,
                }}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <pill.icon className="h-3.5 w-3.5" strokeWidth={2.2} />
                </span>
                <span className="text-[11px] font-semibold text-[#071426]">
                  {pill.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pills abaixo — celular */}
        <div className="mt-3 flex flex-wrap justify-center gap-2 min-[520px]:hidden">
          {servicePills.map((pill) => (
            <span
              key={pill.label}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-[#071426] shadow-sm"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <pill.icon className="h-3 w-3" strokeWidth={2.2} />
              </span>
              {pill.label}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
