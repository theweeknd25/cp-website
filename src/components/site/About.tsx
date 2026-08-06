import { Check } from "lucide-react";
import { company } from "@/config/company";
import { siteContent } from "@/config/content";
import { stats } from "@/config/stats";
import { Badge } from "@/components/common/Badge";

export function About() {
  const content = siteContent.about;
  return <section id="about" className="bg-slate-50 py-16 sm:py-24"><div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:items-center lg:gap-20"><div><p className="text-sm font-semibold uppercase tracking-[.25em] text-[#b58f1d]">{content.eyebrow}</p><h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-.03em] text-[#0F172A] sm:text-5xl">{content.title}</h2><p className="mt-6 max-w-xl leading-8 text-slate-600">{content.description}</p><ul className="mt-8 space-y-3">{content.highlights.map((item) => <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700"><span className="grid h-5 w-5 place-items-center rounded-full bg-[#D4AF37]/20 text-[#a88116]"><Check size={13} /></span>{item}</li>)}</ul></div><aside className="rounded-[1.75rem] bg-white p-7 shadow-xl shadow-slate-950/5 sm:p-9"><Badge>{company.tagline}</Badge><p className="mt-6 text-xl font-medium leading-8 text-[#0F172A]">{content.trustLabel}</p><div className="mt-8 grid grid-cols-3 divide-x divide-slate-200">{stats.map((stat) => <div key={stat.label} className="pl-3 first:pl-0"><p className="text-xl font-semibold text-[#b58f1d]">{stat.number}</p><p className="mt-1 text-xs leading-5 text-slate-500">{stat.label}</p></div>)}</div></aside></div></section>;
}
