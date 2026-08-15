import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import { company } from "@/config/company";
import { navigation } from "@/config/navigation";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white shadow-[0_2px_20px_rgba(15,23,42,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6">

        <a
          href="#home"
          className="flex min-w-0 items-center gap-3"
          aria-label={`${company.name} home`}
        >
          <img
              src={company.logo}
              alt={company.name}
              width={56}
              height={56}
              className="h-12 w-12 shrink-0 object-contain lg:h-14 lg:w-14"
            />
                  <div className="min-w-0 text-[#0F172A]">
                    <p className="truncate text-lg font-semibold tracking-[-0.015em] lg:text-xl">
                      {company.name}
                    </p>

                    <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500">
                      MahaRERA Registered
                    </p>
                  </div>
        </a>

        <nav className="hidden items-center gap-7 text-slate-700 lg:flex">
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
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          className="grid h-11 w-11 place-items-center rounded-xl text-[#0F172A] transition hover:bg-slate-100 lg:hidden"
        >
          {mobileOpen ? <X size={21} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-5 pb-5 lg:hidden"
        >
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