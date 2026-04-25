import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, MessageCircle } from "lucide-react";
import { BRAND, IMAGES } from "../lib/constants";

export const Hero = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-[100svh] w-full overflow-hidden bg-black text-white flex flex-col"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Pure Crew lifestyle"
          className="w-full h-full object-cover grayscale contrast-125 brightness-90 opacity-70"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
      </div>

      {/* Top meta line */}
      <div className="relative z-10 flex items-center justify-between px-4 md:px-12 pt-24 md:pt-32 text-[11px] tracking-[0.3em] uppercase text-white/70">
        <span data-testid="hero-meta-left">EST. SP — BR</span>
        <span data-testid="hero-meta-right">N° 001 / EDIÇÃO ATUAL</span>
      </div>

      {/* Main content - bottom-left aligned */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-4 md:px-12 pb-12 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-white/80 mb-6"
          data-testid="hero-eyebrow"
        >
          ESCOLA · COMUNIDADE · MOVIMENTO
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          className="font-black uppercase tracking-[-0.04em] leading-[0.85] text-[18vw] md:text-[14vw] lg:text-[11vw]"
          data-testid="hero-title"
        >
          ONDA.
          <br />
          CONCRETO.
          <br />
          <span className="inline-flex items-center gap-4">
            TATAMI
            <span className="inline-block w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#C25A46]" />
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-end"
        >
          <p
            data-testid="hero-description"
            className="md:col-span-5 text-sm md:text-base uppercase tracking-[0.18em] leading-relaxed text-white/85 max-w-md"
          >
            Uma escola. Três disciplinas. Uma só crew.
            Surfskate, surf e jiu-jitsu pra quem vive o movimento de verdade.
          </p>

          <div className="md:col-span-7 flex flex-col sm:flex-row gap-3 md:justify-end">
            <button
              data-testid="hero-primary-cta"
              onClick={() => scrollTo("inscricao")}
              className="pc-btn pc-btn--inverted"
            >
              <span className="flex items-center gap-3">
                INSCREVA-SE <ArrowDownRight size={18} />
              </span>
            </button>
            <a
              data-testid="hero-whatsapp-cta"
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="pc-btn pc-btn--inverted-ghost"
            >
              <span className="flex items-center gap-3">
                <MessageCircle size={18} /> WHATSAPP
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
