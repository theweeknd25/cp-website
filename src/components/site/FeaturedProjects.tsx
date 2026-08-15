import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { projects } from "@/config/projects";

export function FeaturedProjects() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slide = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector<HTMLElement>(
      "[data-project-card]"
    );

    if (!card) return;

    const gap = 24;
    const amount = card.offsetWidth + gap;

    sliderRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Featured Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-[#0F172A] lg:text-5xl">
            Verified Residential Projects
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Premium homes from Pune&apos;s trusted developers.
          </p>

        </div>

        {/* MOBILE SLIDER CONTROLS */}
        <div className="mt-10 flex justify-end gap-2 lg:hidden">

          <button
            type="button"
            onClick={() => slide("left")}
            aria-label="Previous project"
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-[#0F172A] shadow-sm transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={() => slide("right")}
            aria-label="Next project"
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-[#0F172A] shadow-sm transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        {/* PROJECTS */}
        <div
          ref={sliderRef}
          className="
            mt-6
            flex
            gap-6
            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
            pb-5
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            lg:mt-16
            lg:grid
            lg:grid-cols-3
            lg:gap-8
            lg:overflow-visible
            lg:pb-0
          "
        >

          {projects.map((project) => (

            <article
              key={project.name}
              data-project-card
              className="
                group
                min-w-[calc(100%-8px)]
                snap-center
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
                lg:min-w-0
              "
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={450}
                  className="
                    h-64
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                    sm:h-72
                  "
                />

                {/* PRICE */}
                <span className="absolute left-5 top-5 rounded-full bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-[#0F172A] shadow-lg">
                  {project.price}
                </span>

              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-7">

                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#0F172A]">
                  {project.name}
                </h3>

                <p className="mt-2 text-slate-500">
                  {project.location}
                </p>

                <div className="mt-6 flex items-end justify-between gap-4">

                  <div className="min-w-0">

                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                      Developer
                    </p>

                    <p className="mt-1 truncate font-medium text-[#0F172A]">
                      {project.builder}
                    </p>

                  </div>

                  <a
                    href="#contact"
                    aria-label={`Book a site visit for ${project.name}`}
                    className="
                      shrink-0
                      rounded-xl
                      bg-[#D4AF37]
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-[#0F172A]
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#e6bf4d]
                      hover:shadow-lg
                    "
                  >
                    Book Visit
                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* MOBILE SLIDER HINT */}
        <p className="mt-2 text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-400 lg:hidden">
          Swipe to explore projects
        </p>

      </div>
    </section>
  );
}