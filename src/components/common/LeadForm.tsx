import { type FormEvent, useState } from "react";
import { LoaderCircle, Send } from "lucide-react";

import { leadConfig } from "@/config/leads";
import { searchConfig } from "@/config/search";
import { submitLead, type LeadPayload } from "@/lib/leadSubmission";
import { Button } from "@/components/common/Button";
import { showLeadSuccess } from "@/components/common/LeadSuccessPopup";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";

type LeadFormProps = {
  className?: string;
  source?: string;
  submitLabel?: string;
};

const controlClass =
  "mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20";

export function LeadForm({
  className = "",
  source = leadConfig.propertyEnquiry.source,
  submitLabel = leadConfig.propertyEnquiry.submitLabel,
}: LeadFormProps) {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [error, setError] = useState("");

  const isOnline = useOnlineStatus();

  const fields = leadConfig.fields;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;

    if (!isOnline) {
      setStatus("error");
      setError(
        "You're currently offline. Please reconnect to the internet or contact us via WhatsApp."
      );
      return;
    }

    const form = new FormData(formElement);

    const lead: LeadPayload = {
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      budget: String(form.get("budget") ?? ""),
      propertyType: String(form.get("propertyType") ?? ""),
      location: String(form.get("location") ?? ""),
      message: String(form.get("message") ?? ""),
      source,
    };

    setStatus("submitting");
    setError("");

    try {
  await submitLead(lead);

  showLeadSuccess(leadConfig.propertyEnquiry.successMessage);

  formElement.reset();

  window.location.reload();
} catch (submissionError) {
      setStatus("error");

      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Unable to send your enquiry. Please try again later."
      );
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-xl bg-emerald-50 p-4 text-sm font-medium text-emerald-800">
        {leadConfig.propertyEnquiry.successMessage}
      </p>
    );
  }

  return (
    <form
      className={`grid gap-4 sm:grid-cols-2 ${className}`}
      onSubmit={handleSubmit}
    >
      <label className="text-sm font-medium text-slate-700">
        {fields.name.label}
        <input
          required
          name="name"
          autoComplete="name"
          placeholder={fields.name.placeholder}
          className={controlClass}
        />
      </label>

      <label className="text-sm font-medium text-slate-700">
        {fields.phone.label}
        <input
          required
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          pattern="[0-9]{10}"
          title="Enter a valid 10-digit mobile number"
          placeholder={fields.phone.placeholder}
          className={controlClass}
        />
      </label>

      <label className="text-sm font-medium text-slate-700">
        {fields.email.label}
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder={fields.email.placeholder}
          className={controlClass}
        />
      </label>

      <label className="text-sm font-medium text-slate-700">
        {fields.budget.label}
        <select
          name="budget"
          defaultValue=""
          className={controlClass}
        >
          <option value="">Select budget</option>

          {searchConfig.budgets.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>

      <label className="text-sm font-medium text-slate-700">
        {fields.propertyType.label}
        <select
          name="propertyType"
          defaultValue=""
          className={controlClass}
        >
          <option value="">Select property type</option>

          {searchConfig.propertyTypes.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>

      <label className="text-sm font-medium text-slate-700">
        {fields.location.label}
        <select
          name="location"
          defaultValue=""
          className={controlClass}
        >
          <option value="">Select location</option>

          {searchConfig.locations.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>

      <label className="text-sm font-medium text-slate-700 sm:col-span-2">
        {fields.message.label}
        <textarea
          name="message"
          rows={3}
          placeholder={fields.message.placeholder}
          className={`${controlClass} h-auto py-3`}
        />
      </label>

      {status === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 sm:col-span-2">
          {error}
        </div>
      )}

      {!isOnline && (
        <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-800 sm:col-span-2">
          📶 You're offline. Please reconnect to submit your enquiry.
        </div>
      )}

      <Button
        type="submit"
        disabled={!isOnline || status === "submitting"}
        className="sm:col-span-2 sm:justify-self-start"
      >
        {status === "submitting" ? (
          <>
            <LoaderCircle
              size={17}
              className="mr-2 animate-spin"
            />
            Sending...
          </>
        ) : (
          <>
            <Send
              size={17}
              className="mr-2"
            />
            {submitLabel}
          </>
        )}
      </Button>
    </form>
  );
}