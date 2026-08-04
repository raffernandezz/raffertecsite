import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const WHATSAPP_URL =
  "https://wa.me/5511988949040?text=Olá!%20Conheci%20a%20RafferTec%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%20digital.";

export const WHATSAPP_DESCRIBE_PROJECT_URL =
  "https://wa.me/5511988949040?text=Olá!%20Gostaria%20de%20descrever%20meu%20projeto%20com%20a%20RafferTec.";

export const WHATSAPP_APP_PROJECT_URL =
  "https://wa.me/5511988949040?text=Olá!%20Vi%20o%20TrampoFeito%20e%20gostaria%20de%20desenvolver%20um%20aplicativo.";

export const WHATSAPP_PROPOSAL_URL =
  "https://wa.me/5511988949040?text=Olá!%20Gostaria%20de%20solicitar%20uma%20proposta%20para%20um%20projeto%20digital.";

export const CONTACT_EMAIL = "raffertecnologia@gmail.com";

export const CONTACT_EMAIL_URL = `mailto:${CONTACT_EMAIL}`;

export const TRAMPOFEITO_APP_STORE =
  "https://apps.apple.com/br/app/trampofeito/id6759311576";

export const TRAMPOFEITO_GOOGLE_PLAY =
  "https://play.google.com/store/apps/details?id=com.trampofeito.app&hl=pt_BR";

/** URL do site ou página do projeto TrampoFeito (opcional) */
export const TRAMPOFEITO_URL = "";

export const INSTAGRAM_URL = "https://instagram.com/raffertec";

const WHATSAPP_NUMBER = "5511988949040";

export function buildProposalWhatsAppUrl(data: {
  name: string;
  whatsapp: string;
  email: string;
  message: string;
  service?: string;
}) {
  const text = [
    "Olá! Gostaria de solicitar uma proposta.",
    "",
    `Nome: ${data.name}`,
    `WhatsApp: ${data.whatsapp}`,
    `E-mail: ${data.email}`,
    data.service ? `Tipo de projeto: ${data.service}` : "",
    "",
    `Projeto: ${data.message}`,
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function buildProposalMailtoUrl(data: {
  name: string;
  whatsapp: string;
  email: string;
  message: string;
  service?: string;
}) {
  const subject = encodeURIComponent("Solicitação de proposta — RafferTec");
  const body = encodeURIComponent(
    [
      "Olá! Gostaria de solicitar uma proposta.",
      "",
      `Nome: ${data.name}`,
      `WhatsApp: ${data.whatsapp}`,
      `E-mail: ${data.email}`,
      data.service ? `Tipo de projeto: ${data.service}` : "",
      "",
      `Projeto: ${data.message}`,
    ].join("\n")
  );

  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}
