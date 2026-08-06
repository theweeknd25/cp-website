import { leadConfig } from "@/config/leads";
import { LeadForm } from "@/components/common/LeadForm";

export function SearchRequirement() {
  const copy = leadConfig.propertyEnquiry;
  return (
    <section id="search" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="grid overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-xl shadow-slate-950/5 lg:grid-cols-[.8fr_1.2fr]">
          <div className="bg-[#0F172A] p-7 text-white sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#D4AF37]">{copy.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.03em] sm:text-4xl">{copy.title}</h2>
            <p className="mt-5 max-w-md leading-7 text-slate-300">{copy.description}</p>
            <p className="mt-10 border-t border-white/10 pt-5 text-sm leading-6 text-slate-300">No spam. Your information is only used to help us find suitable properties.</p>
          </div>
          <div className="p-6 sm:p-10"><LeadForm /></div>
        </div>
      </div>
    </section>
  );
}
