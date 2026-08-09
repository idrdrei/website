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

          <div className="mx-auto mt-10 inline-flex flex-col items-center rounded-[24px] border border-[#1F4E8C]/10 bg-[#F8FAFC] px-8 py-5 text-center shadow-sm">
  <p className="text-lg font-semibold text-neutral-900">
    Dr. Andrei Martin
  </p>

  <p className="mt-2 text-sm text-neutral-600">
    <span className="font-semibold text-[#1F4E8C]">
      Member
    </span>{" "}
    • Refractive Surgery Society of the Philippines
  </p>
</div>
        </FadeIn>
      </div>
    </section>
  );
}