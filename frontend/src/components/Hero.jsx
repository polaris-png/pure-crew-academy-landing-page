import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="lg:col-span-7"
          >
            <p
              data-testid="hero-eyebrow"
              className="text-xs font-medium text-neutral-500 mb-4 tracking-wide"
            >
              CULTURE · METHOD · RESPECT
            </p>
            <h1
              data-testid="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.05]"
            >
              Culture. Method.{" "}
              <span className="text-neutral-400">Respect.</span>
            </h1>
            <p className="mt-3 text-sm font-medium tracking-[0.18em] uppercase text-neutral-700">
              Stay PURE
            </p>

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
                A nossa equipa aperfeiçoou um método baseado em ciência, com
                100% de aplicação à técnica de surf, ancorado em biomecânica e
                enriquecido com treino corporal e mental.
              </p>
            </div>

            <div className="mt-8">
              <button
                data-testid="hero-primary-cta"
                onClick={() => scrollTo("inscricao")}
                className="pc-btn pc-btn-solid"
              >
                Marca a tua sessão
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* Right: logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
            className="lg:col-span-5 flex items-center justify-center"
            data-testid="hero-logo-art"
          >
            <div className="aspect-square w-full max-w-[440px] rounded-[28px] bg-white border border-neutral-200 shadow-[0_1px_3px_rgba(15,15,15,0.04),0_12px_32px_rgba(15,15,15,0.06)] flex items-center justify-center p-10 md:p-14">
              <img
                src={BRAND.logoUrl}
                alt="Pure Crew"
                className="w-full h-auto max-w-[300px]"
                draggable={false}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
