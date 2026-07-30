import Image from "next/image";

const BASE = "/assets/portfolio/restaurant";

const desktopShots = [
  {
    src: `${BASE}/desktop-hero.png`,
    alt: "Demonstração desktop — página inicial do restaurante",
    label: "Página inicial",
    className: "w-full",
  },
  {
    src: `${BASE}/desktop-menu.png`,
    alt: "Demonstração desktop — destaques do cardápio",
    label: "Cardápio",
    className: "w-full",
  },
  {
    src: `${BASE}/desktop-reviews.png`,
    alt: "Demonstração desktop — avaliações e Instagram",
    label: "Avaliações",
    className: "w-full",
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

function ShotCard({
  src,
  alt,
  label,
  className,
  compact = false,
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <figure className={className}>
      <div
        className={`overflow-hidden rounded-lg border border-border bg-white shadow-sm ${
          compact ? "mx-auto max-w-[120px]" : ""
        }`}
      >
        <Image
          src={src}
          alt={alt}
          width={compact ? 120 : 614}
          height={compact ? 220 : 348}
          className="h-auto w-full"
          sizes={compact ? "120px" : "(max-width: 768px) 100vw, 50vw"}
        />
      </div>
      <figcaption className="mt-2 text-center text-xs text-muted">
        {label}
      </figcaption>
    </figure>
  );
}

export function RestaurantConceptCardPreview() {
  return (
    <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-xl border border-border bg-[#faf5ef] shadow-sm">
      <Image
        src={`${BASE}/card-preview.png`}
        alt="Demonstração conceitual — landing page para restaurante, desktop e mobile"
        width={560}
        height={317}
        className="h-auto w-full"
        sizes="300px"
        priority
      />
    </div>
  );
}

export function RestaurantConceptModalGallery() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-4 text-sm font-semibold text-foreground">Versão desktop</p>
        <div className="space-y-4">
          <ShotCard {...desktopShots[0]} />
          <div className="grid gap-4 sm:grid-cols-2">
            <ShotCard {...desktopShots[1]} />
            <ShotCard {...desktopShots[2]} />
          </div>
        </div>
      </div>

      <div>
        <p className="mb-4 text-sm font-semibold text-foreground">Versão mobile</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {mobileShots.map((shot) => (
            <ShotCard key={shot.src} {...shot} compact />
          ))}
        </div>
      </div>
    </div>
  );
}
