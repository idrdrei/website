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
            Laser Vision Correction
          </p>

          <h1 className="mt-4 text-5xl font-light tracking-tight text-neutral-900 md:text-6xl">
            See Life
            <span className="block font-semibold">
              Without Glasses.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
            Modern vision correction offers safe, personalized solutions for
            reducing dependence on glasses and contact lenses. Whether you're
            considering LASIK, SMILE, PRK, or Implantable Collamer Lenses
            (ICL), we'll help determine the option best suited to your eyes,
            lifestyle, and visual goals.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}