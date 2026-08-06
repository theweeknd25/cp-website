import { CalendarCheck, FileCheck2, Search, ShieldCheck } from "lucide-react";

import { siteContent } from "@/config/content";
import { SectionTitle } from "@/components/common/SectionTitle";

const icons = { Search, ShieldCheck, CalendarCheck, FileCheck2 };

export function Services() {
  const content = siteContent.services;
  return <section id="services" className="bg-white py-16 sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-6"><SectionTitle eyebrow={content.eyebrow} title={content.title} description={content.description} />
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5">{content.items.map((item) => { const Icon = icons[item.icon]; return <article key={item.title} className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:shadow-xl hover:shadow-slate-900/5"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#D4AF37]/10 text-[#a88116] transition group-hover:bg-[#D4AF37] group-hover:text-[#0F172A]"><Icon size={21} /></span><h3 className="mt-6 text-lg font-semibold text-[#0F172A]">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p></article>; })}</div>
  </div></section>;
}
