import React from "react";
import { motion } from "framer-motion";

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
              Stay <span className="text-neutral-400">PURE</span>.
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
              Quatro programas, uma filosofia: instrutores certificados,
              metodologia guiada e um syllabus pensado a cada aluno. Aulas
              todos os dias, para todas as idades e níveis.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
