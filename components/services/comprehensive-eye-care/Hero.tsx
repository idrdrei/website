"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section
      id="overview"
      className="relative overflow-hidden bg-[#FAFAF7] pt-32 pb-20 lg:pt-40 lg:pb-28 scroll-mt-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Content */}
          <FadeIn>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
                Comprehensive Eye Care
              </p>

              <h1 className="mt-6 text-4xl font-light leading-tight tracking-[-0.04em] text-[#111] sm:text-6xl">
                Clear vision starts
                <br />
                with comprehensive care.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
                Whether you're coming for a routine eye examination, updating
                your prescription, or evaluating an eye concern, every visit is
                centered on early detection, personalized care, and preserving
                your vision for life.
              </p>
            </div>
          </FadeIn>

          {/* Image */}
          <FadeIn delay={0.15}>
            <div className="group overflow-hidden rounded-[36px]">
              <Image
                src="/services/service-comp.png"
                alt="Comprehensive eye examination"
                width={1600}
                height={1200}
                priority
                className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}