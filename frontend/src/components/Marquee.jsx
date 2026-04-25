import React from "react";

export const Marquee = ({ items, dark = true, testId = "marquee" }) => {
  const row = (
    <div className="marquee-track">
      {[0, 1].map((dup) => (
        <div key={dup} className="flex items-center gap-10 pr-10">
          {items.map((item, idx) => (
            <span
              key={`${dup}-${idx}`}
              className="flex items-center gap-10 text-5xl md:text-7xl font-black uppercase tracking-tighter whitespace-nowrap"
            >
              {item}
              <span
                aria-hidden
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: dark ? "#fff" : "#000" }}
              />
            </span>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div
      data-testid={testId}
      className={`overflow-hidden border-y ${
        dark ? "bg-black text-white border-white/20" : "bg-white text-black border-black"
      } py-6`}
    >
      {row}
    </div>
  );
};
