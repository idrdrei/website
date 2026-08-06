"use client";

import FadeIn from "@/components/FadeIn";

export default function Philosophy() {
  return (
    <section 
    id="philosophy"
    className="bg-[#FAFAF7] py-20 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-16">

        <FadeIn>
          <div className="text-center">

            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
              My Philosophy
            </p>

            <blockquote className="mt-10 text-2xl font-light leading-relaxed tracking-[-0.03em] text-[#111] sm:mt-12 sm:text-3xl lg:text-5xl">
              Whether managing a complex eye tumor or performing routine
              cataract surgery, the principles remain the same:
              <span className="font-normal">
                {" "}
                understand the problem, explain the options clearly, and
                deliver treatment with precision and care.
              </span>
            </blockquote>

            <div className="mx-auto mt-10 h-px w-16 bg-neutral-300 sm:mt-12 sm:w-20" />

            <p className="mt-6 text-base text-neutral-500 sm:mt-8 sm:text-lg">
              — Dr. Andrei Martin
            </p>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}