"use client";

import FadeIn from "@/components/FadeIn";
import { ReactNode } from "react";

interface ArticleSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function ArticleSection({
  id,
  title,
  children,
}: ArticleSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-36 bg-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-4xl px-6">

        <FadeIn>

          {/* Heading */}
          <h2 className="text-4xl font-light tracking-[-0.04em] text-[#111] lg:text-5xl">
            {title}
          </h2>

          {/* Accent Line */}
          <div className="mt-6 h-1 w-20 rounded-full bg-[#1F4E8C]" />

          {/* Content */}
          <div className="prose prose-lg mt-10 max-w-none prose-headings:font-medium prose-headings:text-[#111] prose-p:text-neutral-700 prose-p:leading-9 prose-li:text-neutral-700 prose-li:leading-8 prose-strong:text-[#111]">

            {children}

          </div>

        </FadeIn>

      </div>
    </section>
  );
}