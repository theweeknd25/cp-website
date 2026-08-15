import {
  CalendarCheck,
  FileCheck2,
  Search,
  ShieldCheck,
} from "lucide-react";

import { siteContent } from "@/config/content";
import { SectionTitle } from "@/components/common/SectionTitle";

const icons = {
  Search,
  ShieldCheck,
  CalendarCheck,
  FileCheck2,
};

export function Services() {
  const content = siteContent.services;

  return (
    <section
      id="services"
      className="bg-white py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Section Heading */}
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        {/* Service Cards */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:mt-12 lg:grid-cols-4">

          {content.items.map((item) => {
            const Icon = icons[item.icon];

            return (
              <article
                key={item.title}
                className="
                  group
                  h-full
                  rounded-2xl
                  border border-slate-200
                  bg-white
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#D4AF37]/50
                  hover:shadow-xl
                  hover:shadow-slate-900/5
                  sm:rounded-3xl
                  sm:p-6
                "
              >
                {/* Icon */}
                <span
                  className="
                    grid
                    h-10
                    w-10
                    place-items-center
                    rounded-xl
                    bg-[#D4AF37]/10
                    text-[#a88116]
                    transition-all
                    duration-300
                    group-hover:bg-[#D4AF37]
                    group-hover:text-[#0F172A]
                    sm:h-11
                    sm:w-11
                  "
                >
                  <Icon size={20} />
                </span>

                {/* Title */}
                <h3
                  className="
                    mt-4
                    text-base
                    font-semibold
                    leading-6
                    text-[#0F172A]
                    sm:mt-6
                    sm:text-lg
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-2
                    text-xs
                    leading-5
                    text-slate-600
                    sm:mt-3
                    sm:text-sm
                    sm:leading-6
                  "
                >
                  {item.description}
                </p>
              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
}