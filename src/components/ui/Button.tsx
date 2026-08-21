import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  external,
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-[0.98]";

  const variants = {
    primary:
      "border border-blue-500/40 bg-blue-600 text-white shadow-[0_8px_24px_rgba(37,99,235,0.22)] hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_12px_28px_rgba(37,99,235,0.28)] active:translate-y-0",
    secondary:
      "border border-slate-200 bg-white text-[#071426] shadow-sm hover:border-slate-300 hover:bg-slate-50",
    ghost: "text-[#071426] hover:bg-slate-100 hover:text-blue-700",
    outline:
      "border border-slate-300 bg-transparent text-[#071426] hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-50/50 hover:text-blue-700 active:translate-y-0",
  };

  const sizes = {
    sm: "min-h-10 px-4 py-2 text-sm",
    md: "min-h-11 px-5 py-2.5 text-sm",
    lg: "min-h-12 px-6 py-3 text-[15px]",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href && !onClick) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
