import { company } from "@/config/company";
import { trackEvent } from "@/lib/track";

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
    ...Object.fromEntries(
      Object.entries(lead).filter(([, value]) => value),
    ),
    submittedAt: new Date().toISOString(),
    company: company.name,
  });

  await fetch(company.googleAppsScriptUrl, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type":
        "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: payload.toString(),
  });

  // Google Analytics Event
  trackEvent("generate_lead", {
    form_name: "Contact Form",
    source: lead.source,
    property_type: lead.propertyType,
    budget: lead.budget,
    location: lead.location,
  });
}