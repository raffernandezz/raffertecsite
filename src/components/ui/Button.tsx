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
    "group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white before:absolute before:inset-0 before:-z-10 before:translate-y-full before:transition-transform before:duration-300 hover:before:translate-y-0";

  const variants = {
    primary:
      "border border-blue-400/50 bg-[linear-gradient(135deg,#2563eb,#3b82f6)] text-white shadow-[0_10px_30px_rgba(37,99,235,.25),inset_0_1px_rgba(255,255,255,.25)] before:bg-[#174db4] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(37,99,235,.35)] active:translate-y-0",
    secondary:
      "border border-slate-200 bg-white text-[#071426] shadow-sm before:bg-slate-50 hover:border-slate-300",
    ghost: "text-[#071426] before:bg-slate-100 hover:text-blue-700",
    outline:
      "border border-slate-300 bg-transparent text-[#071426] before:bg-blue-50 hover:border-blue-400 hover:text-blue-700",
  };

  const sizes = {
    sm: "min-h-10 px-4 py-2 text-sm",
    md: "min-h-12 px-6 py-3 text-sm",
    lg: "min-h-14 px-7 py-3.5 text-[15px]",
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
