import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, Mail, MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  WHATSAPP_URL,
  CONTACT_EMAIL,
  CONTACT_EMAIL_URL,
  INSTAGRAM_URL,
} from "@/lib/utils";

const nav = [
  { href: "#solucoes", label: "Serviços" },
  { href: "#trampofeito", label: "Trabalhos" },
  { href: "#como-funciona", label: "Processo" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white text-[#071426]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
      <Container>
        <div className="grid gap-10 border-b border-slate-200 py-16 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
          <div>
            <p className="technical-label text-[10px] text-blue-600">
              Tem algo em mente?
            </p>
            <h2 className="mt-4 max-w-2xl font-[family-name:'Space_Grotesk_Variable'] text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Vamos construir algo que sua empresa tenha orgulho de mostrar.
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <Button href={WHATSAPP_URL} external size="lg">
              Iniciar uma conversa
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_.65fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50">
                <Image
                  src="/assets/logo.png"
                  alt="RafferTec"
                  width={632}
                  height={591}
                  className="h-9 w-auto"
                />
              </span>
              <span>
                <strong className="block font-[family-name:'Space_Grotesk_Variable'] text-xl">
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
              <MapPin className="h-4 w-4 text-blue-600" />
              Empresa 100% remota · Atendimento em todo o Brasil
            </p>
          </div>
          <div>
            <p className="technical-label text-[9px] text-slate-500">
              Navegação
            </p>
            <ul className="mt-5 space-y-3">
              {nav.map((x) => (
                <li key={x.href}>
                  <Link
                    href={x.href}
                    className="text-sm text-slate-600 transition-colors hover:text-blue-700"
                  >
                    {x.label}
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
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-700"
              >
                <MessageCircle className="h-4 w-4 text-blue-600" />
                WhatsApp
              </a>
              <a
                href={CONTACT_EMAIL_URL}
                className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-700"
              >
                <Mail className="h-4 w-4 text-blue-600" />
                {CONTACT_EMAIL}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-700"
              >
                <Camera className="h-4 w-4 text-blue-600" />
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
          <p>Empresa 100% remota · Atendimento em todo o Brasil.</p>
        </div>
      </Container>
    </footer>
  );
}
