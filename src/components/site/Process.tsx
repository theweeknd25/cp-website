import { siteContent } from "@/config/content";
import { SectionTitle } from "@/components/common/SectionTitle";

export function Process() {
  const content = siteContent.process;

  return (
    <section
      id="process"
      className="bg-[#0F172A] py-12 text-white sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Section Heading */}
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          description={undefined}
          tone="light"
        />

        {/* Process Steps */}
        <div className="mt-9 grid gap-7 sm:mt-10 sm:gap-9 md:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-0">

          {content.items.map((item, index) => (
            <article
              key={item.number}
              className="
                relative
                border-white/15
                lg:border-l
                lg:px-7
                lg:first:pl-0
              "
            >
              {/* Number */}
              <span
                className="
                  text-xs
                  font-semibold
                  tracking-[.2em]
                  text-[#D4AF37]
                  sm:text-sm
                "
              >
                {item.number}
              </span>

              {/* Title */}
              <h3
                className="
                  mt-3
                  text-lg
                  font-semibold
                  leading-6
                  sm:mt-4
                  sm:text-xl
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-2
                  max-w-sm
                  text-sm
                  leading-6
                  text-slate-300
                "
              >
                {item.description}
              </p>

              {/* Desktop connector */}
              {index < content.items.length - 1 && (
                <span
                  className="
                    absolute
                    right-0
                    top-2
                    hidden
                    h-px
                    w-5
                    bg-[#D4AF37]
                    lg:block
                  "
                />
              )}
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}