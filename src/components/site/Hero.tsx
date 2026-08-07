import { ArrowRight } from "lucide-react";

import { hero } from "@/config/hero";
import { stats } from "@/config/stats";

import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0F172A] text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_45%,rgba(212,175,55,.16),transparent_28%),linear-gradient(135deg,#0b1120_0%,#0f172a_58%,#182235_100%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid min-h-[82svh] items-center gap-8 pb-10 pt-28 lg:min-h-[84vh] lg:grid-cols-[1.04fr_.96fr] lg:gap-12 lg:pb-8 lg:pt-24">

          {/* LEFT */}
          <div>

            <div className="inline-flex">
              <Badge>{hero.badge}</Badge>
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-.04em] sm:text-5xl lg:text-6xl xl:text-7xl">
              {hero.lines[0]}
              <br />
              {hero.lines[1]}
              <br />
              <span className="text-[#D4AF37]">
                {hero.lines[2]}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              {hero.description}
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">

              <Button href={hero.primaryButton.href}>
                {hero.primaryButton.text}
                <ArrowRight size={18} className="ml-2" />
              </Button>

              <Button
                href={hero.secondaryButton.href}
                variant="secondary"
              >
                {hero.secondaryButton.text}
                <ArrowRight size={18} className="ml-2" />
              </Button>

            </div>

            {/* Stats */}

            <div className="mt-10 grid max-w-lg grid-cols-3 divide-x divide-white/10 sm:mt-14">

              {stats.map((item) => (

                <div
                  key={item.label}
                  className="pl-3 first:pl-0"
                >

                  <p className="text-xl font-semibold text-[#D4AF37] sm:text-2xl">
                    {item.number}
                  </p>

                  <p className="mt-1 pr-2 text-xs leading-5 text-slate-300 sm:text-sm">
                    {item.label}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">

            <div className="absolute -inset-4 rounded-[2rem] bg-[#D4AF37]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-800/40 p-2 shadow-2xl shadow-black/30">

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

            {/* Floating Trust Card */}

            <div className="absolute -bottom-6 left-6 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl shadow-xl">

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