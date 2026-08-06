import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteContent } from "@/config/content";
import { SectionTitle } from "@/components/common/SectionTitle";

export function Faq() {
  const [open, setOpen] = useState(0);
  const content = siteContent.faq;
  return <section id="faq" className="bg-slate-50 py-16 sm:py-24"><div className="mx-auto max-w-3xl px-5 sm:px-6"><SectionTitle eyebrow={content.eyebrow} title={content.title} />
    <div className="mt-10 space-y-3">{content.items.map((item, index) => { const expanded = open === index; return <article key={item.question} className="rounded-xl border border-slate-200 bg-white"><button type="button" className="flex w-full items-center justify-between gap-5 p-5 text-left font-semibold text-[#0F172A]" onClick={() => setOpen(expanded ? -1 : index)} aria-expanded={expanded}><span>{item.question}</span><ChevronDown size={19} className={`shrink-0 transition ${expanded ? "rotate-180 text-[#b58f1d]" : "text-slate-400"}`} /></button>{expanded && <p className="px-5 pb-5 text-sm leading-7 text-slate-600">{item.answer}</p>}</article>; })}</div>
  </div></section>;
}
