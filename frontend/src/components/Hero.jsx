import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BRAND } from "../lib/constants";

/**
 * Aerial skate-bowl illustration (organic kidney shape).
 * No people, fully vector, evokes the reference grayscale aerial photo.
 */
const AerialBowl = () => (
  <svg
    viewBox="0 0 600 600"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    aria-hidden
  >
    <defs>
      <radialGradient id="concrete" cx="50%" cy="45%" r="65%">
        <stop offset="0%" stopColor="#f5f5f5" />
        <stop offset="60%" stopColor="#d4d4d4" />
        <stop offset="100%" stopColor="#9ca3af" />
      </radialGradient>
      <radialGradient id="bowlInner" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#1f2937" stopOpacity="0.18" />
        <stop offset="55%" stopColor="#1f2937" stopOpacity="0.05" />
        <stop offset="100%" stopColor="#1f2937" stopOpacity="0" />
      </radialGradient>
      <pattern id="cracks" width="80" height="80" patternUnits="userSpaceOnUse">
        <path
          d="M0 40 Q 20 35 40 42 T 80 38"
          fill="none"
          stroke="#6b7280"
          strokeWidth="0.4"
          strokeOpacity="0.18"
        />
        <path
          d="M30 0 L 35 80"
          fill="none"
          stroke="#6b7280"
          strokeWidth="0.3"
          strokeOpacity="0.12"
        />
      </pattern>
    </defs>

    {/* concrete background */}
    <rect width="600" height="600" fill="url(#concrete)" />
    <rect width="600" height="600" fill="url(#cracks)" />

    {/* outer bowl shape — kidney/peanut */}
    <path
      d="M120 220 C 120 140, 200 100, 290 120 C 330 130, 350 160, 380 175 C 430 195, 490 200, 510 270 C 525 320, 480 380, 410 400 C 360 415, 320 405, 290 420 C 240 445, 160 440, 130 380 C 100 320, 120 280, 120 220 Z"
      fill="#e5e7eb"
      stroke="#1f2937"
      strokeWidth="1.5"
      strokeOpacity="0.4"
    />
    {/* mid line — bowl rim */}
    <path
      d="M150 230 C 150 160, 210 130, 290 145 C 330 152, 350 180, 380 195 C 425 213, 470 220, 485 275 C 498 320, 455 370, 400 385 C 355 397, 320 390, 295 402 C 250 425, 175 420, 150 370 C 125 320, 150 285, 150 230 Z"
      fill="#d1d5db"
      stroke="#1f2937"
      strokeWidth="1"
      strokeOpacity="0.35"
    />
    {/* deep bowl */}
    <path
      d="M180 240 C 180 180, 230 155, 295 168 C 330 175, 350 200, 378 213 C 415 228, 450 235, 460 280 C 470 318, 432 358, 387 370 C 350 380, 320 374, 297 385 C 260 405, 200 400, 178 358 C 158 318, 180 290, 180 240 Z"
      fill="#9ca3af"
      stroke="#1f2937"
      strokeWidth="1"
      strokeOpacity="0.45"
    />
    {/* inner darkest */}
    <path
      d="M215 260 C 215 220, 250 200, 300 210 C 330 217, 348 235, 372 245 C 400 257, 425 263, 432 295 C 438 320, 410 348, 375 357 C 348 363, 322 358, 305 367 C 278 380, 235 376, 218 348 C 202 320, 215 295, 215 260 Z"
      fill="url(#bowlInner)"
    />

    {/* shadow drops */}
    <ellipse cx="290" cy="335" rx="60" ry="14" fill="#1f2937" opacity="0.12" />
    <ellipse cx="385" cy="305" rx="34" ry="9" fill="#1f2937" opacity="0.1" />
  </svg>
);

export const Hero = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative pt-28 md:pt-36 pb-12 md:pb-20 px-5 md:px-8"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* small brand line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-10 md:mb-14"
        >
          <div className="flex items-center gap-2.5">
            <img
              src={BRAND.logoUrl}
              alt=""
              aria-hidden
              className="w-7 md:w-8 h-auto"
              draggable={false}
            />
            <span className="text-[11px] md:text-xs font-medium tracking-[0.18em] text-neutral-700">
              PURE CREW
            </span>
          </div>
          <button
            data-testid="hero-book-cta-top"
            onClick={() => scrollTo("inscricao")}
            className="pc-btn pc-btn-solid"
            style={{ padding: "0.55rem 1.1rem", fontSize: "0.8rem" }}
          >
            Marca a tua sessão
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* left column: copy */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
              data-testid="hero-title"
              className="font-black tracking-[-0.04em] leading-[0.92] text-[18vw] md:text-[10vw] lg:text-[8.6vw] text-neutral-900"
            >
              PLAN.
              <br />
              SHAPE.
              <br />
              ACT.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 md:mt-10 max-w-xl space-y-4 text-neutral-600 leading-relaxed text-base md:text-[17px]"
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <button
                data-testid="hero-primary-cta"
                onClick={() => scrollTo("inscricao")}
                className="pc-btn pc-btn-solid"
                style={{ padding: "1rem 1.75rem", fontSize: "0.85rem", letterSpacing: "0.08em" }}
              >
                MARCA A TUA SESSÃO
                <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>

          {/* right column: aerial bowl image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="aspect-square w-full rounded-[28px] overflow-hidden border border-neutral-200 bg-neutral-100">
              <AerialBowl />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
