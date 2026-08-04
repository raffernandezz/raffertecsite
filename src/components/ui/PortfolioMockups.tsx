import Image from "next/image";
import { cn } from "@/lib/utils";

const RESTAURANT = "/assets/portfolio/restaurant";
const RESTAURANT_LANDING = `${RESTAURANT}/landing-mockup.png`;
const BARBER = "/assets/portfolio/barber";
const BARBER_HERO = `${BARBER}/conexao-hero-mockup.png`;
const BARBER_SERVICES = `${BARBER}/conexao-services-mockup.png`;
const BARBER_EXPERIENCE = `${BARBER}/conexao-experience-mockup.png`;
const CLINIC = "/assets/portfolio/clinic/mockup-transparent.png";

const restaurantDesktopScreens = [
  {
    src: RESTAURANT_LANDING,
    label: "Página inicial",
    alt: "Cantinho Nordestino — landing page em desktop e mobile",
  },
  {
    src: `${RESTAURANT}/desktop-menu-mockup.png`,
    label: "Cardápio digital",
    alt: "Cantinho Nordestino — cardápio digital com categorias, busca e pedido pelo iFood",
  },
  {
    src: `${RESTAURANT}/desktop-about-mockup.png`,
    label: "O cantinho",
    alt: "Cantinho Nordestino — seção sobre o restaurante e ambiente",
  },
  {
    src: `${RESTAURANT}/desktop-reviews-mockup.png`,
    label: "Avaliações",
    alt: "Cantinho Nordestino — avaliações no iFood e Google com Instagram",
  },
  {
    src: `${RESTAURANT}/desktop-footer-mockup.png`,
    label: "Hero e rodapé",
    alt: "Cantinho Nordestino — chamada principal, pedidos e rodapé completo",
  },
];

const barberScreens = [
  {
    src: BARBER_HERO,
    label: "Página inicial",
    alt: "Conexão 12 Barber Shop — landing page para barbearia",
  },
  {
    src: BARBER_SERVICES,
    label: "Serviços",
    alt: "Conexão 12 Barber Shop — serviços, preços e agendamento",
  },
  {
    src: BARBER_EXPERIENCE,
    label: "Experiência",
    alt: "Conexão 12 Barber Shop — experiência, avaliações e ambiente",
  },
];

/** Fundo branco — barbearia */
export const barberPreviewSurface = "bg-white";

/** Fundo branco — restaurante */
export const restaurantPreviewSurface = "bg-white";

function MockupImage({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={800}
      className={cn("h-auto w-full object-contain", className)}
      sizes="(max-width: 768px) 100vw, 50vw"
      priority={priority}
    />
  );
}

function LaptopScreenShot({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <figure className="flex flex-col">
      <div className="flex justify-center rounded-xl bg-white px-3 py-4 sm:px-4 sm:py-5">
        <MockupImage src={src} alt={alt} className="max-h-[min(380px,65vw)] w-full sm:max-h-[min(420px,50vw)]" />
      </div>
      <figcaption className="mt-2.5 text-center text-xs font-medium text-slate-500">
        {label}
      </figcaption>
    </figure>
  );
}

/** Card do portfolio — restaurante */
export function RestaurantCardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[min(100%,540px)]">
      <MockupImage
        src={RESTAURANT_LANDING}
        alt="Cantinho Nordestino — landing page para restaurante em desktop e mobile"
        priority
        className="relative z-10 w-full"
      />
    </div>
  );
}

/** Modal do restaurante */
export function RestaurantModalGallery() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Telas do projeto
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {restaurantDesktopScreens.map((screen) => (
            <LaptopScreenShot
              key={screen.src}
              src={screen.src}
              alt={screen.alt}
              label={screen.label}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Versão mobile
        </p>
        <div className="flex items-center justify-center py-4">
          <Image
            src={`${RESTAURANT}/mobile-mockup.png`}
            alt="Cantinho Nordestino — versão mobile da landing page"
            width={520}
            height={1040}
            className="mx-auto h-auto w-auto max-h-[520px] max-w-[min(100%,280px)] object-contain drop-shadow-[0_24px_48px_rgba(15,40,90,0.12)]"
            sizes="280px"
          />
        </div>
      </div>
    </div>
  );
}

/** Card do portfolio — barbearia */
export function BarberCardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[min(100%,540px)]">
      <MockupImage
        src={BARBER_HERO}
        alt="Conexão 12 Barber Shop — landing page para barbearia em desktop"
        priority
        className="relative z-10 w-full"
      />
    </div>
  );
}

/** Modal da barbearia */
export function BarberModalGallery() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Telas do projeto
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {barberScreens.map((screen) => (
            <LaptopScreenShot
              key={screen.src}
              src={screen.src}
              alt={screen.alt}
              label={screen.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Card e modal — clínica */
export function ClinicMockup({ className }: { className?: string }) {
  return (
    <MockupImage
      src={CLINIC}
      alt="Demonstração conceitual — landing page para clínica"
      className={className}
    />
  );
}

/** Card — barbearia (legado) */
export function BarberMockup({ className }: { className?: string }) {
  return (
    <MockupImage
      src={BARBER_HERO}
      alt="Conexão 12 Barber Shop — landing page para barbearia"
      className={className}
    />
  );
}

/** Modal — barbearia (legado) */
export function BarberModalMockup({ className }: { className?: string }) {
  return (
    <MockupImage
      src={BARBER_HERO}
      alt="Conexão 12 Barber Shop — landing page para barbearia"
      className={className}
    />
  );
}
