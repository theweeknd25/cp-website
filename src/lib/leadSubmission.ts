import { company } from "@/config/company";

export type LeadPayload = {
  name: string;
  phone: string;
  email?: string;
  budget?: string;
  propertyType?: string;
  location?: string;
  message?: string;
  source: string;
};

export async function submitLead(lead: LeadPayload) {
  if (!company.googleAppsScriptUrl) {
    throw new Error("Lead endpoint is not configured.");
  }

  const payload = new URLSearchParams({
    ...Object.fromEntries(Object.entries(lead).filter(([, value]) => value)),
    submittedAt: new Date().toISOString(),
    company: company.name,
  });

  // Apps Script web apps commonly redirect and do not return CORS headers. no-cors
  // sends reliably; the UI reports a successful dispatch once the browser accepts it.
  await fetch(company.googleAppsScriptUrl, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
    body: payload.toString(),
  });
}
