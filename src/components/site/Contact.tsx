import { Clock3, Mail, Phone } from "lucide-react";

import { company } from "@/config/company";
import { siteContent } from "@/config/content";
import { LeadForm } from "@/components/common/LeadForm";

export function Contact() {
  const content = siteContent.contact;

  return (
    <section id="contact" className="bg-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[.22em] text-[#b58f1d] sm:text-xs">
            {content.eyebrow}
          </p>

          <h2 className="mt-2.5 text-3xl font-semibold leading-tight tracking-[-.03em] text-[#0F172A] sm:mt-3 sm:text-5xl">
            {content.title}
          </h2>

          <p className="mt-4 max-w-md text-[15px] leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-7">
            {content.description}
          </p>

          <div className="mt-6 space-y-3 text-sm text-slate-700 sm:mt-8 sm:space-y-4">
            <a
              href={`tel:${company.phone}`}
              className="flex items-center gap-3 transition hover:text-[#a88116]"
            >
              <Phone size={17} className="shrink-0 text-[#a88116]" />
              {company.phone}
            </a>

            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-3 transition hover:text-[#a88116]"
            >
              <Mail size={17} className="shrink-0 text-[#a88116]" />
              {company.email}
            </a>

            <p className="flex items-center gap-3">
              <Clock3 size={17} className="shrink-0 text-[#a88116]" />
              {company.workingHours}
            </p>
          </div>
        </div>

        <div className="rounded-[1.5rem] bg-slate-50 p-5 sm:rounded-[1.75rem] sm:p-9">
          <LeadForm
            source={content.source}
            submitLabel={content.submitLabel}
          />
        </div>
      </div>
    </section>
  );
}