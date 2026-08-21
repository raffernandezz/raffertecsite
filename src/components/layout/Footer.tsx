import Image from "next/image";
import Link from "next/link";
import { Camera, Mail, MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  WHATSAPP_URL,
  CONTACT_EMAIL,
  CONTACT_EMAIL_URL,
  INSTAGRAM_URL,
} from "@/lib/utils";

const nav = [
  { href: "#possibilidades", label: "Trabalhos" },
  { href: "#solucoes", label: "Serviços" },
  { href: "#como-funciona", label: "Processo" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
  { href: "#oferta", label: "Proposta" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white text-[#071426]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
      />
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_.6fr_1fr] lg:gap-12 lg:py-16">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-[#f8fafc]">
                <Image
                  src="/assets/logo.png"
                  alt="RafferTec"
                  width={632}
                  height={591}
                  className="h-8 w-auto"
                />
              </span>
              <span>
                <strong className="block font-[family-name:'Space_Grotesk_Variable'] text-lg">
                  RafferTec
                </strong>
                <small className="text-[10px] tracking-[0.15em] text-slate-500 uppercase">
                  Tecnologia sob medida
                </small>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-600">
              Sites, aplicativos, sistemas e automações construídos com
              estratégia, identidade e engenharia.
            </p>
            <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="h-4 w-4 shrink-0 text-blue-600" />
              Empresa 100% remota · Atendimento em todo o Brasil
            </p>
          </div>

          <div>
            <p className="technical-label text-[9px] text-slate-500">
              Navegação
            </p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-sm text-sm text-slate-600 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="technical-label text-[9px] text-slate-500">Contato</p>
            <div className="mt-5 space-y-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-sm text-sm text-slate-600 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-blue-600" />
                WhatsApp
              </a>
              <a
                href={CONTACT_EMAIL_URL}
                className="flex items-center gap-3 rounded-sm text-sm text-slate-600 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                <Mail className="h-4 w-4 shrink-0 text-blue-600" />
                {CONTACT_EMAIL}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-sm text-sm text-slate-600 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                <Camera className="h-4 w-4 shrink-0 text-blue-600" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} RafferTec. Todos os direitos
            reservados.
          </p>
          <p>Desenvolvimento profissional e personalizado.</p>
        </div>
      </Container>
    </footer>
  );
}
