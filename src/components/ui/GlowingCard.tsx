import { cn } from "@/lib/utils";

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  variant?: "blue" | "coral";
}

/** Card com borda animada (estilo Magic UI) */
export function GlowingCard({
  children,
  className,
  innerClassName,
  variant = "blue",
}: GlowingCardProps) {
  return (
    <div
      className={cn(
        "border-beam-wrap lg:rounded-3xl",
        variant === "coral" && "border-beam-coral",
        className
      )}
    >
      <div className={cn("border-beam-inner lg:rounded-[calc(1.5rem-1px)]", innerClassName)}>
        {children}
      </div>
    </div>
  );
}
