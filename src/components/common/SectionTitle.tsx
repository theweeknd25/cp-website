interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  tone?: "light" | "dark";
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  center = true,
  tone = "dark",
}: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : ""}>

      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
          {eyebrow}
        </p>
      )}

      <h2 className={`text-3xl font-bold leading-tight md:text-5xl ${tone === "light" ? "text-white" : "text-[#0F172A]"}`}>
        {title}
      </h2>

      {description && (
        <p className={`mx-auto mt-5 max-w-2xl leading-8 ${tone === "light" ? "text-slate-300" : "text-gray-600"}`}>
          {description}
        </p>
      )}

    </div>
  );
}
