import { Clock3, Mail, Phone } from "lucide-react";
import { company } from "@/config/company";
import { siteContent } from "@/config/content";
import { LeadForm } from "@/components/common/LeadForm";

export function Contact() {
  const content = siteContent.contact;
  return <section id="contact" className="bg-white py-16 sm:py-24"><div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><p className="text-xs font-semibold uppercase tracking-[.22em] text-[#b58f1d]">{content.eyebrow}</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.03em] text-[#0F172A] sm:text-5xl">{content.title}</h2><p className="mt-5 max-w-md leading-7 text-slate-600">{content.description}</p><div className="mt-8 space-y-4 text-sm text-slate-700"><a href={`tel:${company.phone}`} className="flex items-center gap-3 transition hover:text-[#a88116]"><Phone size={18} className="text-[#a88116]" />{company.phone}</a><a href={`mailto:${company.email}`} className="flex items-center gap-3 transition hover:text-[#a88116]"><Mail size={18} className="text-[#a88116]" />{company.email}</a><p className="flex items-center gap-3"><Clock3 size={18} className="text-[#a88116]" />{company.workingHours}</p></div></div><div className="rounded-[1.75rem] bg-slate-50 p-6 sm:p-9"><LeadForm source={content.source} submitLabel={content.submitLabel} /></div></div></section>;
}
