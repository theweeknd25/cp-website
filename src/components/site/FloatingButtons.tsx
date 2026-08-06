import { MessageCircle, Phone } from "lucide-react";
import { company } from "@/config/company";

export function FloatingButtons() {
  return <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3"><a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-full bg-emerald-500 text-white shadow-lg transition hover:-translate-y-1 hover:bg-emerald-600" aria-label="Message us on WhatsApp"><MessageCircle size={21} /></a><a href={`tel:${company.phone}`} className="grid h-12 w-12 place-items-center rounded-full bg-[#D4AF37] text-[#0F172A] shadow-lg transition hover:-translate-y-1 hover:bg-[#e3c15a]" aria-label="Call us"><Phone size={20} /></a></div>;
}
