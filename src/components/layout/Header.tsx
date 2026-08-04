"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#solucoes", label: "Serviços" },
  { href: "#trampofeito", label: "Trabalhos" },
  { href: "#como-funciona", label: "Processo" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-colors duration-200",
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 shadow-[0_8px_32px_rgba(15,40,90,0.06)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container
        as="div"
        className="flex h-[4.5rem] items-center justify-between lg:h-[4.75rem]"
      >
        <Link
          href="/"
          className="relative z-50 flex items-center gap-2.5"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src="/assets/logo.png"
            alt="RafferTec"
            width={632}
            height={591}
            className="h-9 w-auto"
            priority
          />
          <span className="font-[family-name:'Space_Grotesk_Variable'] text-lg font-semibold tracking-[-0.03em] text-[#071426]">
            RafferTec
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 transition-colors hover:text-[#071426]"
            >
              {link.label}
            </Link>
          ))}
          <Button href="#oferta" size="sm" className="button-sheen rounded-full">
            Pedir uma proposta
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Button>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          <div className="flex w-5 flex-col gap-1.5">
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-full bg-[#071426]"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-full bg-[#071426]"
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              className="block h-0.5 w-full bg-[#071426]"
            />
          </div>
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="flex h-full flex-col items-start justify-center gap-6 px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-[family-name:'Space_Grotesk_Variable'] text-2xl font-semibold text-[#071426]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-4"
              >
                <Button
                  href="#oferta"
                  size="lg"
                  onClick={() => setMobileOpen(false)}
                >
                  Pedir uma proposta
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
