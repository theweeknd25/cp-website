import { ArrowUpRight, BadgeCheck, ShieldCheck } from "lucide-react";

import { company } from "@/config/company";
import { siteContent } from "@/config/content";
import { Button } from "@/components/common/Button";

export function Verification() {
  const content = siteContent.verification;

  return (
    <section id="verification" className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="grid overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 sm:rounded-[1.75rem] lg:grid-cols-[1.25fr_.75fr]">
          <div className="p-6 sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[.22em] text-[#b58f1d] sm:text-xs">
              {content.eyebrow}
            </p>

            <h2 className="mt-2.5 text-3xl font-semibold leading-tight tracking-[-.03em] text-[#0F172A] sm:mt-3 sm:text-4xl">
              {content.title}
            </h2>

            <p className="mt-4 max-w-xl text-[15px] leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-7">
              {content.description}
            </p>

            <div className="mt-6 flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 sm:mt-8 sm:p-4">
              <BadgeCheck
                className="shrink-0 text-[#a88116]"
                size={24}
                aria-hidden="true"
              />

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[.14em] text-slate-500 sm:text-xs">
                  {content.certificateLabel}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-[#0F172A] sm:mt-1 sm:text-base">
                  {company.mahaReraNumber}
                </p>
              </div>
            </div>

            <Button
              href={company.certificate}
              variant="outline"
              className="mt-5 sm:mt-6"
            >
              {content.cta}
              <ArrowUpRight size={16} className="ml-2" />
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center bg-[#0F172A] px-6 py-7 text-center text-white sm:p-8">
            <div className="rounded-xl bg-white p-2.5 sm:rounded-2xl sm:p-3">
              <img
                src={company.verificationQR}
                alt="QR code for MahaRERA verification"
                loading="lazy"
                decoding="async"
                width={128}
                height={128}
                className="h-24 w-24 object-contain sm:h-32 sm:w-32"
              />
            </div>

            <p className="mt-4 text-sm font-semibold sm:mt-6">
              Independent verification
            </p>

            <p className="mt-1.5 max-w-52 text-xs leading-5 text-slate-300 sm:mt-2 sm:max-w-48">
              Scan or use the registration number to verify the channel partner
              details.
            </p>

            <ShieldCheck
              className="mt-4 text-[#D4AF37] sm:mt-6"
              size={22}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}