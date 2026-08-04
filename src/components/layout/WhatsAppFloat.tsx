"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

export function WhatsAppFloat() {
  return (
    <div className="group fixed right-3 bottom-3 z-50 pb-[max(0px,env(safe-area-inset-bottom))] sm:right-5 sm:bottom-5">
      <span className="pointer-events-none absolute right-0 bottom-full mb-3 hidden w-max translate-y-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-[#071426] opacity-0 shadow-xl transition-all group-hover:translate-y-0 group-hover:opacity-100 lg:block">
        Fale diretamente com a RafferTec
      </span>
      <Link
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com a RafferTec pelo WhatsApp"
        className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-300/30 bg-[linear-gradient(135deg,#1d4ed8,#3b82f6)] text-white shadow-[0_10px_28px_rgba(29,78,216,.35)] transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 sm:h-14 sm:w-14"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </Link>
    </div>
  );
}
