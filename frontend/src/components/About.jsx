import React from "react";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="crew"
      data-testid="about-section"
      className="bg-white text-black py-24 md:py-40 px-4 md:px-12 border-y border-black"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-3">
          <p className="text-[11px] tracking-[0.4em] uppercase mb-4">
            (01) — A CREW
          </p>
          <div className="h-px w-16 bg-black" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-9"
        >
          <h2
            data-testid="about-title"
            className="font-black uppercase tracking-[-0.03em] leading-[0.9] text-4xl md:text-6xl lg:text-7xl mb-10"
          >
            NÃO É ACADEMIA.
            <br />
            É <span className="italic font-light">crew</span>.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl">
            <p
              data-testid="about-paragraph-1"
              className="text-sm md:text-base uppercase tracking-[0.14em] leading-relaxed"
            >
              A Pure Crew nasceu da rua, do tatami e da água. Aqui a gente treina
              junto, cai junto, levanta junto. Não tem ego — tem progresso.
            </p>
            <p
              data-testid="about-paragraph-2"
              className="text-sm md:text-base uppercase tracking-[0.14em] leading-relaxed"
            >
              Três disciplinas. Uma filosofia. O movimento puro como linguagem.
              Você não vem aqui pra fazer aula — você entra pra crew.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 md:gap-12 border-t border-black pt-10">
            {[
              { n: "03", l: "MODALIDADES" },
              { n: "+200", l: "ALUNOS NA CREW" },
              { n: "07", l: "ANOS DE ESTRADA" },
            ].map((s, i) => (
              <div key={i} data-testid={`about-stat-${i}`}>
                <div className="text-4xl md:text-6xl font-black tracking-tighter">
                  {s.n}
                </div>
                <div className="text-[10px] md:text-xs tracking-[0.3em] uppercase mt-2 text-black/70">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
