import Link from "next/link";
import {
  TRAMPOFEITO_APP_STORE,
  TRAMPOFEITO_GOOGLE_PLAY,
} from "@/lib/utils";

function AppStoreBadge() {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.44 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[9px] uppercase tracking-wide opacity-80">
          Disponível na
        </span>
        <span className="text-sm font-semibold">App Store</span>
      </span>
    </span>
  );
}

function GooglePlayBadge() {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
        <path fill="#34A853" d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.28 0 .53.08.76.21l13.12 7.5c.65.37.87 1.19.5 1.84-.12.21-.28.39-.5.5l-13.12 7.5c-.65.37-1.47.15-1.84-.5A1.5 1.5 0 0 1 3 20.5z" />
        <path fill="#FBBC04" d="M16.38 12 4.26 4.5A1.5 1.5 0 0 1 3 3.5v17c0 .55.3 1.05.76 1.29L16.38 12z" />
        <path fill="#4285F4" d="M20.16 10.27 16.38 12l3.78 1.73 2.84-1.64c.77-.44.77-1.54 0-1.98l-2.84-1.64z" />
        <path fill="#EA4335" d="M4.26 19.5 16.38 12l-3.78-1.73-12.12 7.01A1.5 1.5 0 0 0 4.26 19.5z" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[9px] uppercase tracking-wide opacity-80">
          Disponível no
        </span>
        <span className="text-sm font-semibold">Google Play</span>
      </span>
    </span>
  );
}

const badgeClass =
  "inline-flex h-10 min-w-[132px] items-center justify-center rounded-lg border border-white/20 bg-black/40 px-3.5 text-white transition-all hover:border-white/35 hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50";

export function StoreBadges({ className }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className ?? ""}`}>
      <Link
        href={TRAMPOFEITO_APP_STORE}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver na App Store"
        className={badgeClass}
      >
        <AppStoreBadge />
      </Link>
      <Link
        href={TRAMPOFEITO_GOOGLE_PLAY}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver no Google Play"
        className={badgeClass}
      >
        <GooglePlayBadge />
      </Link>
    </div>
  );
}
