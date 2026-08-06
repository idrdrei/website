"use client";

import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32 lg:pt-32 lg:pb-40">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1F4E8C]">
            Patient Education
          </p>

          <h1 className="mt-5 text-5xl font-light leading-[0.95] tracking-[-0.04em] text-neutral-900 md:text-6xl lg:text-7xl">
            Eye Health
            <span className="block font-medium">
              Education & Resources
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600 md:text-xl md:leading-9">
            Explore evidence-based articles and videos on{" "}
            <span className="font-medium text-neutral-900">
              cataracts
            </span>
            ,{" "}
            <span className="font-medium text-neutral-900">
              LASIK
            </span>
            ,{" "}
            <span className="font-medium text-neutral-900">
              SMILE Pro
            </span>
            ,{" "}
            <span className="font-medium text-neutral-900">
              eye tumors
            </span>
            ,{" "}
            <span className="font-medium text-neutral-900">
              retinal diseases
            </span>
            ,{" "}
            <span className="font-medium text-neutral-900">
              diabetic eye disease
            </span>
            ,{" "}
            <span className="font-medium text-neutral-900">
              glaucoma
            </span>
            , dry eye, and comprehensive eye care. Learn about symptoms,
            treatment options, surgery, recovery, and ways to protect your
            vision through trusted ophthalmologist-reviewed information.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}