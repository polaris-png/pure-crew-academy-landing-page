import React from "react";
import { motion } from "framer-motion";

const STATS = [
  { n: "3", l: "Modalidades" },
  { n: "200+", l: "Alunos na crew" },
  { n: "7", l: "Anos de estrada" },
  { n: "1:6", l: "Rácio nas aulas" },
];

export const About = () => {
  return (
    <section
      id="crew"
      data-testid="about-section"
      className="py-16 md:py-24 px-5 md:px-8"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-xs font-medium text-neutral-500 mb-3 tracking-wide">
              A CREW
            </p>
            <h2
              data-testid="about-title"
              className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 leading-tight"
            >
              Não é academia. <br />
              <span className="text-neutral-400">É crew.</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 space-y-5 text-neutral-600 leading-relaxed text-base md:text-lg"
          >
            <p data-testid="about-paragraph-1">
              A Pure Crew nasceu da rua, do tatami e da água. Aqui treinamos
              juntos, caímos juntos, voltamos juntos. Sem ego — só progresso.
            </p>
            <p data-testid="about-paragraph-2">
              Três disciplinas, uma filosofia: o movimento puro como linguagem.
              Não vens cá fazer aulas — entras na crew.
            </p>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {STATS.map((s, i) => (
            <motion.div
              key={s.l}
              data-testid={`about-stat-${i}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="pc-card-flat p-6"
            >
              <div className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
                {s.n}
              </div>
              <div className="text-sm text-neutral-500 mt-1.5">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
