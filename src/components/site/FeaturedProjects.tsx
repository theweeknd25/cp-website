import { projects } from "@/config/projects";

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Featured Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#0F172A] lg:text-5xl">
            Verified Residential Projects
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Premium homes from Pune's trusted developers.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {projects.map((project) => (

            <article
              key={project.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={450}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"

                  />

                <span className="absolute left-5 top-5 rounded-full bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-[#0F172A]">

                  {project.price}

                </span>

              </div>

              <div className="p-7">

                <h3 className="text-2xl font-semibold text-[#0F172A]">

                  {project.name}

                </h3>

                <p className="mt-2 text-slate-500">

                  {project.location}

                </p>

                <div className="mt-6 flex items-center justify-between">

                  <div>

                    <p className="text-xs uppercase tracking-widest text-slate-400">
                      Developer
                    </p>

                    <p className="font-medium text-[#0F172A]">

                      {project.builder}

                    </p>

                  </div>

                  <a
                      href="#contact"
                      aria-label={`Book a site visit for ${project.name}`}
                      className="rounded-xl bg-[#D4AF37] px-5 py-3 font-semibold text-[#0F172A] transition hover:bg-[#e6bf4d]"
                    >
                      Book Visit
                    </a>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}