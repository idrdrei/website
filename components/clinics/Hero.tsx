"use client";

import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1F4E8C]">
            Clinic Locations
          </p>

          <h1 className="mt-4 text-5xl font-light tracking-tight text-neutral-900 md:text-6xl">
            Expert Eye Care,
            <span className="block font-semibold">
              Wherever You Need It.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
            Consultations are available at multiple clinic locations across
            Metro Manila, providing convenient access to comprehensive eye care,
            cataract surgery, laser vision correction, and ocular oncology
            services.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}