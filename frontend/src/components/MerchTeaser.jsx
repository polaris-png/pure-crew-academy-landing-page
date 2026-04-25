import React from "react";
import { ArrowRight } from "lucide-react";
import { BRAND } from "../lib/constants";

export const MerchTeaser = () => {
  return (
    <section
      id="merch"
      data-testid="merch-section"
      className="py-12 md:py-16 px-5 md:px-8"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="pc-card-flat p-7 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <p className="text-xs font-medium text-neutral-500 mb-2 tracking-wide">
              MERCH
            </p>
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900">
              Veste a crew.
            </h3>
            <p className="mt-1.5 text-sm text-neutral-500 max-w-md">
              Tees, hoodies e bonés em pequenas edições. Discreto. Pesado.
            </p>
          </div>
          <a
            data-testid="merch-cta"
            href={BRAND.shop}
            target="_blank"
            rel="noopener noreferrer"
            className="pc-btn"
          >
            Ver coleção
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
