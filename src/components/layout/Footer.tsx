import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  WHATSAPP_URL,
  CONTACT_EMAIL,
  CONTACT_EMAIL_URL,
  RAFAEL_LINKEDIN_URL,
  RAFAEL_GITHUB_URL,
  INSTAGRAM_URL,
} from "@/lib/utils";

const navLinks = [
  { href: "#trampofeito", label: "Projetos" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
];

const socialLinks = [
  { href: INSTAGRAM_URL, label: "Instagram", external: true },
  { href: RAFAEL_LINKEDIN_URL, label: "LinkedIn", external: true },
  { href: RAFAEL_GITHUB_URL, label: "GitHub", external: true },
  { href: WHATSAPP_URL, label: "WhatsApp", external: true },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-14">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/assets/logo.png"
                alt="RafferTec"
                width={632}
                height={591}
                className="h-9 w-auto sm:h-10"
              />
              <span className="text-base font-semibold text-foreground">
                RafferTec
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Sites, aplicativos, sistemas e automações.
            </p>
            <p className="mt-2 text-sm text-muted">
              Diadema - SP | Atendimento para todo o Brasil
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">Navegação</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">Contato</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={CONTACT_EMAIL_URL}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              {socialLinks.map((link) =>
                link.href ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <span className="text-sm text-muted/50">{link.label}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted sm:text-left">
            &copy; {new Date().getFullYear()} RafferTec. Todos os direitos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
