import Image from "next/image";
import { cn } from "@/lib/utils";

const RESTAURANT = "/assets/portfolio/restaurant";
const RESTAURANT_LANDING = `${RESTAURANT}/landing-mockup.png`;
const BARBER = "/assets/portfolio/barber";
const BARBER_HERO = `${BARBER}/conexao-hero-mockup.png`;
const BARBER_SERVICES = `${BARBER}/conexao-services-mockup.png`;
const BARBER_EXPERIENCE = `${BARBER}/conexao-experience-mockup.png`;
const ANS = "/assets/portfolio/ans";
const ANS_HERO = `${ANS}/01-home-hero.png`;
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

const ansScreens = [
  {
    src: ANS_HERO,
    label: "Página inicial",
    alt: "ANS Partner — hero com imóveis, construção, investimentos e crédito",
  },
  {
    src: `${ANS}/02-escolha-seu-caminho.png`,
    label: "Escolha seu caminho",
    alt: "ANS Partner — imóveis, construção, incorporador, cartas, consórcio, locação e crédito",
  },
  {
    src: `${ANS}/03-imoveis-destaque.png`,
    label: "Imóveis em destaque",
    alt: "ANS Partner — imóveis de luxo e altíssimo padrão em destaque",
  },
  {
    src: `${ANS}/04-catalogo-imoveis.png`,
    label: "Catálogo de imóveis",
    alt: "ANS Partner — catálogo com busca, filtros e listagem de oportunidades",
  },
  {
    src: `${ANS}/05-admin-dashboard.png`,
    label: "Dashboard",
    alt: "ANS Partner — painel administrativo com visão geral do site",
  },
  {
    src: `${ANS}/06-admin-imoveis.png`,
    label: "Gestão de imóveis",
    alt: "ANS Partner — cadastro e gestão de imóveis para venda e locação",
  },
  {
    src: `${ANS}/07-admin-projetos.png`,
    label: "Projetos",
    alt: "ANS Partner — gestão de projetos de investimento e incorporação",
  },
  {
    src: `${ANS}/08-admin-banners.png`,
    label: "Gestão de banners",
    alt: "ANS Partner — configuração dos banners do hero da homepage",
  },
  {
    src: `${ANS}/09-home-completa.png`,
    label: "Home completa",
    alt: "ANS Partner — visão completa da homepage com hero e caminhos",
  },
];

/** Fundo branco — barbearia */
export const barberPreviewSurface = "bg-white";

/** Fundo branco — restaurante */
export const restaurantPreviewSurface = "bg-white";

/** Fundo branco — ANS Partner */
export const ansPreviewSurface = "bg-white";

export const restaurantThumbScreens = restaurantDesktopScreens.slice(0, 4);
export const barberThumbScreens = barberScreens;
export const ansThumbScreens = ansScreens.slice(0, 4);

/** Miniaturas das telas no card do portfólio */
export function ProjectThumbStrip({
  screens,
  totalCount,
}: {
  screens: { src: string; alt: string; label: string }[];
  totalCount: number;
}) {
  const visible = screens.slice(0, 4);
  const remaining = Math.max(0, totalCount - visible.length);

  return (
    <div className="mt-5 border-t border-slate-200/80 pt-4">
      <p className="mb-2.5 text-[10px] font-semibold tracking-wide text-slate-500 uppercase">
        Telas do projeto
      </p>
      <div className="flex items-center gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {visible.map((screen) => (
          <div
            key={screen.src}
            className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm sm:h-14 sm:w-[4.5rem]"
            title={screen.label}
          >
            <img
              src={screen.src}
              alt=""
              className="h-full w-full object-cover object-top"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
        {remaining > 0 && (
          <span className="flex h-12 min-w-12 shrink-0 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-white px-2 text-xs font-semibold text-slate-500 sm:h-14 sm:min-w-14">
            +{remaining}
          </span>
        )}
      </div>
    </div>
  );
}

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
    <figure className="flex w-full flex-col">
      <div className="flex min-h-[200px] items-center justify-center rounded-xl border border-slate-100 bg-white px-2 py-4 sm:min-h-[240px] sm:px-4 sm:py-5">
        {/* img nativo — layout mais previsível no modal mobile */}
        <img
          src={src}
          alt={alt}
          className="block h-auto w-full max-h-[min(52vh,360px)] object-contain sm:max-h-[min(420px,50vw)]"
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption className="mt-2.5 text-center text-xs font-medium text-slate-500">
        {label}
      </figcaption>
    </figure>
  );
}

function ProjectScreensGrid({
  screens,
}: {
  screens: { src: string; alt: string; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:gap-6">
      {screens.map((screen) => (
        <LaptopScreenShot
          key={screen.src}
          src={screen.src}
          alt={screen.alt}
          label={screen.label}
        />
      ))}
    </div>
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
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
        Telas do projeto
      </p>
      <p className="mb-4 text-[11px] text-slate-500 sm:hidden">
        Role para ver todas as telas
      </p>
      <ProjectScreensGrid screens={restaurantDesktopScreens} />
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
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Telas do projeto
        </p>
        <p className="mb-4 text-[11px] text-slate-500 sm:hidden">
          Role para ver todas as telas
        </p>
        <ProjectScreensGrid screens={barberScreens} />
      </div>
    </div>
  );
}

/** Card do portfolio — ANS Partner */
export function AnsCardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[min(100%,540px)]">
      <MockupImage
        src={ANS_HERO}
        alt="ANS Partner — site imobiliário com painel administrativo"
        priority
        className="relative z-10 w-full"
      />
    </div>
  );
}

/** Modal do ANS Partner */
export function AnsModalGallery() {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
        Telas do projeto
      </p>
      <p className="mb-4 text-[11px] text-slate-500 sm:hidden">
        Role para ver todas as telas
      </p>
      <ProjectScreensGrid screens={ansScreens} />
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
