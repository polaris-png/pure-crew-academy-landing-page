import React, { useState } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Instagram, MessageCircle, Mail, X } from "lucide-react";
import { toast } from "sonner";
import { BRAND } from "../lib/constants";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const MODS = [
  { v: "surfskate", l: "Surfskate" },
  { v: "surf", l: "Surf" },
  { v: "jiujitsu", l: "Jiu-Jitsu" },
  { v: "todos", l: "Todos" },
];

export const Inscricao = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    modality: "surfskate",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Preenche nome, email e telefone.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, form);
      toast.success("Inscrição recebida. A crew entra em contacto em breve.");
      setForm({ name: "", email: "", phone: "", modality: "surfskate", message: "" });
      setOpen(false);
    } catch {
      toast.error("Erro ao enviar. Tenta novamente ou contacta-nos pelo WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="inscricao"
      data-testid="inscricao-section"
      className="py-16 md:py-24 px-5 md:px-8"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10 md:mb-14 max-w-xl mx-auto">
          <p className="text-xs font-medium text-neutral-500 mb-3 tracking-wide">
            INSCRIÇÃO
          </p>
          <h2
            data-testid="inscricao-title"
            className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900"
          >
            Ready to improve?
          </h2>
          <p className="mt-3 text-neutral-600">
            Inscreve-te no formulário ou pede mais informações pelo WhatsApp — respondemos em poucas horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Form area */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait" initial={false}>
              {!open ? (
                <motion.div
                  key="closed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="pc-card p-8 md:p-10 flex flex-col items-start"
                  data-testid="inscricao-collapsed"
                >
                  <p className="text-xs font-medium text-neutral-500 mb-2 tracking-wide">
                    INSCRIÇÃO
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
                    Marca a tua sessão
                  </h3>
                  <p className="mt-2.5 text-neutral-600 max-w-md">
                    Preenche o formulário e a crew entra em contacto.
                  </p>
                  <button
                    data-testid="inscricao-open-btn"
                    onClick={() => setOpen(true)}
                    className="pc-btn pc-btn-solid mt-7"
                  >
                    Quero inscrever-me
                    <ArrowRight size={16} />
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="open"
                  data-testid="inscricao-form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.35 }}
                  className="pc-card p-6 md:p-8 relative"
                >
                  <button
                    type="button"
                    data-testid="inscricao-close-btn"
                    onClick={() => setOpen(false)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
                    aria-label="Fechar formulário"
                  >
                    <X size={16} />
                  </button>

                  <div className="space-y-4 mt-2">
                    <div>
                      <label className="pc-label" htmlFor="lead-name">
                        Nome completo
                      </label>
                      <input
                        id="lead-name"
                        data-testid="form-input-name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Como te chamas?"
                        className="pc-field"
                        required
                        autoFocus
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="pc-label" htmlFor="lead-email">
                          Email
                        </label>
                        <input
                          id="lead-email"
                          data-testid="form-input-email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          className="pc-field"
                          required
                        />
                      </div>
                      <div>
                        <label className="pc-label" htmlFor="lead-phone">
                          Telefone / WhatsApp
                        </label>
                        <input
                          id="lead-phone"
                          data-testid="form-input-phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+351 ..."
                          className="pc-field"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="pc-label">Modalidade de interesse</label>
                      <div className="flex flex-wrap gap-2">
                        {MODS.map((m) => (
                          <button
                            type="button"
                            key={m.v}
                            data-testid={`form-modality-${m.v}`}
                            onClick={() => setForm((s) => ({ ...s, modality: m.v }))}
                            className={`text-sm font-medium px-3.5 py-2 rounded-lg border transition-colors ${
                              form.modality === m.v
                                ? "bg-neutral-900 text-white border-neutral-900"
                                : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400"
                            }`}
                          >
                            {m.l}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="pc-label" htmlFor="lead-msg">
                        Mensagem{" "}
                        <span className="text-neutral-400 font-normal">(opcional)</span>
                      </label>
                      <textarea
                        id="lead-msg"
                        data-testid="form-input-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Conta-nos um pouco do que procuras..."
                        className="pc-field"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-end flex-wrap gap-3">
                    <button
                      type="submit"
                      data-testid="form-submit-btn"
                      disabled={loading}
                      className="pc-btn pc-btn-solid disabled:opacity-50"
                    >
                      {loading ? "A enviar..." : "Enviar inscrição"}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Direct contacts */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-3"
          >
            <a
              data-testid="contact-whatsapp"
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="pc-card p-5 flex items-center justify-between group"
            >
              <span className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center">
                  <MessageCircle size={18} strokeWidth={1.5} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-neutral-900">
                    WhatsApp direto
                  </span>
                  <span className="block text-xs text-neutral-500">
                    +351 967 282 755
                  </span>
                </span>
              </span>
              <ArrowRight
                size={16}
                className="text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 transition-all"
              />
            </a>

            <a
              data-testid="contact-instagram"
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="pc-card p-5 flex items-center justify-between group"
            >
              <span className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center">
                  <Instagram size={18} strokeWidth={1.5} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-neutral-900">
                    Instagram
                  </span>
                  <span className="block text-xs text-neutral-500">
                    {BRAND.instagramHandle}
                  </span>
                </span>
              </span>
              <ArrowRight
                size={16}
                className="text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 transition-all"
              />
            </a>

            <a
              data-testid="contact-email"
              href={`mailto:${BRAND.email}`}
              className="pc-card p-5 flex items-center justify-between group"
            >
              <span className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center">
                  <Mail size={18} strokeWidth={1.5} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-neutral-900">
                    Email
                  </span>
                  <span className="block text-xs text-neutral-500">
                    {BRAND.email}
                  </span>
                </span>
              </span>
              <ArrowRight
                size={16}
                className="text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 transition-all"
              />
            </a>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};
