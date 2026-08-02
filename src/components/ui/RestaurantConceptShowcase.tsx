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
  fit = "cover",
}: {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={fit === "contain" ? "object-contain object-top" : "object-cover object-top"}
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
        <ScreenImage src={src} alt={alt} fit="cover" />
      </div>
      <figcaption className="mt-2 text-center text-xs text-muted">
        {label}
      </figcaption>
    </figure>
  );
}

/** Preview do card — imagem composta limpa (sem encaixar PNG dentro de outro mockup) */
export function RestaurantConceptCardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <Image
        src={`${BASE}/card-preview.png`}
        alt="Demonstração conceitual — landing page para restaurante em notebook e celular"
        width={900}
        height={560}
        className="h-auto w-full object-contain"
        sizes="(max-width: 768px) 90vw, 320px"
        priority={false}
      />
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
          <div className="flex justify-center rounded-xl bg-surface px-4 py-6 sm:px-8">
            <DeviceFrame type="laptop" className="w-full max-w-lg">
              <div className="relative h-full min-h-[180px] w-full">
                <ScreenImage
                  src={desktopShots[0].src}
                  alt={desktopShots[0].alt}
                />
              </div>
            </DeviceFrame>
          </div>
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
            <div key={shot.src} className="flex flex-col items-center">
              <DeviceFrame type="phone" className="w-full max-w-[120px]">
                <div className="relative h-full min-h-[160px] w-full">
                  <ScreenImage src={shot.src} alt={shot.alt} />
                </div>
              </DeviceFrame>
              <p className="mt-2 text-center text-xs text-muted">{shot.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
