import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Waves, Skull, Swords } from "lucide-react";

const ITEMS = [
  {
    n: "01",
    title: "SURFSKATE",
    Icon: Skull,
    body: "Carve, base, fluidez. Prancha sob os pés, transição na cabeça. Treino que prepara você pra água sem sair do asfalto.",
    tags: ["INICIANTE", "INTERMEDIÁRIO", "AVANÇADO"],
    featured: true,
  },
  {
    n: "02",
    title: "SURF",
    Icon: Waves,
    body: "Da pré-paddle à manobra. Aulas no mar com vídeo-análise, leitura de ondas e progressão real. Sem pressa, com método.",
    tags: ["DROP", "RASGADAS", "AÉREOS"],
  },
  {
    n: "03",
    title: "JIU-JITSU",
    Icon: Swords,
    body: "Arte suave. Técnica que sobra, ego que falta. Fundamentos sólidos, drills constantes, rolagem com a crew.",
    tags: ["KIDS", "ADULTO", "COMPETIÇÃO"],
  },
];

export const Modalidades = () => {
  return (
    <section
      id="modalidades"
      data-testid="modalidades-section"
      className="bg-black text-white py-24 md:py-32 px-4 md:px-12"
    >
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-end justify-between mb-12 md:mb-20 flex-wrap gap-4">
          <div>
            <p className="text-[11px] tracking-[0.4em] uppercase mb-4 text-white/60">
              (02) — MODALIDADES
            </p>
            <h2
              data-testid="modalidades-title"
              className="font-black uppercase tracking-[-0.03em] leading-[0.9] text-5xl md:text-7xl lg:text-8xl"
            >
              TRÊS PISTAS.
              <br />
              UMA CREW.
            </h2>
          </div>
          <p className="text-xs md:text-sm tracking-[0.18em] uppercase text-white/60 max-w-sm">
            Surfskate é nossa essência. Surf e jiu-jitsu completam a crew.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/15 border border-white/15">
          {ITEMS.map((it, idx) => {
            const Icon = it.Icon;
            return (
              <motion.article
                key={it.n}
                data-testid={`modalidade-card-${it.title.toLowerCase()}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className={`modality-card group relative bg-black p-6 md:p-10 flex flex-col ${
                  it.featured ? "md:bg-white md:text-black" : ""
                }`}
              >
                {it.featured && (
                  <span
                    className="absolute top-4 right-4 text-[10px] tracking-[0.3em] uppercase bg-[#C25A46] text-white px-2 py-1"
                    data-testid="modalidade-featured-badge"
                  >
                    FOCO DA CASA
                  </span>
                )}

                <div
                  className={`flex items-start justify-between mb-8 md:mb-10 ${
                    it.featured ? "" : ""
                  }`}
                >
                  <span
                    className={`text-xs tracking-[0.3em] uppercase ${
                      it.featured ? "text-black/50" : "text-white/50"
                    }`}
                  >
                    {it.n}
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="opacity-50 group-hover:opacity-100 group-hover:rotate-12 transition-all"
                  />
                </div>

                <div
                  className={`flex items-center justify-center py-10 md:py-14 mb-6 border ${
                    it.featured
                      ? "border-black/15 bg-black/[0.03]"
                      : "border-white/15 bg-white/[0.02]"
                  }`}
                  aria-hidden
                >
                  <Icon
                    strokeWidth={1.2}
                    className={`${
                      it.featured ? "text-black" : "text-white"
                    } w-20 h-20 md:w-28 md:h-28`}
                  />
                </div>

                <h3 className="font-black uppercase tracking-[-0.02em] leading-none text-4xl md:text-5xl mb-4">
                  {it.title}
                </h3>
                <p
                  className={`text-xs md:text-sm tracking-[0.14em] uppercase leading-relaxed mb-6 ${
                    it.featured ? "text-black/75" : "text-white/75"
                  }`}
                >
                  {it.body}
                </p>

                <div
                  className={`flex flex-wrap gap-2 mt-auto pt-4 border-t ${
                    it.featured ? "border-black/15" : "border-white/15"
                  }`}
                >
                  {it.tags.map((t) => (
                    <span
                      key={t}
                      className={`text-[10px] tracking-[0.22em] uppercase border px-3 py-1 ${
                        it.featured ? "border-black/30" : "border-white/30"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
