import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/space-grotesk";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://raffertec.com"),
  title: "RafferTec | Tecnologia sob medida para negócios",
  description:
    "Sites, aplicativos, sistemas e automações desenvolvidos com estratégia e engenharia. Da ideia à publicação, com acompanhamento direto.",
  keywords: [
    "landing page",
    "site profissional",
    "página de vendas",
    "site para restaurante",
    "site para clínica",
    "RafferTec",
  ],
  authors: [{ name: "RafferTec" }],
  openGraph: {
    title: "RafferTec | Tecnologia sob medida para negócios",
    description:
      "Sites, apps e sistemas com design premium e entrega real. Produto publicado nas lojas, processo transparente.",
    images: ["/assets/logo.png"],
    type: "website",
    locale: "pt_BR",
    siteName: "RafferTec",
  },
  twitter: {
    card: "summary_large_image",
    title: "RafferTec | Tecnologia sob medida para negócios",
    description:
      "Sites, apps e sistemas com entrega real. TrampoFeito publicado nas lojas.",
    images: ["/assets/logo.png"],
  },
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f8fafc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <JsonLd />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
