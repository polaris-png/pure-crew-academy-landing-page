import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { BRAND } from "../lib/constants";

export const Hero = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-5 md:px-8"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Welcome card — like the dashboard reference */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="pc-card p-6 md:p-8 flex items-center gap-5 mb-12 md:mb-16"
          data-testid="hero-welcome-card"
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-neutral-100 flex items-center justify-center shrink-0">
            <img
              src={BRAND.logoUrl}
              alt=""
              aria-hidden
              className="w-9 md:w-11 h-auto"
              draggable={false}
            />
          </div>
          <div className="min-w-0">
            <h2 className="text-lg md:text-xl font-semibold text-neutral-900 tracking-tight">
              Olá, bem-vindo à Pure Crew
            </h2>
            <p className="text-sm text-neutral-500 mt-0.5">
              Escola de Surfskate, Surf e Jiu-Jitsu — Porto, Portugal
            </p>
          </div>
        </motion.div>

        {/* Hero copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl"
        >
          <p
            data-testid="hero-eyebrow"
            className="text-xs font-medium text-neutral-500 mb-4 tracking-wide"
          >
            ESCOLA · COMUNIDADE · MOVIMENTO
          </p>
          <h1
            data-testid="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.05]"
          >
            Treina o movimento
            <br />
            <span className="text-neutral-400">na onda, no concreto</span>
            <br />e no tatami.
          </h1>
          <p
            data-testid="hero-description"
            className="mt-6 text-base md:text-lg text-neutral-600 leading-relaxed max-w-xl"
          >
            O Surfskate é o nosso foco. O Surf e o Jiu-Jitsu completam
            o ecossistema da crew. Aulas em pequenos grupos, com método,
            comunidade e zero ego.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              data-testid="hero-primary-cta"
              onClick={() => scrollTo("inscricao")}
              className="pc-btn pc-btn-solid"
            >
              Inscreve-te
              <ArrowRight size={16} />
            </button>
            <a
              data-testid="hero-whatsapp-cta"
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="pc-btn pc-btn-ghost"
            >
              <MessageCircle size={16} />
              Fala connosco
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
