import { leadConfig } from "@/config/leads";
import { LeadForm } from "@/components/common/LeadForm";

export function SearchRequirement() {
  const copy = leadConfig.propertyEnquiry;

  return (
    <section
      id="search"
      className="bg-slate-50 py-12 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        <div
          className="
            grid
            overflow-hidden
            rounded-[1.5rem]
            border border-slate-200
            bg-white
            shadow-xl shadow-slate-950/5
            lg:grid-cols-[.8fr_1.2fr]
            lg:rounded-[1.75rem]
          "
        >

          {/* LEFT — INFORMATION */}

          <div className="bg-[#0F172A] p-6 text-white sm:p-10">

            <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#D4AF37]">
              {copy.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-.03em] sm:text-4xl">
              {copy.title}
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-300 sm:mt-5 sm:text-base sm:leading-7">
              {copy.description}
            </p>

            <p className="mt-7 border-t border-white/10 pt-4 text-sm leading-6 text-slate-300 sm:mt-10 sm:pt-5">
              No spam. Your information is only used to help us find suitable
              properties.
            </p>

          </div>

          {/* RIGHT — FORM */}

          <div className="p-5 sm:p-8 lg:p-10">
            <LeadForm />
          </div>

        </div>

      </div>
    </section>
  );
}