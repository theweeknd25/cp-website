import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { company } from "@/config/company";
import { siteContent } from "@/config/content";
import { navigation } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="bg-[#0b1120] text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-7 py-9 sm:py-12 lg:grid-cols-[1.2fr_.7fr_.7fr] lg:gap-10">
          <div>
            <a
              href="#home"
              className="text-lg font-semibold tracking-[-.03em] sm:text-xl"
            >
              {company.name}
            </a>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400 sm:mt-3">
              {company.tagline}
            </p>

            <p className="mt-4 max-w-md text-xs leading-5 text-slate-500 sm:mt-6">
              {siteContent.footer.disclaimer}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:contents">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-[#D4AF37] sm:text-xs">
                Explore
              </p>

              <nav className="mt-3 grid gap-2 sm:mt-4 sm:gap-3">
                {navigation.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-[#D4AF37] sm:text-xs">
                Connect
              </p>

              <div className="mt-3 grid gap-2.5 text-sm text-slate-300 sm:mt-4 sm:gap-3">
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-center gap-2 transition hover:text-white"
                >
                  <Phone size={15} className="shrink-0" />
                  {company.phone}
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 break-all transition hover:text-white"
                >
                  <Mail size={15} className="shrink-0" />
                  {company.email}
                </a>

                <div className="flex items-center gap-2 pt-1">
  <a
    href={company.instagram}
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
    className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-slate-300 transition-all duration-300 hover:border-transparent hover:bg-[linear-gradient(135deg,#833AB4_0%,#FD1D1D_52%,#FCAF45_100%)] hover:text-white"
  >
    <FaInstagram size={17} />
  </a>

  <a
    href={company.facebook}
    target="_blank"
    rel="noreferrer"
    aria-label="Facebook"
    className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-slate-300 transition-all duration-300 hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white"
  >
    <FaFacebookF size={16} />
  </a>
</div>

                <a
                  href="#contact"
                  className="mt-1 flex items-center gap-2 font-medium text-[#D4AF37]"
                >
                  Book a consultation <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-1 px-5 py-4 text-[11px] text-slate-500 sm:px-6 sm:py-5 sm:text-xs">
          <span>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </span>
          <span>MahaRERA: {company.mahaReraNumber}</span>
        </div>
      </div>
    </footer>
  );
}