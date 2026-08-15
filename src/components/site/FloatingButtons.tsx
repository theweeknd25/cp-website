import { MessageCircle, Phone } from "lucide-react";

import { trackEvent } from "@/lib/track";
import { company } from "@/config/company";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-3 z-40 flex flex-col gap-2.5 sm:bottom-5 sm:right-5 sm:gap-3">
      <a
        href={`https://wa.me/${company.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        onClick={() =>
          trackEvent("whatsapp_click", {
            location: "Floating Button",
          })
        }
        className="grid h-11 w-11 place-items-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-950/20 transition hover:-translate-y-1 hover:bg-emerald-600 sm:h-12 sm:w-12"
        aria-label="Message us on WhatsApp"
      >
        <MessageCircle size={20} />
      </a>

      <a
        href={`tel:${company.phone}`}
        onClick={() =>
          trackEvent("phone_call_click", {
            location: "Floating Button",
          })
        }
        className="grid h-11 w-11 place-items-center rounded-full bg-[#D4AF37] text-[#0F172A] shadow-lg shadow-slate-950/20 transition hover:-translate-y-1 hover:bg-[#e3c15a] sm:h-12 sm:w-12"
        aria-label="Call us"
      >
        <Phone size={19} />
      </a>
    </div>
  );
}