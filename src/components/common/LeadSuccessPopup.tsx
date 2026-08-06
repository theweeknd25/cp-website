import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";

const successKey = "monarch:lead-success";

export function showLeadSuccess(message: string) {
  sessionStorage.setItem(successKey, message);
}

export function LeadSuccessPopup() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const savedMessage = sessionStorage.getItem(successKey);
    if (savedMessage) {
      sessionStorage.removeItem(successKey);
      setMessage(savedMessage);
    }
  }, []);

  if (!message) return null;

  return <div className="fixed inset-0 z-[60] grid place-items-center bg-[#0b1120]/55 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="lead-success-title"><div className="relative w-full max-w-md rounded-[1.5rem] bg-white p-7 text-center shadow-2xl shadow-slate-950/30 sm:p-9"><button type="button" onClick={() => setMessage(null)} className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-slate-500 transition hover:bg-slate-100" aria-label="Close message"><X size={18} /></button><span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#D4AF37]/20 text-[#a88116]"><Check size={27} strokeWidth={2.5} /></span><p className="mt-6 text-xs font-semibold uppercase tracking-[.2em] text-[#b58f1d]">Enquiry received</p><h2 id="lead-success-title" className="mt-3 text-2xl font-semibold tracking-[-.03em] text-[#0F172A]">We’ll take it from here.</h2><p className="mt-3 leading-7 text-slate-600">{message}</p><button type="button" onClick={() => setMessage(null)} className="mt-7 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#0F172A] px-5 text-sm font-semibold text-white transition hover:bg-slate-800">Continue exploring</button></div></div>;
}
