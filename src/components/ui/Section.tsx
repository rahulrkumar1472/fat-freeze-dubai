import type { ReactNode } from "react";

type SectionTone = "default" | "soft" | "elevated";
type SectionSize = "md" | "lg" | "xl";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: SectionTone;
  size?: SectionSize;
};

export function Section({
  children,
  className,
  id,
  tone = "default",
  size = "lg",
}: SectionProps) {
  return (
    <section
      id={id}
      className={[
        "lx-section",
        `lx-section-${size}`,
        tone === "soft" ? "lx-section-soft" : "",
        tone === "elevated" ? "lx-section-elevated" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </section>
  );
}
