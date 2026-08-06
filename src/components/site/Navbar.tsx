import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import { company } from "@/config/company";
import { navigation } from "@/config/navigation";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const light = scrolled || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        light
          ? "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">

        <a
          href="#home"
          className="flex min-w-0 items-center gap-3"
          aria-label={`${company.name} home`}
        >
          <img
            src={company.logo}
            alt={company.name}
            className="h-11 w-11 shrink-0 object-contain lg:h-12 lg:w-12"
          />

          <div
            className={`min-w-0 transition-colors ${
              light ? "text-[#0F172A]" : "text-white"
            }`}
          >
            <p className="truncate text-base font-semibold tracking-[-.02em] lg:text-lg">
              {company.name}
            </p>

            <p
              className={`text-[10px] font-medium uppercase tracking-[.16em] ${
                light ? "text-slate-500" : "text-slate-300"
              }`}
            >
              MahaRERA Registered
            </p>
          </div>
        </a>

        <nav
          className={`hidden items-center gap-7 lg:flex ${
            light ? "text-slate-700" : "text-slate-200"
          }`}
        >
          {navigation.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:text-[#D4AF37]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-2xl bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#0F172A] shadow-lg shadow-[#D4AF37]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e3c15a] lg:inline-flex"
        >
          Book a Site Visit
          <ArrowRight size={16} />
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className={`grid h-11 w-11 place-items-center rounded-xl transition lg:hidden ${
            light
              ? "text-[#0F172A] hover:bg-slate-100"
              : "text-white hover:bg-white/10"
          }`}
        >
          {mobileOpen ? <X size={21} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-5 pb-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col">

            {navigation.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="border-b border-slate-100 py-4 text-sm font-medium text-slate-700"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#0F172A] shadow-lg shadow-[#D4AF37]/20"
              onClick={() => setMobileOpen(false)}
            >
              Book a Site Visit
              <ArrowRight size={16} />
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}