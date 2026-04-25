import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND } from "../lib/constants";

const NAV = [
  { id: "modalidades", label: "Modalidades" },
  { id: "method", label: "Método" },
  { id: "crew", label: "A Crew" },
  { id: "galeria", label: "Galeria" },
  { id: "inscricao", label: "Inscrição" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-neutral-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-5 md:px-8 h-16">
        <button
          data-testid="logo-home-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5"
          aria-label="Pure Crew"
        >
          <img
            src={BRAND.logoUrl}
            alt="Pure Crew"
            className="h-8 md:h-9 w-auto"
            draggable={false}
          />
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <button
              key={n.id}
              data-testid={`nav-${n.id}-btn`}
              onClick={() => scrollTo(n.id)}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            data-testid="header-cta-btn"
            onClick={() => scrollTo("inscricao")}
            className="pc-btn pc-btn-solid"
            style={{ padding: "0.55rem 1.1rem", fontSize: "0.85rem" }}
          >
            Inscreve-te
          </button>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden p-2 -mr-2 text-neutral-900"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="md:hidden bg-white border-t border-neutral-200 px-5 py-4 flex flex-col gap-1"
        >
          {NAV.map((n) => (
            <button
              key={n.id}
              data-testid={`mobile-nav-${n.id}-btn`}
              onClick={() => scrollTo(n.id)}
              className="text-left text-base font-medium text-neutral-800 py-3 border-b border-neutral-100"
            >
              {n.label}
            </button>
          ))}
          <button
            data-testid="mobile-cta-btn"
            onClick={() => scrollTo("inscricao")}
            className="pc-btn pc-btn-solid mt-4 self-start"
          >
            Inscreve-te
          </button>
        </div>
      )}
    </header>
  );
};
