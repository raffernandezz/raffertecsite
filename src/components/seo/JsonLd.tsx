export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://raffertec.com.br/#organization",
        name: "RafferTec",
        url: "https://raffertec.com.br",
        logo: "https://raffertec.com.br/assets/logo.png",
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
        "@id": "https://raffertec.com.br/#website",
        url: "https://raffertec.com.br",
        name: "RafferTec",
        publisher: { "@id": "https://raffertec.com.br/#organization" },
        inLanguage: "pt-BR",
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://raffertec.com.br/#service",
        name: "RafferTec — Desenvolvimento digital",
        url: "https://raffertec.com.br",
        image: "https://raffertec.com.br/assets/logo.png",
        areaServed: "BR",
        priceRange: "$$",
        serviceType: [
          "Desenvolvimento de sites",
          "Aplicativos mobile",
          "Sistemas web",
          "Automações",
        ],
        provider: { "@id": "https://raffertec.com.br/#organization" },
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
