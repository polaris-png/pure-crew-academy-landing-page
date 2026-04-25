import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, MessageCircle } from "lucide-react";
import { BRAND } from "../lib/constants";

/**
 * Decorative SVG illustration of a surfskate deck (top-down view).
 * Pure vector, no stock photo dependency, no people.
 */
const SurfskateArt = ({ className = "" }) => (
  <svg
    viewBox="0 0 320 900"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    {/* deck outline (surfskate fish-like shape) */}
    <defs>
      <linearGradient id="deckGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.55" />
      </linearGradient>
    </defs>

    <g fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinejoin="round">
      {/* deck */}
      <path
        d="M160 30 C 235 35 280 100 280 220 L 280 670 C 280 790 235 855 160 860 C 85 855 40 790 40 670 L 40 220 C 40 100 85 35 160 30 Z"
        fill="url(#deckGrad)"
        fillOpacity="0.04"
      />
      {/* concave inner line */}
      <path
        d="M160 60 C 215 65 250 120 250 220 L 250 670 C 250 770 215 825 160 830 C 105 825 70 770 70 670 L 70 220 C 70 120 105 65 160 60 Z"
        opacity="0.5"
      />
      {/* center spine */}
      <line x1="160" y1="80" x2="160" y2="810" opacity="0.35" strokeDasharray="4 8" />

      {/* top truck */}
      <rect x="100" y="160" width="120" height="14" rx="4" />
      <circle cx="105" cy="167" r="22" />
      <circle cx="215" cy="167" r="22" />
      {/* bottom truck */}
      <rect x="100" y="720" width="120" height="14" rx="4" />
      <circle cx="105" cy="727" r="22" />
      <circle cx="215" cy="727" r="22" />

      {/* griptape texture dots */}
      <g opacity="0.18">
        {Array.from({ length: 30 }).map((_, i) => (
          <circle
            key={i}
            cx={80 + ((i * 53) % 160)}
            cy={220 + i * 18}
            r="1.4"
            fill="#fff"
            stroke="none"
          />
        ))}
      </g>

      {/* logo dot accent */}
      <circle cx="160" cy="445" r="10" fill="#C25A46" stroke="none" />
    </g>
  </svg>
);

export const Hero = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-[100svh] w-full overflow-hidden bg-black text-white flex flex-col"
    >
      {/* Concrete texture background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px, 17px 17px",
          backgroundPosition: "0 0, 8px 8px",
          opacity: 0.6,
        }}
      />

      {/* Diagonal scratch lines */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent 0 38px, rgba(255,255,255,0.5) 38px 39px, transparent 39px 80px)",
        }}
      />

      {/* Decorative surfskate illustration on the right */}
      <div
        aria-hidden
        className="absolute top-0 right-0 h-full pointer-events-none flex items-center justify-end pr-2 md:pr-12"
      >
        <SurfskateArt className="h-[78%] md:h-[88%] w-auto opacity-[0.55] md:opacity-[0.7]" />
      </div>

      {/* Vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 80% at 20% 60%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Top meta line */}
      <div className="relative z-10 flex items-center justify-between px-4 md:px-12 pt-24 md:pt-32 text-[11px] tracking-[0.3em] uppercase text-white/70">
        <span data-testid="hero-meta-left">PURE CREW · ACADEMY</span>
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
            Surfskate é o nosso foco — surf e jiu-jitsu completam o movimento.
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
