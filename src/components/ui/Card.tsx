import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "light" | "dark";
}

export function Card({
  children,
  className,
  hover = true,
  variant = "dark",
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6 sm:p-8",
        variant === "dark"
          ? "border-white/10 bg-white/[0.04]"
          : "border-border bg-white",
        hover &&
          variant === "dark"
          ? "transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
          : hover
            ? "transition-all duration-300 hover:border-gray-200 hover:shadow-lg"
            : "",
        className
      )}
    >
      {children}
    </div>
  );
}
