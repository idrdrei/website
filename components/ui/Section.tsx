"use client";

import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  background?: "white" | "neutral" | "blue";
  spacing?: "normal" | "large";
  className?: string;
};

export default function Section({
  children,
  id,
  background = "white",
  spacing = "normal",
  className = "",
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    neutral: "bg-[#FAFAF7]",
    blue: "bg-[#1F4E8C] text-white",
  };

  const spacings = {
    normal: "py-24 lg:py-36",
    large: "py-32 lg:py-40",
  };

  return (
    <section
      id={id}
      className={`
        scroll-mt-28
        ${backgrounds[background]}
        ${spacings[spacing]}
        ${className}
      `}
    >
      {children}
    </section>
  );
}