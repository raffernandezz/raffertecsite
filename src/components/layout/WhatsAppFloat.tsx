"use client";

import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/utils";

export function WhatsAppFloat() {
  return (
    <div className="group fixed right-4 bottom-4 z-50 sm:right-5 sm:bottom-5">
      <span
        className="pointer-events-none absolute right-full mr-3 hidden translate-x-1 items-center rounded-lg bg-foreground px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-md transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100 lg:flex"
        aria-hidden="true"
      >
        Fale conosco
      </span>
      <Link
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-md transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 active:scale-95"
      >
        <Image
          src="/assets/whatsapp-logo.png"
          alt=""
          width={24}
          height={24}
          className="h-6 w-6 brightness-0 invert"
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}
