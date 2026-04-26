import React from "react";
import { Instagram, MessageCircle, Mail } from "lucide-react";
import { BRAND } from "../lib/constants";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="footer"
      className="border-t border-neutral-200 py-12 px-5 md:px-8 mt-8"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          <div className="md:col-span-7 flex items-center gap-3">
            <img src={BRAND.logoUrl} alt="Pure Crew" className="h-10 w-auto" />
            <div>
              <p className="text-sm font-semibold text-neutral-900">Pure Crew</p>
              <p className="text-xs text-neutral-500">
                Surfskate · Surf · Jiu-Jitsu
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <p className="text-xs font-medium text-neutral-400 mb-3 tracking-wide">
              REDES
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                {
                  test: "footer-instagram",
                  href: BRAND.instagram,
                  Icon: Instagram,
                  label: "Instagram",
                },
                {
                  test: "footer-whatsapp",
                  href: BRAND.whatsapp,
                  Icon: MessageCircle,
                  label: "WhatsApp",
                },
                {
                  test: "footer-email",
                  href: `mailto:${BRAND.email}`,
                  Icon: Mail,
                  label: "Email",
                },
              ].map((s) => (
                <a
                  key={s.test}
                  data-testid={s.test}
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-neutral-200 hover:border-neutral-900 hover:text-neutral-900 text-neutral-500 flex items-center justify-center transition-colors"
                  aria-label={s.label}
                >
                  <s.Icon size={16} strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-neutral-400">
            © {year} Pure Crew. Todos os direitos reservados.
          </p>
          <p className="text-xs text-neutral-400">Porto, Portugal</p>
        </div>
      </div>
    </footer>
  );
};
