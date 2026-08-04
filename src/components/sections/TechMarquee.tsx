"use client";

const items = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Supabase",
  "Node.js",
  "Stripe",
  "APIs & Integrações",
  "Automações",
  "Design Systems",
  "Performance",
  "SEO",
];

export function TechMarquee() {
  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden border-b border-slate-200/80 bg-[#f8fafc] py-3.5"
      aria-hidden="true"
    >
      <div className="flex animate-marquee gap-10 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-3 text-xs font-medium tracking-wide text-slate-500"
          >
            <span className="h-1 w-1 rounded-full bg-blue-500/60" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
