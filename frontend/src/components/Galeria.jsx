import React, { useState } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";

const TABS = [
  { id: "surf", label: "Surf" },
  { id: "surfskate", label: "Surfskate" },
  { id: "eventos", label: "Eventos" },
];

const PLACEHOLDERS = {
  surf: ["Frame 01", "Frame 02", "Frame 03", "Frame 04"],
  surfskate: ["Frame 01", "Frame 02", "Frame 03", "Frame 04"],
  eventos: ["Frame 01", "Frame 02", "Frame 03", "Frame 04"],
};

export const Galeria = () => {
  const [tab, setTab] = useState("surfskate");

  return (
    <section
      id="galeria"
      data-testid="galeria-section"
      className="py-16 md:py-24 px-5 md:px-8"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-xs font-medium text-neutral-500 mb-3 tracking-wide">
            GALERIA
          </p>
          <h2
            data-testid="galeria-title"
            className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900"
          >
            A crew em movimento
          </h2>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          className="flex items-center justify-center gap-8 md:gap-12 border-b border-neutral-200 mb-10"
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              data-testid={`gallery-tab-${t.id}`}
              data-active={tab === t.id}
              onClick={() => setTab(t.id)}
              className="pc-tab"
              role="tab"
              aria-selected={tab === t.id}
            >
              {t.label.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
        >
          {PLACEHOLDERS[tab].map((label, i) => (
            <div
              key={`${tab}-${i}`}
              data-testid={`gallery-item-${tab}-${i}`}
              className="pc-card aspect-[4/3] flex flex-col items-center justify-center text-neutral-400 cursor-default group"
            >
              <ImageIcon
                size={28}
                strokeWidth={1.4}
                className="text-neutral-300 group-hover:text-neutral-400 transition-colors"
              />
              <p className="text-[11px] font-medium tracking-wide mt-2 uppercase">
                {label}
              </p>
              <p className="text-[10px] text-neutral-300 mt-0.5">Em breve</p>
            </div>
          ))}
        </motion.div>

        <p
          data-testid="galeria-placeholder-note"
          className="mt-8 text-xs text-neutral-400 text-center"
        >
          Os blocos serão substituídos pelas tuas próprias fotos.
        </p>
      </div>
    </section>
  );
};
