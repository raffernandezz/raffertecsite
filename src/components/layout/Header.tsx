"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/utils";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#trampofeito", label: "Projetos" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
];

function isOverDarkSection() {
  const headerHeight = 84;
  const darkSections = document.querySelectorAll("[data-dark-section]");

  return Array.from(darkSections).some((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top < headerHeight && rect.bottom > 0;
  });
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isLightHeader = scrolled || !overDark;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setOverDark(isOverDarkSection());
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
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
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        isLightHeader
          ? scrolled
            ? "border-b border-border/60 bg-white/80 backdrop-blur-xl"
            : "bg-transparent"
          : "border-b border-white/10 bg-[#0f0f0f]/80 backdrop-blur-xl"
      )}
    >
      <Container as="div" className="flex h-[4.75rem] items-center justify-between lg:h-[5.25rem]">
        <Link href="/" className="relative z-50 flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt="RafferTec"
            width={632}
            height={591}
            className="h-11 w-auto sm:h-12 lg:h-14"
            priority
          />
          <span
            className={cn(
              "text-lg font-semibold tracking-tight sm:text-xl lg:text-2xl",
              isLightHeader ? "text-foreground" : "text-white"
            )}
          >
            RafferTec
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors",
                isLightHeader
                  ? "text-muted hover:text-foreground"
                  : "text-gray-300 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            href={WHATSAPP_URL}
            size="sm"
            external
            className={
              isLightHeader
                ? undefined
                : "bg-white text-foreground hover:bg-gray-100"
            }
          >
            Solicitar orçamento
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
              className={cn(
                "block h-0.5 w-full",
                isLightHeader ? "bg-foreground" : "bg-white"
              )}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className={cn(
                "block h-0.5 w-full",
                isLightHeader ? "bg-foreground" : "bg-white"
              )}
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              className={cn(
                "block h-0.5 w-full",
                isLightHeader ? "bg-foreground" : "bg-white"
              )}
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-medium text-foreground"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button
                  href={WHATSAPP_URL}
                  size="lg"
                  external
                  onClick={() => setMobileOpen(false)}
                >
                  Solicitar orçamento
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
