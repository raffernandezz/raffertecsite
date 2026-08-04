export type LandingVariant = "restaurant" | "clinic" | "barber";
export type MockupDensity = "hero" | "card" | "modal";

interface LandingScreenProps {
  variant: LandingVariant;
  compact?: boolean;
  density?: MockupDensity;
}

const configs = {
  restaurant: {
    bg: "bg-[#fffaf5]",
    hero: "from-amber-700/90 to-orange-600/80",
    accentLight: "bg-amber-100 text-amber-900",
    muted: "text-gray-500",
    name: "Culinária Brasileira",
    headline: "Sabores autênticos para o seu momento",
    subtitle: "Pratos feitos com ingredientes frescos e receitas tradicionais.",
    services: ["Almoço", "Jantar", "Delivery"],
    cta: "Pedir pelo WhatsApp",
    location: "Atendimento nacional",
  },
  clinic: {
    bg: "bg-[#f5f9ff]",
    hero: "from-sky-600/90 to-blue-700/80",
    accentLight: "bg-sky-100 text-sky-900",
    muted: "text-gray-500",
    name: "Clínica Bem-Estar",
    headline: "Cuidado e atenção para você e sua família",
    subtitle: "Especialidades médicas com atendimento humanizado.",
    services: ["Clínico", "Pediatria", "Exames"],
    cta: "Agendar contato",
    location: "Av. Principal · SP",
  },
  barber: {
    bg: "bg-[#141414]",
    hero: "from-neutral-800 to-neutral-900",
    accentLight: "bg-neutral-700 text-gray-100",
    muted: "text-gray-400",
    name: "Barbearia Estilo",
    headline: "Cortes modernos com atendimento premium",
    subtitle: "Ambiente confortável e profissionais experientes.",
    services: ["Corte", "Barba", "Sobrancelha"],
    cta: "Chamar no WhatsApp",
    location: "Atendimento nacional",
  },
};

function getSizes(density: MockupDensity, compact: boolean) {
  if (density === "hero") {
    return compact
      ? {
          pad: "p-2",
          name: "text-[7px] font-semibold",
          headline: "text-[9px] font-bold leading-tight",
          service: "text-[6px] font-medium",
          cta: "text-[7px] font-semibold py-0.5",
          location: "text-[6px]",
          icon: "h-2 w-2",
          heroH: "h-[30%]",
          showSubtitle: false,
        }
      : {
          pad: "p-3",
          name: "text-[11px] font-semibold",
          headline: "text-[14px] font-bold leading-tight",
          service: "text-[8px] font-medium",
          cta: "text-[10px] font-semibold py-1",
          location: "text-[7px]",
          icon: "h-2.5 w-2.5",
          heroH: "h-[34%]",
          showSubtitle: false,
        };
  }

  if (density === "modal") {
    return compact
      ? {
          pad: "p-2.5",
          name: "text-[8px] font-semibold",
          headline: "text-[11px] font-bold leading-tight",
          service: "text-[7px] font-medium",
          cta: "text-[8px] font-semibold py-0.5",
          location: "text-[7px]",
          icon: "h-2 w-2",
          heroH: "h-[30%]",
          showSubtitle: false,
        }
      : {
          pad: "p-3.5",
          name: "text-[12px] font-semibold",
          headline: "text-[15px] font-bold leading-tight",
          service: "text-[9px] font-medium",
          cta: "text-[11px] font-semibold py-1",
          location: "text-[8px]",
          icon: "h-3 w-3",
          heroH: "h-[34%]",
          showSubtitle: false,
        };
  }

  // card density
  return compact
    ? {
        pad: "p-2",
        name: "text-[7px] font-semibold",
        headline: "text-[9px] font-bold leading-tight",
        service: "text-[6px] font-medium",
        cta: "text-[7px] font-semibold py-0.5",
        location: "text-[6px]",
        icon: "h-2 w-2",
        heroH: "h-[30%]",
        showSubtitle: false,
      }
    : {
        pad: "p-2.5",
        name: "text-[10px] font-semibold",
        headline: "text-[12px] font-bold leading-tight",
        service: "text-[7px] font-medium",
        cta: "text-[9px] font-semibold py-0.5",
        location: "text-[7px]",
        icon: "h-2 w-2",
        heroH: "h-[32%]",
        showSubtitle: false,
      };
}

