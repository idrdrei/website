"use client";

import { ReactNode } from "react";
import FadeIn from "@/components/FadeIn";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  maxWidth?: "sm" | "md" | "lg";
};

const widths = {
  sm: "max-w-xl",
  md: "max-w-2xl",
  lg: "max-w-3xl",
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  maxWidth = "md",
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <FadeIn>
      <div
        className={`${centered ? "mx-auto text-center" : ""} ${
          widths[maxWidth]
        }`}
      >
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
          {eyebrow}
        </p>

        <h2 className="mt-4 text-3xl font-light tracking-[-0.04em] text-[#111] sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        {description && (
          <div className="mt-6 text-lg leading-8 text-neutral-600">
            {description}
          </div>
        )}
      </div>
    </FadeIn>
  );
}