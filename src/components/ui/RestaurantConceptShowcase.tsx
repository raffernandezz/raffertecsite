import Image from "next/image";
import { DeviceFrame } from "@/components/ui/LandingMockup";

const BASE = "/assets/portfolio/restaurant";

const desktopShots = [
  {
    src: `${BASE}/desktop-hero.png`,
    alt: "Demonstração desktop — página inicial do restaurante",
    label: "Página inicial",
  },
  {
    src: `${BASE}/desktop-menu.png`,
    alt: "Demonstração desktop — destaques do cardápio",
    label: "Cardápio",
  },
  {
    src: `${BASE}/desktop-reviews.png`,
    alt: "Demonstração desktop — avaliações e Instagram",
    label: "Avaliações",
  },
];

const mobileShots = [
  {
    src: `${BASE}/mobile-hero.png`,
    alt: "Demonstração mobile — página inicial",
    label: "Início",
  },
  {
    src: `${BASE}/mobile-menu.png`,
    alt: "Demonstração mobile — cardápio",
    label: "Cardápio",
  },
  {
    src: `${BASE}/mobile-reviews.png`,
    alt: "Demonstração mobile — avaliações",
    label: "Avaliações",
  },
  {
    src: `${BASE}/mobile-nav.png`,
    alt: "Demonstração mobile — menu de navegação",
    label: "Menu",
  },
];

function ScreenImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`object-cover object-top ${className ?? ""}`}
      sizes="(max-width: 768px) 100vw, 400px"
    />
  );
}

function GalleryShot({
  src,
  alt,
  label,
  aspect = "desktop",
}: {
  src: string;
  alt: string;
  label: string;
  aspect?: "desktop" | "mobile";
}) {
  const aspectClass =
    aspect === "desktop" ? "aspect-[16/10]" : "aspect-[9/16]";

  return (
    <figure className="flex flex-col">
      <div
        className={`relative overflow-hidden rounded-lg border border-border bg-white shadow-sm ${aspectClass}`}
      >
        <ScreenImage src={src} alt={alt} />
      </div>
      <figcaption className="mt-2 text-center text-xs text-muted">
        {label}
      </figcaption>
    </figure>
  );
}

/** Miniatura do card — mesmo padrão visual dos outros conceitos */
export function RestaurantConceptCardPreview() {
  return (
    <div className="relative mx-auto flex w-full max-w-[300px] items-end justify-center">
      <DeviceFrame type="laptop" className="relative z-10 w-full max-w-[300px]">
        <div className="relative aspect-[16/10] w-full bg-white">
          <ScreenImage
            src={`${BASE}/desktop-hero.png`}
            alt="Demonstração conceitual — landing page para restaurante"
          />
        </div>
      </DeviceFrame>
      <DeviceFrame
        type="phone"
        className="absolute -right-1 bottom-3 z-20 w-[96px] sm:-right-2"
      >
        <div className="relative aspect-[9/16] w-full bg-white">
          <ScreenImage
            src={`${BASE}/mobile-hero.png`}
            alt="Demonstração mobile — restaurante"
          />
        </div>
      </DeviceFrame>
    </div>
  );
}

export function RestaurantConceptModalGallery() {
  return (
    <div className="space-y-10">
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">
          Versão desktop
        </p>
        <div className="space-y-4">
          <GalleryShot {...desktopShots[0]} aspect="desktop" />
          <div className="grid gap-4 sm:grid-cols-2">
            <GalleryShot {...desktopShots[1]} aspect="desktop" />
            <GalleryShot {...desktopShots[2]} aspect="desktop" />
          </div>
        </div>
      </div>

      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">
          Versão mobile
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {mobileShots.map((shot) => (
            <GalleryShot key={shot.src} {...shot} aspect="mobile" />
          ))}
        </div>
      </div>
    </div>
  );
}
