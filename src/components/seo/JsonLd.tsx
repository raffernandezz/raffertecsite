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
      {
        "@type": "FAQPage",
        "@id": "https://raffertec.com.br/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Como é definido o valor de um projeto?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "O investimento considera escopo, quantidade de telas, integrações, conteúdo e complexidade técnica. Depois da conversa inicial, enviamos uma proposta clara com entregas, prazo e condições.",
            },
          },
          {
            "@type": "Question",
            name: "A RafferTec faz apenas sites e landing pages?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Não. Desenvolvemos sites institucionais, aplicativos Android e iOS, sistemas web, painéis administrativos, automações e integrações entre plataformas.",
            },
          },
          {
            "@type": "Question",
            name: "Em quanto tempo o projeto fica pronto?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "O prazo depende do escopo e da disponibilidade dos materiais. Um site objetivo pode levar poucas semanas; produtos e sistemas mais complexos são organizados em etapas.",
            },
          },
          {
            "@type": "Question",
            name: "Vou conseguir acompanhar o desenvolvimento?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim. Você recebe atualizações, prévias e participa das decisões importantes. O processo foi desenhado para evitar surpresas na entrega.",
            },
          },
          {
            "@type": "Question",
            name: "Vocês ajudam com conteúdo e identidade visual?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ajudamos a organizar a mensagem, a hierarquia do conteúdo e a direção visual. Quando o projeto exige produção especializada adicional, alinhamos isso antes de iniciar.",
            },
          },
          {
            "@type": "Question",
            name: "Existe suporte depois da publicação?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim. A entrega inclui orientação e suporte inicial. Manutenção contínua, evolução e novas funcionalidades podem ser contratadas conforme a necessidade.",
            },
          },
        ],
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
