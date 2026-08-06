"use client";

import FadeIn from "@/components/FadeIn";
import ReadingTime from "./ReadingTime";

export default function ArticleHero() {
  return (
    <section
      id="overview"
      className="scroll-mt-36 bg-[#FAFAF7] pt-28 pb-24 lg:pt-36 lg:pb-32"
    >
      <div className="mx-auto max-w-5xl px-6">

        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#1F4E8C]">
            Patient Guide
          </p>

          <h1 className="mt-6 text-5xl font-light leading-[0.92] tracking-[-0.05em] text-[#111] md:text-6xl lg:text-7xl">
            Understanding
            <span className="mt-3 block font-medium">
              Choroidal Melanoma
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-600">
            A simple guide for patients and families to understand
            choroidal melanoma, including its symptoms, diagnosis,
            treatment options, and what to expect.
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mt-12 flex flex-wrap items-center gap-4">

            <ReadingTime minutes={5} />

            <span className="text-neutral-300">•</span>

            <p className="text-sm text-neutral-500">
              Updated August 2026
            </p>

          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-16 rounded-[36px] border border-[#1F4E8C]/10 bg-[#1F4E8C]/5 p-8 md:p-10">

            <h2 className="text-2xl font-medium tracking-tight text-[#111]">
              A message from Dr. Martin
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-700">
              Hearing the words{" "}
              <span className="font-medium text-[#111]">
                "eye cancer"
              </span>{" "}
              can feel overwhelming. It's completely natural to have
              questions and concerns.
            </p>

            <p className="mt-5 text-lg leading-8 text-neutral-700">
              This guide was written to explain choroidal melanoma in
              clear, everyday language. My goal is to help you better
              understand the condition, the tests you may need, and the
              treatments available so you can feel more informed and
              prepared for the next steps.
            </p>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}