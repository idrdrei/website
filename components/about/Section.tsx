import FadeIn from "@/components/FadeIn";
import { ReactNode } from "react";

interface SectionProps {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  background?: "white" | "cream";
  children: ReactNode;
}

export default function Section({
  eyebrow,
  title,
  description,
  background = "white",
  children,
}: SectionProps) {
  return (
    <section
      className={`${
        background === "cream" ? "bg-[#FAFAF7]" : "bg-white"
      } py-32 md:py-40`}
    >
      <div className="mx-auto max-w-7xl px-8 lg:px-16">

        {(eyebrow || title || description) && (
          <FadeIn>
            {eyebrow && (
              <p className="text-sm uppercase tracking-[0.35em] text-[#1F4E8C]">
                {eyebrow}
              </p>
            )}

            {title && (
              <h2 className="mt-6 text-5xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-8 max-w-2xl text-lg leading-8 text-black/65">
                {description}
              </p>
            )}
          </FadeIn>
        )}

        <div className="mt-20">
          {children}
        </div>

      </div>
    </section>
  );
}