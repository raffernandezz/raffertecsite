"use client";

import { motion } from "framer-motion";
import { AppWindow, MapPin, Smartphone, UserCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

const signals = [
  {
    icon: AppWindow,
    label: "Sites, apps e sistemas",
    detail: "Do briefing à publicação",
  },
  {
    icon: UserCheck,
    label: "Contato direto com a equipe",
    detail: "Sem intermediários",
  },
  {
    icon: Smartphone,
    label: "App publicado nas lojas",
    detail: "TrampoFeito · iOS & Android",
  },
  {
    icon: MapPin,
    label: "Empresa 100% remota",
    detail: "Atendimento em todo o Brasil",
  },
];

export function CredibilityBar() {
  return (
    <section
      className="relative border-y border-slate-200/80 bg-white"
      aria-label="Diferenciais da RafferTec"
    >
      <Container>
        <div className="grid grid-cols-2 gap-4 py-6 sm:gap-6 lg:grid-cols-4 lg:py-7">
          {signals.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="flex min-w-0 items-start gap-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
                <item.icon className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold leading-snug text-[#071426] sm:text-sm">
                  {item.label}
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
