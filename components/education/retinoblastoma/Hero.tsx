"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section className="bg-white pt-32 pb-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">

        {/* Left */}
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
              Patient Education
            </p>

            <h1 className="mt-6 text-5xl font-light leading-tight tracking-[-0.05em] text-[#111] md:text-7xl">
              Retinoblastoma
            </h1>

            <p className="mt-8 text-xl leading-9 text-neutral-600">
              A parent's guide to the most common eye cancer in children,
              including early warning signs, diagnosis, modern treatment
              options, and why prompt evaluation is essential.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#1F4E8C]/10 px-4 py-2 text-sm font-medium text-[#1F4E8C]">
                Childhood Eye Cancer
              </span>

              <span className="rounded-full bg-[#1F4E8C]/10 px-4 py-2 text-sm font-medium text-[#1F4E8C]">
                Leukocoria
              </span>

              <span className="rounded-full bg-[#1F4E8C]/10 px-4 py-2 text-sm font-medium text-[#1F4E8C]">
                Strabismus
              </span>

              <span className="rounded-full bg-[#1F4E8C]/10 px-4 py-2 text-sm font-medium text-[#1F4E8C]">
                Reading Time • 8 min
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Right */}
        <FadeIn delay={0.15}>
          <div className="overflow-hidden rounded-[36px] border border-neutral-200 bg-neutral-50 shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
            <Image
              src="/education/retinoblastoma/hero1.png"
              alt="Illustration of retinoblastoma showing leukocoria in a child"
              width={900}
              height={900}
              priority
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}