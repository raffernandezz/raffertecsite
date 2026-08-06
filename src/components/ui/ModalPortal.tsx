"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/** Renderiza filhos em document.body — evita que transform de ancestrais quebre modais fixed */
export function ModalPortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(children, document.body);
}
