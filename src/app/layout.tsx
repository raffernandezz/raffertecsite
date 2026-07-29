import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raffertec.com"),
  title: "RafferTec | Landing Pages que Convertem",
  description:
    "Criamos landing pages profissionais e desenvolvemos aplicativos, sistemas web, automações e soluções digitais para pequenos e médios negócios.",
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
    title: "RafferTec | Landing Pages que Convertem",
    description:
      "Landing pages profissionais para pequenos e médios negócios. Design premium, resultado real.",
    images: ["/assets/logo.png"],
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
