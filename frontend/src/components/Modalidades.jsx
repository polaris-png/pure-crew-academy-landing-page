import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { IMAGES } from "../lib/constants";

const ITEMS = [
  {
    n: "01",
    title: "SURFSKATE",
    img: IMAGES.surfskate,
    body: "Carve, base, fluidez. Prancha sob os pés, transição na cabeça. Treino que prepara você pra água sem sair do asfalto.",
    tags: ["INICIANTE", "INTERMEDIÁRIO", "AVANÇADO"],
  },
  {
    n: "02",
    title: "SURF",
    img: IMAGES.surf,
    body: "Da pré-paddle à manobra. Aulas no mar com vídeo-análise, leitura de ondas e progressão real. Sem pressa, com método.",
    tags: ["DROP", "RASGADAS", "AÉREOS"],
  },
  {
    n: "03",
    title: "JIU-JITSU",
    img: IMAGES.jiujitsu,
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
            Escolha sua entrada — ou treine as três. A crew é a mesma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/15 border border-white/15">
          {ITEMS.map((it, idx) => (
            <motion.article
              key={it.n}
              data-testid={`modalidade-card-${it.title.toLowerCase()}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className="modality-card group bg-black p-6 md:p-8 flex flex-col"
            >
              <div className="aspect-[4/5] overflow-hidden mb-6 border border-white/15">
                <img
                  src={it.img}
                  alt={it.title}
                  className="modality-img w-full h-full object-cover grayscale contrast-110"
                  draggable={false}
                />
              </div>

              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs tracking-[0.3em] uppercase text-white/50">
                  {it.n}
                </span>
                <ArrowUpRight
                  size={20}
                  className="opacity-50 group-hover:opacity-100 group-hover:rotate-12 transition-all"
                />
              </div>

              <h3 className="font-black uppercase tracking-tight leading-none text-3xl md:text-4xl mb-4">
                {it.title}
              </h3>
              <p className="text-xs md:text-sm tracking-[0.14em] uppercase leading-relaxed text-white/75 mb-6">
                {it.body}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/15">
                {it.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] tracking-[0.22em] uppercase border border-white/30 px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
