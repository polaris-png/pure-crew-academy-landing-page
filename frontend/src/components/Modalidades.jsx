import React from "react";
import { motion } from "framer-motion";
import { Waves, Activity, Swords, ArrowRight } from "lucide-react";

const ITEMS = [
  {
    Icon: Activity,
    title: "Surfskate",
    body:
      "Carve, base e fluidez. Trabalhamos a leitura de transição e a ligação ao surf — a base que prepara o teu corpo para a água.",
    tag: "Foco da casa",
    featured: true,
  },
  {
    Icon: Waves,
    title: "Surf",
    body:
      "Da pré-paddle à manobra. Aulas no mar com vídeo-análise, leitura de ondas e progressão real, em grupos pequenos.",
    tag: "Praia de Matosinhos",
  },
  {
    Icon: Swords,
    title: "Jiu-Jitsu",
    body:
      "Arte suave. Técnica que sobra, ego que falta. Fundamentos sólidos, drills constantes e rolagem com a crew.",
    tag: "Casa da Música",
  },
];

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
        <div className="mb-10 md:mb-14 max-w-2xl">
          <p className="text-xs font-medium text-neutral-500 mb-3 tracking-wide">
            MODALIDADES
          </p>
          <h2
            data-testid="modalidades-title"
            className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900"
          >
            Três disciplinas. Uma só crew.
          </h2>
          <p className="mt-3 text-neutral-600">
            Escolhe a tua entrada. Treina uma, duas ou as três — a comunidade é a mesma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ITEMS.map((it, idx) => {
            const Icon = it.Icon;
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
                  <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center">
                    <Icon size={22} strokeWidth={1.5} className="text-neutral-900" />
                  </div>
                  {it.featured && (
                    <span
                      data-testid="modalidade-featured-badge"
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#c25a46]/10 text-[#c25a46]"
                    >
                      {it.tag}
                    </span>
                  )}
                  {!it.featured && (
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600">
                      {it.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-2">
                  {it.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {it.body}
                </p>

                <button
                  onClick={() => scrollTo("inscricao")}
                  data-testid={`modalidade-cta-${it.title.toLowerCase()}`}
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 hover:gap-2.5 transition-all"
                >
                  Quero saber mais
                  <ArrowRight size={14} />
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
