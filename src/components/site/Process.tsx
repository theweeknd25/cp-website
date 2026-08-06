import { siteContent } from "@/config/content";
import { SectionTitle } from "@/components/common/SectionTitle";

export function Process() {
  const content = siteContent.process;
  return <section id="process" className="bg-[#0F172A] py-16 text-white sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-6"><SectionTitle eyebrow={content.eyebrow} title={content.title} description={undefined} tone="light" />
    <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">{content.items.map((item, index) => <article key={item.number} className="relative border-white/15 lg:border-l lg:px-7 lg:first:pl-0"><span className="text-sm font-semibold tracking-[.2em] text-[#D4AF37]">{item.number}</span><h3 className="mt-5 text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>{index < content.items.length - 1 && <span className="absolute right-0 top-2 hidden h-px w-5 bg-[#D4AF37] lg:block" />}</article>)}</div>
  </div></section>;
}
