import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Plus } from "lucide-react";
import { ICONS } from "../lib/constants";

const PILLARS = [
  "Instrutores certificados",
  "Treino com base científica",
  "Metodologia guiada",
  "Programa personalizado",
];

const MAIN = [
  {
    iconUrl: ICONS.surfskate,
    eyebrow: "PURE Freedom",
    title: "Surfskate",
    levels: "Iniciante · Intermédio · Avançado",
    tags: ["Coaching privado", "Group coaching", "Sessões em grupo", "Vídeo-análise"],
    note: "Sessões em grupo aos sábados à tarde · Casa da Música",
  },
  {
    iconUrl: ICONS.surf,
    eyebrow: "PURE Experience",
    title: "Surf",
    levels: "Iniciante & Intermédio",
    tags: ["Coaching privado", "Group coaching", "Vídeo-análise"],
    note: "Sessões agendadas conforme as condições do mar",
  },
  {
    iconUrl: ICONS.bjj,
    eyebrow: "PURE Technic",
    title: "Jiu-Jitsu",
    levels: "Faixas branca & azul",
    tags: ["1-para-1", "1-para-2", "Vídeo-análise"],
    note: "Em parceria com ArtSuave Jiu-Jitsu",
  },
];

const COMPLEMENTARY = {
  iconUrl: ICONS.puzzle,
  eyebrow: "PURE Upgrade",
  title: "Treino específico",
  pillars: ["Velocidade", "Força", "Flexibilidade", "Mobilidade", "Resistência"],
  note: "Pack extra · adicionar a qualquer programa",
};

export const Modalidades = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="modalidades"
      data-testid="modalidades-section"
      className="py-16 md:py-24 px-5 md:px-8"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-12 max-w-2xl">
          <p className="text-xs font-medium text-neutral-500 mb-3 tracking-wide">
            SERVIÇOS
          </p>
          <h2
            data-testid="modalidades-title"
            className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900"
          >
            Surfskate · Surf · BJJ · Treino específico
          </h2>
          <p className="mt-3 text-neutral-600">
            Aulas todos os dias, para todas as idades e níveis.
          </p>
        </div>

        {/* Pillars strip */}
        <div
          data-testid="pillars-strip"
          className="pc-card-flat px-5 py-4 mb-10 md:mb-12 flex flex-wrap items-center gap-x-6 gap-y-3 justify-center md:justify-between"
        >
          {PILLARS.map((p) => (
            <div
              key={p}
              className="flex items-center gap-2 text-xs md:text-[13px] text-neutral-700"
            >
              <CheckCircle2
                size={15}
                strokeWidth={1.6}
                className="text-neutral-900 shrink-0"
              />
              <span className="font-medium">{p}</span>
            </div>
          ))}
        </div>

        {/* Main 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {MAIN.map((it, idx) => {
            return (
              <motion.article
                key={it.title}
                data-testid={`modalidade-card-${it.title.toLowerCase()}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="pc-card p-7 flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <img
                      src={it.iconUrl}
                      alt={it.title}
                      className="w-full h-full object-contain"
                      draggable={false}
                    />
                  </div>
                  <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-neutral-400">
                    {it.eyebrow}
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-1">
                  {it.title}
                </h3>
                <p className="text-xs font-medium tracking-wide text-neutral-500 mb-5">
                  {it.levels}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {it.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-neutral-500 italic mb-6 leading-relaxed">
                  {it.note}
                </p>

                <button
                  onClick={() => scrollTo("inscricao")}
                  data-testid={`modalidade-cta-${it.title.toLowerCase()}`}
                  className="pc-btn mt-auto self-start"
                  style={{ padding: "0.55rem 1.1rem", fontSize: "0.8rem" }}
                >
                  Saber mais
                  <ArrowRight size={14} />
                </button>
              </motion.article>
            );
          })}
        </div>

        {/* Complementary wide card — "extra pack" */}
        <motion.article
          data-testid="modalidade-card-complementary"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="pc-card mt-5 p-7 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start"
        >
          <div className="md:col-span-1 flex md:block">
            <div className="w-20 h-20 flex items-center justify-center">
              <img
                src={COMPLEMENTARY.iconUrl}
                alt={COMPLEMENTARY.title}
                className="w-full h-full object-contain"
                draggable={false}
              />
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-neutral-400">
                {COMPLEMENTARY.eyebrow}
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-[0.12em] uppercase px-2 py-1 rounded-full bg-neutral-900 text-white">
                <Plus size={11} strokeWidth={2.4} />
                PACK EXTRA
              </span>
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-neutral-900 mt-2 mb-1">
              {COMPLEMENTARY.title}
            </h3>
            <p className="text-xs text-neutral-500 italic">
              {COMPLEMENTARY.note}
            </p>
          </div>

          <div className="md:col-span-4 flex md:flex-col md:items-end gap-3 flex-wrap">
            <div className="flex flex-wrap gap-1.5 md:justify-end">
              {COMPLEMENTARY.pillars.map((p) => (
                <span
                  key={p}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700"
                >
                  {p}
                </span>
              ))}
            </div>
            <button
              onClick={() => scrollTo("inscricao")}
              data-testid="modalidade-cta-complementary"
              className="pc-btn"
              style={{ padding: "0.55rem 1.1rem", fontSize: "0.8rem" }}
            >
              Saber mais
              <ArrowRight size={14} />
            </button>
          </div>
        </motion.article>
      </div>
    </section>
  );
};
