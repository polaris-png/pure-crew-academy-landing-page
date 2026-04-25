import React from "react";
import { ArrowUpRight } from "lucide-react";
import { BRAND } from "../lib/constants";

export const MerchTeaser = () => {
  return (
    <section
      id="merch"
      data-testid="merch-section"
      className="bg-white text-black border-y border-black py-16 md:py-20 px-4 md:px-12"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-[11px] tracking-[0.4em] uppercase mb-3 text-black/60">
            (04) — MERCH
          </p>
          <h3 className="font-black uppercase tracking-[-0.02em] leading-none text-3xl md:text-5xl">
            VESTE A CREW.
          </h3>
          <p className="mt-3 text-xs md:text-sm tracking-[0.18em] uppercase text-black/65 max-w-md">
            Tees, hoodies e bonés em edições limitadas. Discreto. Pesado.
          </p>
        </div>
        <a
          data-testid="merch-cta"
          href={BRAND.shop}
          target="_blank"
          rel="noopener noreferrer"
          className="pc-btn"
        >
          <span className="flex items-center gap-3">
            VER COLEÇÃO <ArrowUpRight size={18} />
          </span>
        </a>
      </div>
    </section>
  );
};
