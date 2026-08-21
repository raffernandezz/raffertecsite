"use client";

import Image from "next/image";
import { Globe, Layers, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const services = [
  {
    title: "Sites e experiências digitais",
    description:
      "Landing pages, sites institucionais e portais com foco em apresentação e conversão.",
    deliverables: [
      "Responsivo em todos os dispositivos",
      "Integração com WhatsApp e formulários",
      "Publicação e configuração do domínio",
    ],
    image: "/assets/portfolio/restaurant/services-hero-mockup.png",
    alt: "Cantinho Nordestino — landing page com cardápio e pedidos via iFood e WhatsApp",
    icon: Globe,
    layout: "featured" as const,
  },
  {
    title: "Aplicativos e sistemas",
    description:
      "Produtos mobile, plataformas web e áreas administrativas completas.",
    deliverables: [
      "Autenticação e perfis de usuário",
      "Bancos de dados e pagamentos",
      "Publicação para Android e iOS",
    ],
    image: "/assets/trampofeito/device-home.png",
    alt: "Aplicativo TrampoFeito publicado nas lojas",
    icon: Layers,
    layout: "card" as const,
  },
  {
    title: "Automações e integrações",
    description:
      "APIs, dados, pagamentos e rotinas que eliminam trabalho manual.",
    deliverables: [
      "Integração entre sistemas",
      "Processamento automático de dados",
      "Alertas e relatórios automáticos",
    ],
    image: "/assets/services/integration-flow.png",
    imageMobile: "/assets/services/integration-flow-mobile.png",
    alt: "Fluxo operacional de automação",
    icon: Zap,
    layout: "card" as const,
  },
];

function DeliverablesList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((item, index) => (
        <li
          key={item}
          className="flex gap-3 text-sm leading-relaxed text-slate-600"
        >
          <span
            className="shrink-0 font-[family-name:'Space_Grotesk_Variable'] text-xs font-semibold text-blue-600 tabular-nums"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ServiceVisual({
  image,
  imageMobile,
  alt,
  className,
}: {
  image: string;
  imageMobile?: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Image
        src={imageMobile ?? image}
        alt={alt}
        width={1200}
        height={800}
        className={`h-auto w-full object-contain object-center ${imageMobile ? "lg:hidden" : ""}`}
        sizes="(max-width: 1024px) 100vw, 40vw"
      />
      {imageMobile && (
        <Image
          src={image}
          alt={alt}
          width={1200}
          height={600}
          className="hidden h-auto w-full object-contain object-center lg:block"
          sizes="40vw"
        />
      )}
    </div>
  );
}

function ServiceBody({
  icon: Icon,
  title,
  description,
  deliverables,
}: {
  icon: typeof Globe;
  title: string;
  description: string;
  deliverables: string[];
}) {
  return (
    <div className="flex flex-col p-6 sm:p-7">
      <div className="flex items-start gap-3">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600"
        >
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-lg font-semibold tracking-[-0.03em] text-[#071426] sm:text-xl">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
        </div>
      </div>
      <DeliverablesList items={deliverables} />
    </div>
  );
}

export function Solutions() {
  const featured = services[0];
  const cards = services.slice(1);

  return (
    <section
      id="solucoes"
      className="bg-[#f8fafc] py-20 text-[#071426] lg:py-28"
    >
      <Container>
        <FadeIn>
          <p className="technical-label text-[10px] text-blue-600">Serviços</p>
          <h2
            className="mt-4 max-w-2xl font-[family-name:'Space_Grotesk_Variable'] font-semibold tracking-[-0.035em]"
            style={{
              fontSize: "clamp(1.65rem, 2vw + 1rem, 2.5rem)",
              lineHeight: 1.15,
            }}
          >
            O que desenvolvemos
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-[15px]">
            Da landing page ao sistema completo — cada entrega pensada para o
            seu negócio, não para um template genérico.
          </p>
        </FadeIn>

        <div className="mt-12 space-y-5">
          <FadeIn delay={0.04}>
            <article className="group min-w-0 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_12px_36px_rgba(15,40,90,0.04)] transition-all duration-300 hover:border-blue-200 hover:shadow-[0_18px_48px_rgba(15,40,90,0.07)] lg:grid lg:grid-cols-2 lg:rounded-3xl">
              <div className="flex min-w-0 items-center justify-center bg-[#f8fafc] px-4 py-8 sm:px-5 lg:min-h-0 lg:py-10">
                <ServiceVisual
                  image={featured.image}
                  alt={featured.alt}
                  className="w-full max-w-[min(100%,300px)] transition-transform duration-500 group-hover:scale-[1.015] sm:max-w-sm lg:max-w-md"
                />
              </div>
              <div className="min-w-0 border-t border-slate-200/80 lg:border-l lg:border-t-0">
                <ServiceBody
                  icon={featured.icon}
                  title={featured.title}
                  description={featured.description}
                  deliverables={featured.deliverables}
                />
              </div>
            </article>
          </FadeIn>

          <StaggerContainer
            className="grid gap-5 md:grid-cols-2"
            staggerDelay={0.08}
          >
            {cards.map((service) => (
              <StaggerItem key={service.title}>
                <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_12px_36px_rgba(15,40,90,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_18px_48px_rgba(15,40,90,0.07)] lg:rounded-3xl">
                  <div className="flex min-w-0 items-center justify-center bg-[#f8fafc] px-4 py-6 sm:px-5">
                    <ServiceVisual
                      image={service.image}
                      imageMobile={service.imageMobile}
                      alt={service.alt}
                      className="w-full max-w-[200px] transition-transform duration-500 group-hover:scale-[1.015] sm:max-w-xs"
                    />
                  </div>
                  <div className="border-t border-slate-200/80">
                    <ServiceBody
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      deliverables={service.deliverables}
                    />
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
