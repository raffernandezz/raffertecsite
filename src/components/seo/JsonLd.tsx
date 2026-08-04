export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://raffertec.com/#organization",
        name: "RafferTec",
        url: "https://raffertec.com",
        logo: "https://raffertec.com/assets/logo.png",
        description:
          "Sites, aplicativos, sistemas e automações desenvolvidos com estratégia e engenharia.",
        email: "raffertecnologia@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressCountry: "BR",
        },
        areaServed: {
          "@type": "Country",
          name: "Brasil",
        },
        sameAs: ["https://instagram.com/raffertec"],
      },
      {
        "@type": "WebSite",
        "@id": "https://raffertec.com/#website",
        url: "https://raffertec.com",
        name: "RafferTec",
        publisher: { "@id": "https://raffertec.com/#organization" },
        inLanguage: "pt-BR",
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://raffertec.com/#service",
        name: "RafferTec — Desenvolvimento digital",
        url: "https://raffertec.com",
        image: "https://raffertec.com/assets/logo.png",
        areaServed: "BR",
        priceRange: "$$",
        serviceType: [
          "Desenvolvimento de sites",
          "Aplicativos mobile",
          "Sistemas web",
          "Automações",
        ],
        provider: { "@id": "https://raffertec.com/#organization" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
