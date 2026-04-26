import React from "react";
import { motion } from "framer-motion";

const GAINS = [
  {
    title: "Mais controlo",
    body: "Melhoras a forma como te moves sobre a prancha.",
  },
  {
    title: "Melhor técnica",
    body: "Refinas posicionamento, timing e fluxo.",
  },
  {
    title: "Progressão mais rápida",
    body: "Evoluis sem depender das condições do mar.",
  },
];

export const WhatYouGain = () => {
  return (
    <section
      id="what-you-gain"
      data-testid="what-you-gain-section"
      className="px-5 md:px-8"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {/* Black purpose card */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            data-testid="purpose-banner"
            className="md:col-span-5 bg-neutral-900 text-white rounded-[24px] p-8 md:p-10 flex flex-col justify-between min-h-[320px] md:min-h-[420px]"
          >
            <div className="w-10 h-px bg-white/40" />
            <div>
              <h2 className="text-3xl md:text-[40px] leading-[1.05] font-semibold tracking-tight uppercase">
                Every movement
                <br />
                has a purpose.
              </h2>
              <div className="mt-6 space-y-1 text-white/70 text-sm md:text-base">
                <p>Build control.</p>
                <p className="font-semibold text-white">Deliver performance.</p>
              </div>
              <p className="mt-8 text-xs md:text-sm text-white/55">
                <span className="font-semibold text-white">Surfskate</span>{" "}
                builds the foundation.
              </p>
            </div>
          </motion.div>

          {/* What you gain content */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7 flex flex-col justify-center"
          >
            <h3
              data-testid="what-you-gain-title"
              className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-8 md:mb-10"
            >
              O que ganhas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-7">
              {GAINS.map((g, i) => (
                <div key={g.title} data-testid={`gain-item-${i}`}>
                  <h4 className="text-base md:text-lg font-semibold tracking-tight text-neutral-900 leading-snug">
                    {g.title}
                  </h4>
                  <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                    {g.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