function LandingScreen({
  variant,
  compact = false,
  density = "card",
}: LandingScreenProps) {
  const c = configs[variant];
  const isDark = variant === "barber";
  const s = getSizes(density, compact);

  return (
    <div className={`flex h-full flex-col ${c.bg}`}>
      <div
        className={`relative bg-gradient-to-br ${c.hero} ${s.heroH}`}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div
          className={`relative flex h-full flex-col justify-end ${s.pad}`}
        >
          <span
            className={`${s.name} uppercase tracking-wide text-white/90`}
          >
            {c.name}
          </span>
          <p className={`${s.headline} text-white`}>
            {compact && density === "card"
              ? c.headline.slice(0, 22) + "…"
              : c.headline}
          </p>
        </div>
      </div>

      <div className={`flex flex-1 flex-col gap-1 ${s.pad}`}>
        {s.showSubtitle && (
          <p className={`text-[6px] leading-snug ${c.muted}`}>{c.subtitle}</p>
        )}

        <div className="mt-0.5 flex gap-0.5">
          {c.services.map((service) => (
            <div
              key={service}
              className={`flex-1 rounded px-0.5 py-0.5 text-center ${s.service} ${c.accentLight}`}
            >
              {service}
            </div>
          ))}
        </div>

        <div
          className={`mt-1 flex items-center justify-center gap-0.5 rounded-full ${s.cta} text-white ${variant === "barber" ? "bg-white !text-gray-900" : "bg-[#25D366]"}`}
        >
          {!compact && (
            <svg
              className={s.icon}
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
          )}
          <span>{compact ? "WhatsApp" : c.cta}</span>
        </div>

        <div
          className={`mt-auto flex items-center gap-0.5 ${s.location} ${c.muted}`}
        >
          <svg
            className={`${s.icon} shrink-0`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <span>{c.location}</span>
        </div>
      </div>
    </div>
  );
}

interface DeviceFrameProps {
  type: "laptop" | "phone";
  children: React.ReactNode;
  className?: string;
}

function DeviceFrame({ type, children, className }: DeviceFrameProps) {
  if (type === "laptop") {
    return (
      <div className={className}>
        <div className="rounded-lg border border-gray-200 bg-gray-100 p-1.5 shadow-lg">
          <div className="mb-1 flex items-center gap-1 px-0.5">
            <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
            <div className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
            <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
          </div>
          <div className="aspect-[16/10] overflow-hidden rounded-sm bg-white">
            {children}
          </div>
        </div>
        <div className="mx-auto h-1.5 w-16 rounded-b-md bg-gray-200" />
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="rounded-[1rem] border-[2.5px] border-gray-800 bg-gray-800 p-0.5 shadow-lg">
        <div className="aspect-[9/16] w-full overflow-hidden rounded-[0.85rem] bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}

interface LandingMockupProps {
  variant: LandingVariant;
  size?: "sm" | "md" | "lg";
}

export function LandingMockup({ variant, size = "md" }: LandingMockupProps) {
  const laptopWidth = {
    sm: "w-full max-w-[220px]",
    md: "w-full max-w-[300px]",
    lg: "w-full max-w-xs",
  }[size];
  const phoneWidth = {
    sm: "w-[76px]",
    md: "w-[96px]",
    lg: "w-[104px]",
  }[size];

  return (
    <div className="relative mx-auto flex w-full items-end justify-center">
      <DeviceFrame type="laptop" className={`relative z-10 ${laptopWidth}`}>
        <LandingScreen variant={variant} density="card" />
      </DeviceFrame>
      <DeviceFrame
        type="phone"
        className={`absolute -right-1 bottom-3 z-20 sm:-right-2 ${phoneWidth}`}
      >
        <LandingScreen variant={variant} compact density="card" />
      </DeviceFrame>
    </div>
  );
}

interface HeroMockupProps {
  className?: string;
}

export function HeroMockup({ className }: HeroMockupProps) {
  return (
    <div className={`relative w-full ${className ?? ""}`}>
      <DeviceFrame type="laptop" className="relative z-10 w-full max-w-[32.5rem]">
        <LandingScreen variant="restaurant" density="hero" />
      </DeviceFrame>

      <DeviceFrame
        type="phone"
        className="absolute -right-1 bottom-10 z-20 w-[104px] sm:-right-2 sm:bottom-12 sm:w-[112px]"
      >
        <LandingScreen variant="restaurant" compact density="hero" />
      </DeviceFrame>
    </div>
  );
}

export { LandingScreen, DeviceFrame };
