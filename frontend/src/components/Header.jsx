import React, { useEffect, useState } from "react";
import { BRAND } from "../lib/constants";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-neutral-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-5 md:px-8 h-20">
        <button
          data-testid="logo-home-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5"
          aria-label="Pure Crew"
        >
          <img
            src={BRAND.logoUrl}
            alt="Pure Crew"
            className="h-11 md:h-12 w-auto"
            draggable={false}
          />
        </button>

        <button
          data-testid="header-cta-btn"
          onClick={() => scrollTo("inscricao")}
          className="pc-btn pc-btn-solid"
          style={{ padding: "0.6rem 1.2rem", fontSize: "0.85rem" }}
        >
          Inscreve-te
        </button>
      </div>
    </header>
  );
};
