import React from "react";
import { Clock } from "lucide-react";

export const MerchTeaser = () => {
  return (
    <section
      id="merch"
      data-testid="merch-section"
      className="py-12 md:py-16 px-5 md:px-8"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="pc-card-flat p-7 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0 mt-0.5">
              <Clock size={18} strokeWidth={1.5} className="text-neutral-700" />
            </div>
            <div>
              <p className="text-xs font-medium text-neutral-500 mb-2 tracking-wide">
                MERCH
              </p>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900">
                Brevemente.
              </h3>
              <p className="mt-1.5 text-sm text-neutral-500 max-w-md">
                Estamos a preparar a primeira coleção da Pure Crew. Em breve,
                tees, hoodies e bonés em pequenas edições.
              </p>
            </div>
          </div>
          <span
            data-testid="merch-status"
            className="text-[11px] font-medium px-3 py-1.5 rounded-full bg-neutral-900 text-white tracking-wide"
          >
            EM DESENVOLVIMENTO
          </span>
        </div>
      </div>
    </section>
  );
};
