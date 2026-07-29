import Image from "next/image";
import Link from "next/link";
import {
  TRAMPOFEITO_APP_STORE,
  TRAMPOFEITO_GOOGLE_PLAY,
} from "@/lib/utils";

export function StoreBadges({ className }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className ?? ""}`}>
      <Link
        href={TRAMPOFEITO_APP_STORE}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver na App Store"
        className="inline-flex h-11 w-[140px] shrink-0 items-center justify-center transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f]"
      >
        <Image
          src="/assets/applestore-badge.png"
          alt="Baixar na App Store"
          width={797}
          height={253}
          className="h-full w-full object-contain object-center"
        />
      </Link>
      <Link
        href={TRAMPOFEITO_GOOGLE_PLAY}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver no Google Play"
        className="inline-flex h-11 w-[140px] shrink-0 items-center justify-center transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f]"
      >
        <Image
          src="/assets/googleplay-badge.png"
          alt="Disponível no Google Play"
          width={853}
          height={243}
          className="h-full w-full object-contain object-center"
        />
      </Link>
    </div>
  );
}
