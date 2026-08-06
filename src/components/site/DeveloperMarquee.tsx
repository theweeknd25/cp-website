import { developers } from "@/config/developers";

export function DeveloperMarquee() {
  return (
    <section className="overflow-hidden bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
          Trusted Developer Partners
        </p>
      </div>

      <div className="mt-10 marquee">
        <div className="marquee-track">

          {[...developers, ...developers].map((developer, index) => (

            <div
              key={`${developer.name}-${index}`}
              className="flex h-28 w-56 items-center justify-center"
            >
              <img
                src={developer.logo}
                alt={developer.name}
                loading="lazy"
                className="max-h-20 max-w-full object-contain opacity-90 transition-all duration-500 hover:scale-110"
              />
            </div>

          ))}

        </div>
      </div>
    </section>
  );
}