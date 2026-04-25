import React from "react";
import { Instagram, MessageCircle, Youtube, Mail, ArrowUp } from "lucide-react";
import { BRAND } from "../lib/constants";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="footer"
      className="bg-black text-white px-4 md:px-12 pt-20 pb-8 border-t border-white/15"
    >
      <div className="max-w-[1500px] mx-auto">
        {/* Massive wordmark */}
        <div
          aria-hidden
          data-testid="footer-wordmark"
          className="font-black uppercase tracking-[-0.05em] leading-[0.85] text-[24vw] md:text-[18vw] lg:text-[15vw] select-none"
        >
          PURE CREW.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mt-12 border-t border-white/15 pt-10">
          <div className="md:col-span-4">
            <img src={BRAND.logoUrl} alt="Pure Crew" className="h-16 w-auto invert" />
            <p className="mt-5 text-[11px] tracking-[0.25em] uppercase text-white/55 max-w-xs">
              Escola de surfskate, surf e jiu-jitsu. Comunidade primeiro,
              progresso sempre.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.35em] uppercase text-white/45 mb-4">
              REDES
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  data-testid="footer-instagram"
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pc-link flex items-center gap-3 text-sm tracking-[0.2em] uppercase"
                >
                  <Instagram size={16} /> INSTAGRAM
                </a>
              </li>
              <li>
                <a
                  data-testid="footer-whatsapp"
                  href={BRAND.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pc-link flex items-center gap-3 text-sm tracking-[0.2em] uppercase"
                >
                  <MessageCircle size={16} /> WHATSAPP
                </a>
              </li>
              <li>
                <a
                  data-testid="footer-youtube"
                  href={BRAND.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pc-link flex items-center gap-3 text-sm tracking-[0.2em] uppercase"
                >
                  <Youtube size={16} /> YOUTUBE
                </a>
              </li>
              <li>
                <a
                  data-testid="footer-email"
                  href={`mailto:${BRAND.email}`}
                  className="pc-link flex items-center gap-3 text-sm tracking-[0.2em] uppercase"
                >
                  <Mail size={16} /> {BRAND.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.35em] uppercase text-white/45 mb-4">
              NAVEGAR
            </p>
            <ul className="space-y-3 text-sm tracking-[0.2em] uppercase">
              {[
                ["crew", "A CREW"],
                ["modalidades", "MODALIDADES"],
                ["galeria", "GALERIA"],
                ["merch", "MERCH"],
                ["inscricao", "INSCRIÇÃO"],
              ].map(([id, label]) => (
                <li key={id}>
                  <button
                    data-testid={`footer-nav-${id}`}
                    onClick={() =>
                      document
                        .getElementById(id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="pc-link"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/15 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/40">
            © {year} PURE CREW. TODOS OS DIREITOS RESERVADOS.
          </p>
          <button
            data-testid="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[10px] tracking-[0.3em] uppercase flex items-center gap-2 pc-link"
          >
            <ArrowUp size={14} /> VOLTAR AO TOPO
          </button>
        </div>
      </div>
    </footer>
  );
};
