import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, MessageCircle, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { BRAND } from "../lib/constants";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const MODS = [
  { v: "surfskate", l: "SURFSKATE" },
  { v: "surf", l: "SURF" },
  { v: "jiujitsu", l: "JIU-JITSU" },
  { v: "todos", l: "TODOS" },
];

export const Inscricao = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    modality: "surfskate",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Preenche nome, email e telefone, crew.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, form);
      toast.success("Inscrição recebida. A crew entra em contato.");
      setForm({ name: "", email: "", phone: "", modality: "surfskate", message: "" });
    } catch (err) {
      toast.error("Erro ao enviar. Tenta de novo ou chama no WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="inscricao"
      data-testid="inscricao-section"
      className="bg-black text-white py-24 md:py-32 px-4 md:px-12"
    >
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left: copy + direct contacts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <p className="text-[11px] tracking-[0.4em] uppercase text-white/60 mb-4">
            (05) — ENTRA NA CREW
          </p>
          <h2
            data-testid="inscricao-title"
            className="font-black uppercase tracking-[-0.03em] leading-[0.9] text-5xl md:text-6xl lg:text-7xl"
          >
            BORA
            <br />
            TREINAR?
          </h2>
          <p className="mt-6 text-xs md:text-sm tracking-[0.18em] uppercase text-white/65 max-w-md">
            Deixa teu contato ou chama direto. A gente responde rápido —
            é assim que a crew funciona.
          </p>

          <div className="mt-12 space-y-3">
            <a
              data-testid="contact-whatsapp"
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-white/20 hover:border-white px-5 py-4 group transition-colors"
            >
              <span className="flex items-center gap-3 text-sm tracking-[0.22em] uppercase">
                <MessageCircle size={18} /> WHATSAPP DIRETO
              </span>
              <ArrowUpRight
                size={18}
                className="opacity-60 group-hover:opacity-100 group-hover:rotate-12 transition-all"
              />
            </a>
            <a
              data-testid="contact-instagram"
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-white/20 hover:border-white px-5 py-4 group transition-colors"
            >
              <span className="flex items-center gap-3 text-sm tracking-[0.22em] uppercase">
                <Instagram size={18} /> {BRAND.instagramHandle}
              </span>
              <ArrowUpRight
                size={18}
                className="opacity-60 group-hover:opacity-100 group-hover:rotate-12 transition-all"
              />
            </a>
            <a
              data-testid="contact-email"
              href={`mailto:${BRAND.email}`}
              className="flex items-center justify-between border border-white/20 hover:border-white px-5 py-4 group transition-colors"
            >
              <span className="flex items-center gap-3 text-sm tracking-[0.22em] uppercase">
                <Mail size={18} /> {BRAND.email}
              </span>
              <ArrowUpRight
                size={18}
                className="opacity-60 group-hover:opacity-100 group-hover:rotate-12 transition-all"
              />
            </a>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.form
          data-testid="inscricao-form"
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-7 lg:pl-12 lg:border-l lg:border-white/15"
        >
          <p className="text-[11px] tracking-[0.4em] uppercase text-white/60 mb-8">
            FICHA DE INSCRIÇÃO
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            <div className="md:col-span-2">
              <label className="text-[10px] tracking-[0.3em] uppercase text-white/50">
                NOME COMPLETO *
              </label>
              <input
                data-testid="form-input-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Como te chamam?"
                className="pc-input"
                required
              />
            </div>

            <div>
              <label className="text-[10px] tracking-[0.3em] uppercase text-white/50">
                EMAIL *
              </label>
              <input
                data-testid="form-input-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="voce@email.com"
                className="pc-input"
                required
              />
            </div>

            <div>
              <label className="text-[10px] tracking-[0.3em] uppercase text-white/50">
                TELEFONE / WHATSAPP *
              </label>
              <input
                data-testid="form-input-phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="(11) 9 0000-0000"
                className="pc-input"
                required
              />
            </div>

            <div className="md:col-span-2 mt-4">
              <label className="text-[10px] tracking-[0.3em] uppercase text-white/50 block mb-3">
                MODALIDADE DE INTERESSE
              </label>
              <div className="flex flex-wrap gap-2">
                {MODS.map((m) => (
                  <button
                    type="button"
                    key={m.v}
                    data-testid={`form-modality-${m.v}`}
                    onClick={() => setForm((s) => ({ ...s, modality: m.v }))}
                    className={`text-[11px] tracking-[0.22em] uppercase px-4 py-2 border transition-all ${
                      form.modality === m.v
                        ? "bg-white text-black border-white"
                        : "bg-transparent text-white border-white/30 hover:border-white"
                    }`}
                  >
                    {m.l}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 mt-2">
              <label className="text-[10px] tracking-[0.3em] uppercase text-white/50">
                MENSAGEM (OPCIONAL)
              </label>
              <textarea
                data-testid="form-input-message"
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                placeholder="Conta um pouco do que tu busca..."
                className="pc-input resize-none"
              />
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/40 max-w-xs">
              * Campos obrigatórios. A gente nunca compartilha seus dados.
            </p>
            <button
              type="submit"
              data-testid="form-submit-btn"
              disabled={loading}
              className="pc-btn pc-btn--inverted disabled:opacity-50"
            >
              <span className="flex items-center gap-3">
                {loading ? "ENVIANDO..." : "ENTRAR NA CREW"}{" "}
                <Send size={16} />
              </span>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};
