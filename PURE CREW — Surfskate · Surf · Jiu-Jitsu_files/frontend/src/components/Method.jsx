import React, { useState } from "react";
import { motion } from "framer-motion";

const STAGES = [
  {
    id: "movement",
    label: "Movement",
    body: "Treinamos o corpo através de padrões de movimento funcionais.",
  },
  {
    id: "control",
    label: "Control",
    body: "Refinamos posicionamento, timing e fluxo no surfskate.",
  },
  {
    id: "performance",
    label: "Performance",
    body: "Levamos a aplicação técnica para o surf com confiança e consistência.",
  },
];

const STYLES = [
  { id: "group", label: "Group sessions", body: "Quintas e sextas à tarde, na Casa da Música." },
  { id: "private", label: "Private coaching", body: "Sessões 1-para-1 com plano de evolução individual." },
  { id: "remote", label: "Remote training", body: "Acompanhamento à distância com vídeo-análise." },
];

export const Method = () => {
  const [stage, setStage] = useState("movement");
  const [style, setStyle] = useState("group");

  const activeStage = STAGES.find((s) => s.id === stage);
  const activeStyle = STYLES.find((s) => s.id === style);

  return (
    <section
      id="method"
      data-testid="method-section"
      className="py-16 md:py-24 px-5 md:px-8"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="pc-card-flat p-7 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {/* METHOD */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-medium text-neutral-500 mb-5 tracking-[0.18em]">
              METHOD
            </p>
            <ul className="space-y-3" role="tablist" aria-label="Method stages">
              {STAGES.map((s) => {
                const active = s.id === stage;
                return (
                  <li key={s.id}>
                    <button
                      data-testid={`method-stage-${s.id}`}
                      data-active={active}
                      role="tab"
                      aria-selected={active}
                      onClick={() => setStage(s.id)}
                      className={`w-full text-left flex items-center gap-3 py-1.5 transition-colors ${
                        active ? "text-neutral-900" : "text-neutral-300 hover:text-neutral-500"
                      }`}
                    >
                      <span
                        className={`block w-[3px] h-6 rounded-full transition-colors ${
                          active ? "bg-neutral-900" : "bg-transparent"
                        }`}
                      />
                      <span
                        className={`text-2xl md:text-[28px] tracking-tight ${
                          active ? "font-semibold" : "font-normal"
                        }`}
                      >
                        {s.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <motion.p
              key={activeStage.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              data-testid="method-stage-body"
              className="mt-6 text-sm md:text-base text-neutral-600 leading-relaxed max-w-sm"
            >
              {activeStage.body}
            </motion.p>
          </motion.div>

          {/* CHOOSE YOUR STYLE */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xs font-medium text-neutral-500 mb-5 tracking-[0.18em]">
              CHOOSE YOUR STYLE
            </p>
            <ul className="space-y-3" role="tablist" aria-label="Training styles">
              {STYLES.map((s) => {
                const active = s.id === style;
                return (
                  <li key={s.id}>
                    <button
                      data-testid={`method-style-${s.id}`}
                      data-active={active}
                      role="tab"
                      aria-selected={active}
                      onClick={() => setStyle(s.id)}
                      className={`w-full text-left flex items-center gap-3 py-1.5 transition-colors ${
                        active ? "text-neutral-900" : "text-neutral-300 hover:text-neutral-500"
                      }`}
                    >
                      <span
                        className={`block w-[3px] h-6 rounded-full transition-colors ${
                          active ? "bg-neutral-900" : "bg-transparent"
                        }`}
                      />
                      <span
                        className={`text-2xl md:text-[28px] tracking-tight ${
                          active ? "font-semibold" : "font-normal"
                        }`}
                      >
                        {s.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <motion.p
              key={activeStyle.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              data-testid="method-style-body"
              className="mt-6 text-sm md:text-base text-neutral-600 leading-relaxed max-w-sm"
            >
              {activeStyle.body}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
