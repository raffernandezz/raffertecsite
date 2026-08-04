"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { buildProposalMailtoUrl, buildProposalWhatsAppUrl } from "@/lib/utils";

interface FormData {
  name: string;
  whatsapp: string;
  email: string;
  service: string;
  message: string;
}

const emptyForm: FormData = {
  name: "",
  whatsapp: "",
  email: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    if (error) setError("");
    if (success) setSuccess("");
  }

  function validate() {
    if (!form.name.trim()) {
      setError("Informe seu nome.");
      return false;
    }
    if (!form.whatsapp.trim()) {
      setError("Informe um WhatsApp para contato.");
      return false;
    }
    if (!form.message.trim()) {
      setError("Conte brevemente o que você precisa construir.");
      return false;
    }
    return true;
  }

  function handleWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSuccess("Abrindo o WhatsApp com sua mensagem…");
    window.open(buildProposalWhatsAppUrl(form), "_blank", "noopener,noreferrer");
  }

  function handleEmail() {
    if (!validate()) return;
    setSuccess("Preparando o e-mail com os dados do projeto…");
    window.location.href = buildProposalMailtoUrl(form);
  }

  const input =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#071426] outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10";

  return (
    <div className="premium-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-9">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl"
      />
      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600">
          <Send className="h-5 w-5" />
        </div>
        <h3 className="mt-6 font-[family-name:'Space_Grotesk_Variable'] text-2xl font-semibold tracking-[-0.035em] text-[#071426] sm:text-3xl">
          Vamos tirar sua ideia do papel?
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Conte o contexto. Respondemos com os próximos passos, sem compromisso.
        </p>

        <form className="mt-7 space-y-4" onSubmit={handleWhatsApp}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-xs font-medium text-slate-600">
              Seu nome
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Como podemos chamar você?"
                className={`${input} mt-2`}
              />
            </label>
            <label className="text-xs font-medium text-slate-600">
              WhatsApp
              <input
                name="whatsapp"
                value={form.whatsapp}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                className={`${input} mt-2`}
              />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-xs font-medium text-slate-600">
              E-mail <span className="text-slate-400">(opcional)</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="voce@empresa.com"
                className={`${input} mt-2`}
              />
            </label>
            <label className="text-xs font-medium text-slate-600">
              Tipo de projeto
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={`${input} mt-2`}
              >
                <option value="">Selecione</option>
                <option>Site institucional</option>
                <option>Landing page</option>
                <option>Aplicativo mobile</option>
                <option>Sistema web</option>
                <option>Automação ou integração</option>
                <option>Ainda não sei</option>
              </select>
            </label>
          </div>
          <label className="block text-xs font-medium text-slate-600">
            O que você precisa?
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Objetivo, problema, prazo ou qualquer informação que ajude..."
              className={`${input} mt-2 resize-none`}
            />
          </label>

          {error && (
            <p
              className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              role="alert"
            >
              {error}
            </p>
          )}
          {success && (
            <p
              className="flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
              role="status"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              {success}
            </p>
          )}

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button type="submit" size="lg" className="sm:flex-1">
              <MessageCircle className="h-4 w-4" />
              Enviar pelo WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="sm:flex-1"
              onClick={handleEmail}
            >
              <Mail className="h-4 w-4" />
              Enviar por e-mail
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
