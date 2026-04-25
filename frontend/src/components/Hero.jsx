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
        {/* Welcome card */}
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
            PLAN · SHAPE · ACT
          </p>
          <h1
            data-testid="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.05]"
          >
            Plan. Shape. <span className="text-neutral-400">Act.</span>
          </h1>

          <div
            data-testid="hero-description"
            className="mt-6 space-y-4 text-base md:text-lg text-neutral-600 leading-relaxed max-w-xl"
          >
            <p data-testid="hero-paragraph-1">
              Uma década de experiência prática levou-nos a partilhar a nossa
              visão com o mundo.
            </p>
            <p data-testid="hero-paragraph-2">
              Pensado para quem partilha a nossa paixão e quer evoluir através
              de treino estruturado.
            </p>
            <p data-testid="hero-paragraph-3">
              A nossa equipa aperfeiçoou um método baseado em ciência, com 100%
              de aplicação à técnica de surf, ancorado em biomecânica e
              enriquecido com treino corporal e mental.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              data-testid="hero-primary-cta"
              onClick={() => scrollTo("inscricao")}
              className="pc-btn pc-btn-solid"
            >
              Marca a tua sessão
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
