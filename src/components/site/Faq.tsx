import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { siteContent } from "@/config/content";
import { SectionTitle } from "@/components/common/SectionTitle";

export function Faq() {
  const [open, setOpen] = useState(0);
  const content = siteContent.faq;

  return (
    <section id="faq" className="bg-slate-50 py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <SectionTitle eyebrow={content.eyebrow} title={content.title} />

        <div className="mt-7 space-y-2.5 sm:mt-10 sm:space-y-3">
          {content.items.map((item, index) => {
            const expanded = open === index;

            return (
              <article
                key={item.question}
                className="rounded-xl border border-slate-200 bg-white"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 p-4 text-left text-[15px] font-semibold leading-6 text-[#0F172A] sm:gap-5 sm:p-5 sm:text-base"
                  onClick={() => setOpen(expanded ? -1 : index)}
                  aria-expanded={expanded}
                >
                  <span>{item.question}</span>

                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition ${
                      expanded
                        ? "rotate-180 text-[#b58f1d]"
                        : "text-slate-400"
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {expanded && (
                  <p className="px-4 pb-4 text-sm leading-6 text-slate-600 sm:px-5 sm:pb-5 sm:leading-7">
                    {item.answer}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}