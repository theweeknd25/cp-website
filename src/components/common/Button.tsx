import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes =
    variant === "primary"
      ? "inline-flex min-h-12 items-center justify-center rounded-xl bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0F172A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e3c15a] hover:shadow-xl hover:shadow-yellow-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
      : variant === "outline"
      ? "inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-transparent px-6 py-3 text-sm font-semibold text-[#0F172A] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
      : "inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-[#0F172A]";

  const disabledClasses = disabled
    ? "cursor-not-allowed opacity-60 pointer-events-none"
    : "";

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        aria-disabled={disabled}
        className={`${classes} ${disabledClasses} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
}