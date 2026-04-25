import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND } from "../lib/constants";

const NAV = [
  { id: "crew", label: "A CREW" },
  { id: "modalidades", label: "MODALIDADES" },
  { id: "galeria", label: "GALERIA" },
  { id: "merch", label: "MERCH" },
  { id: "inscricao", label: "INSCRIÇÃO" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-black" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-12 h-16 md:h-20">
        <button
          data-testid="logo-home-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3"
          aria-label="Pure Crew"
        >
          <img
            src={BRAND.logoUrl}
            alt="Pure Crew"
            className="h-9 md:h-11 w-auto"
            draggable={false}
          />
        </button>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <button
              key={n.id}
              data-testid={`nav-${n.id}-btn`}
              onClick={() => scrollTo(n.id)}
              className="pc-link text-[11px] font-bold tracking-[0.22em] text-black uppercase"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            data-testid="header-cta-btn"
            onClick={() => scrollTo("inscricao")}
            className="pc-btn"
          >
            <span>INSCREVA-SE</span>
          </button>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden p-2 -mr-2"
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden bg-white border-t border-black px-4 py-6 flex flex-col gap-5"
        >
          {NAV.map((n) => (
            <button
              key={n.id}
              data-testid={`mobile-nav-${n.id}-btn`}
              onClick={() => scrollTo(n.id)}
              className="text-left text-2xl font-black tracking-tight uppercase"
            >
              {n.label}
            </button>
          ))}
          <button
            data-testid="mobile-cta-btn"
            onClick={() => scrollTo("inscricao")}
            className="pc-btn mt-2 self-start"
          >
            <span>INSCREVA-SE</span>
          </button>
        </div>
      )}
    </header>
  );
};
