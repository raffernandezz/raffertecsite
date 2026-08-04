import { cn } from "@/lib/utils";

export function SectionDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent",
        className
      )}
      aria-hidden="true"
    />
  );
}
