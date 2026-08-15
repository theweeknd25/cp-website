import { ArrowRight, ShieldCheck } from "lucide-react";

import { trackEvent } from "@/lib/track";
import { hero } from "@/config/hero";
import { stats } from "@/config/stats";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-x-clip bg-[#0F172A] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_45%,rgba(212,175,55,.16),transparent_28%),linear-gradient(135deg,#0b1120_0%,#0f172a_58%,#182235_100%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6">
        <div className="grid min-h-[100svh] min-w-0 items-center gap-10 pb-14 pt-32 lg:min-h-[84vh] lg:grid-cols-[1.04fr_.96fr] lg:gap-12 lg:pb-8 lg:pt-24">
          {/* LEFT */}
          <div className="min-w-0">
            <div className="w-fit max-w-full">
              <Badge>{hero.badge}</Badge>
            </div>

            <h1 className="mt-6 max-w-3xl break-words text-[2.6rem] font-semibold leading-[1.05] tracking-[-.05em] sm:text-5xl lg:text-6xl xl:text-7xl">
              {hero.lines[0]}
              <br />
              {hero.lines[1]}
              <br />
              <span className="text-[#D4AF37]">{hero.lines[2]}</span>
            </h1>

            <p className="mt-6 max-w-xl break-words text-[17px] leading-8 text-slate-300 sm:text-lg">
              {hero.description}
            </p>

            <div className="mt-8 flex min-w-0 flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Button
                href={hero.primaryButton.href}
                onClick={() =>
                  trackEvent("hero_primary_cta", {
                    button: hero.primaryButton.text,
                    location: "Hero",
                  })
                }
              >
                {hero.primaryButton.text}
                <ArrowRight size={18} className="ml-2 shrink-0" />
              </Button>

              <Button
                href={hero.secondaryButton.href}
                variant="secondary"
                onClick={() =>
                  trackEvent("hero_secondary_cta", {
                    button: hero.secondaryButton.text,
                    location: "Hero",
                  })
                }
              >
                {hero.secondaryButton.text}
                <ArrowRight size={18} className="ml-2 shrink-0" />
              </Button>
            </div>

            <div className="mt-5 flex min-w-0 items-start gap-2 text-sm text-slate-400">
              <ShieldCheck
                size={16}
                className="mt-0.5 shrink-0 text-[#D4AF37]"
              />
              <span className="min-w-0 break-words">
                Verified Developers • Premium Projects • Expert Guidance
              </span>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 divide-x divide-white/10 sm:mt-14">
              {stats.map((item) => (
                <div key={item.label} className="min-w-0 pl-3 first:pl-0">
                  <p className="text-xl font-semibold text-[#D4AF37] sm:text-2xl">
                    {item.number}
                  </p>

                  <p className="mt-1 break-words pr-2 text-xs leading-5 text-slate-300 sm:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative mx-auto mt-4 w-full min-w-0 max-w-md lg:mt-0 lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#D4AF37]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-800/40 p-2 shadow-[0_25px_80px_rgba(0,0,0,.35)]">
              <img
                src={hero.image}
                alt="Premium residential tower in Pune"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={800}
                height={600}
                className="aspect-[4/3] w-full rounded-[1.25rem] object-cover object-center"
              />
            </div>

            <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-2xl border border-white/10 bg-white/10 p-4 shadow-xl backdrop-blur-xl sm:-bottom-6 sm:left-6 sm:max-w-none sm:p-5">
              <p className="text-sm font-semibold text-[#D4AF37]">
                ✓ MahaRERA Registered
              </p>

              <p className="mt-2 text-sm text-slate-200">
                ✓ Verified Projects
              </p>

              <p className="mt-2 text-sm text-slate-200">
                ✓ Expert Property Guidance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}