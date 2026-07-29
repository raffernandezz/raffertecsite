import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-white p-8",
        hover && "transition-all duration-300 hover:border-gray-200 hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
