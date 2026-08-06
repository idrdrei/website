"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function ServicesHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#FAFAF7] pt-8
sm:pt-10
lg:pt-24 lg:pb-40">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24 lg:px-16">
        {/* Left Content */}
        <FadeIn>
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
              Services
            </p>

            <h1 className="mt-6 text-4xl font-light leading-[0.92] tracking-[-0.06em] text-[#111] sm:text-5xl lg:text-7xl">
              Comprehensive
              <br />
              eye care,
              <br />
              built around
              <br />
              your vision.
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-neutral-600 sm:text-xl sm:leading-9">
              From routine eye examinations to advanced surgical treatment,
              every recommendation is guided by evidence, experience, and your
              individual visual needs.
            </p>

            <p className="mt-10 text-base font-light tracking-[0.02em] text-neutral-500">
              Ocular Oncology &middot; Cataract Surgery &middot; Laser Vision
              Correction
            </p>
          </div>
        </FadeIn>

        {/* Right Image */}
        <FadeIn delay={0.15}>
          <div className="relative">
            {/* Soft blue glow */}
            <div className="absolute inset-8 rounded-[40px] bg-[#1F4E8C]/5 blur-3xl" />

            <div className="group relative overflow-hidden rounded-[32px] shadow-[0_24px_60px_rgba(0,0,0,0.08)] lg:rounded-[44px]">
              <Image
                src="/services/service-hero.jpeg"
                alt="Dr. Andrei Martin performing an eye examination"
                width={1200}
                height={900}
                priority
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}