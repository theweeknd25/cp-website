import { developers } from "@/config/developers";

export function DeveloperMarquee() {
  return (
    <section className="overflow-hidden bg-slate-50 py-12">
      {/* Heading */}
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
          Trusted Developer Partners
        </p>
      </div>

      {/* Logo Marquee */}
      <div className="mt-10 overflow-hidden">
        <div className="marquee">
          <div className="marquee-track">
            {[...developers, ...developers].map((developer, index) => (
              <div
                key={`${developer.name}-${index}`}
                className="
                  flex
                  h-24
                  w-44
                  shrink-0
                  items-center
                  justify-center
                  px-3
                  sm:h-28
                  sm:w-56
                  sm:px-5
                "
              >
                {/* Logo Card */}
                <div
                  className="
                    flex
                    h-16
                    w-36
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-4
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-md
                    sm:h-20
                    sm:w-44
                    sm:rounded-2xl
                  "
                >
                  <img
                    src={developer.logo}
                    alt={`${developer.name} logo`}
                    loading="lazy"
                    decoding="async"
                    width={160}
                    height={80}
                    className="
                      max-h-12
                      max-w-full
                      object-contain
                      opacity-90
                      transition-transform
                      duration-300
                      hover:scale-105
                      sm:max-h-14
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}