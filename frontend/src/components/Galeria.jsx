import React from "react";
import { motion } from "framer-motion";
import { IMAGES } from "../lib/constants";

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
            Frames soltos do dia a dia. Suor, queda, salto, reset.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {[
            { src: IMAGES.gallery[0], cls: "md:col-span-5 md:row-span-2" },
            { src: IMAGES.gallery[1], cls: "md:col-span-4" },
            { src: IMAGES.gallery[2], cls: "md:col-span-3" },
            { src: IMAGES.gallery[3], cls: "md:col-span-3" },
            { src: IMAGES.gallery[4], cls: "md:col-span-4" },
            { src: IMAGES.gallery[5], cls: "md:col-span-7 md:row-span-1" },
          ].map((g, i) => (
            <motion.div
              key={i}
              data-testid={`gallery-item-${i}`}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative overflow-hidden border border-black ${g.cls}`}
            >
              <img
                src={g.src}
                alt={`Pure Crew ${i + 1}`}
                className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 hover:grayscale-0 transition-all duration-700"
                draggable={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
