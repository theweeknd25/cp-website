import { Check } from "lucide-react";

import { company } from "@/config/company";
import { siteContent } from "@/config/content";
import { stats } from "@/config/stats";
import { Badge } from "@/components/common/Badge";

export function About() {
  const content = siteContent.about;

  return (
    <section
      id="about"
      className="bg-slate-50 py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:items-center lg:gap-20">

        {/* LEFT — ABOUT CONTENT */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.25em] text-[#b58f1d] sm:text-sm">
            {content.eyebrow}
          </p>

          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-[-.035em] text-[#0F172A] sm:mt-4 sm:text-5xl">
            {content.title}
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8">
            {content.description}
          </p>

          {/* Highlights */}
          <ul className="mt-6 space-y-2.5 sm:mt-8 sm:space-y-3">
            {content.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm font-medium leading-6 text-slate-700"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#D4AF37]/20 text-[#a88116]">
                  <Check size={13} />
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — TRUST CARD */}
        <aside className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-950/5 sm:rounded-[1.75rem] sm:p-9">

          <Badge>{company.tagline}</Badge>

          <p className="mt-5 text-lg font-semibold leading-7 tracking-[-.02em] text-[#0F172A] sm:mt-6 sm:text-xl sm:leading-8">
            {content.trustLabel}
          </p>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 divide-x divide-slate-200 sm:mt-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="px-2 first:pl-0 last:pr-0 sm:px-3"
              >
                <p className="text-lg font-semibold text-[#b58f1d] sm:text-xl">
                  {stat.number}
                </p>

                <p className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-xs sm:leading-5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </aside>
      </div>
    </section>
  );
}