import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  theme = "dark",
  className,
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <p
          className={cn(
            "technical-label mb-4 text-[10px]",
            isDark ? "text-brand" : "text-brand"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "font-[family-name:'Space_Grotesk_Variable'] text-3xl font-semibold tracking-[-.04em] sm:text-4xl lg:text-[3.15rem] lg:leading-[1.08]",
          isDark ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-xl text-base leading-7",
            isDark ? "text-gray-400" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
