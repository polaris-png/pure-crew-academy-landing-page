import React from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const TILES = [
  { label: "SURFSKATE", sub: "FRAME 01", variant: "dark", cls: "md:col-span-5 md:row-span-2" },
  { label: "ONDA", sub: "FRAME 02", variant: "light", cls: "md:col-span-4" },
  { label: "FLOW", sub: "FRAME 03", variant: "dark", cls: "md:col-span-3" },
  { label: "TATAMI", sub: "FRAME 04", variant: "light", cls: "md:col-span-3" },
  { label: "CONCRETO", sub: "FRAME 05", variant: "dark", cls: "md:col-span-4" },
  { label: "A CREW", sub: "FRAME 06", variant: "dark", cls: "md:col-span-7" },
];

export const Galeria = () => {
  return (
    <section
      id="galeria"
      data-testid="galeria-section"
      className="bg-white text-black py-24 md:py-32 px-4 md:px-12"
    >
      <div className="max-w-[1500px] mx-auto">
        <div className="mb-12 md:mb-16 flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-[11px] tracking-[0.4em] uppercase mb-4 text-black/60">
              (03) — REGISTRO
            </p>
            <h2
              data-testid="galeria-title"
              className="font-black uppercase tracking-[-0.03em] leading-[0.9] text-5xl md:text-7xl"
            >
              A CREW EM
              <br />
              MOVIMENTO.
            </h2>
          </div>
          <p className="text-xs tracking-[0.2em] uppercase max-w-xs text-black/60">
            Frames próprios chegando. Em breve, nossas próprias imagens.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {TILES.map((t, i) => (
            <motion.div
              key={i}
              data-testid={`gallery-item-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative overflow-hidden border border-black flex flex-col justify-between p-5 md:p-7 group cursor-default ${
                t.variant === "dark"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              } ${t.cls}`}
            >
              {/* faint diagonal pattern */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, ${
                    t.variant === "dark" ? "#fff" : "#000"
                  } 0 1px, transparent 1px 14px)`,
                }}
              />

              <div className="relative z-10 flex items-start justify-between text-[10px] tracking-[0.3em] uppercase opacity-70">
                <span>{t.sub}</span>
                <Camera size={14} />
              </div>

              <div className="relative z-10">
                <p className="text-[10px] tracking-[0.35em] uppercase opacity-60 mb-2">
                  EM BREVE
                </p>
                <h3 className="font-black uppercase leading-none tracking-[-0.02em] text-3xl md:text-5xl">
                  {t.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <p
          data-testid="galeria-placeholder-note"
          className="mt-8 text-[10px] tracking-[0.3em] uppercase text-black/45 text-center md:text-right"
        >
          ★ Substitua estes blocos pelas suas próprias fotos editando o componente Galeria.
        </p>
      </div>
    </section>
  );
};
