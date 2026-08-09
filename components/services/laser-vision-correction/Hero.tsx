"use client";

import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-8 text-center lg:px-16">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1F4E8C]">
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

          <div className="mx-auto mt-10 inline-flex items-center rounded-full border border-[#1F4E8C]/10 bg-[#F8FAFC] px-6 py-3 text-sm text-neutral-700 shadow-sm">
            <span className="font-semibold text-[#1F4E8C]">
              Member,
            </span>

            <span className="ml-2">
              Refractive Surgery Society of the Philippines
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}