"use client";

import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section 
    id="overview"
    className="relative overflow-hidden bg-white pt-36 pb-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1F4E8C]">
            Cataract Surgery
          </p>

          <h1 className="mt-4 text-5xl font-light tracking-tight text-neutral-900 md:text-6xl">
            Restoring
            <span className="block font-semibold">
              Clearer Vision.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
            Cataracts are one of the most common causes of blurred vision,
            especially with aging. Modern cataract surgery is a safe and
            effective procedure that replaces the cloudy natural lens with a
            clear artificial lens, helping restore sharper vision and improve
            quality of life.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}