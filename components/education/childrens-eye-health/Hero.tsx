"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Text */}
          <FadeIn>
            <div className="max-w-xl">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#1F4E8C]">
                Education
              </p>

              <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                Children&apos;s
                <br />
                Eye Health
              </h1>

              <p className="mt-7 max-w-lg text-lg leading-8 text-gray-600 sm:text-xl">
                A parent&apos;s guide to healthy vision in the digital age —
                from screen time and myopia to the everyday habits that help
                protect growing eyes.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#screen-time"
                  className="inline-flex items-center rounded-full bg-[#1F4E8C] px-6 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore the Guide
                </a>

                <a
                  href="#warning-signs"
                  className="inline-flex items-center rounded-full border border-gray-300 px-6 py-3.5 text-sm font-medium text-gray-700 transition hover:border-gray-400"
                >
                  Warning Signs
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Image */}
          <FadeIn delay={0.15}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gray-100">
                <Image
                  src="/education/childrens-eye-health/ipad.png"
                  alt="Child using a tablet"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Floating information card */}
              <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-5 shadow-xl sm:-left-8 sm:p-6">
                <p className="text-3xl font-semibold tracking-tight text-[#1F4E8C]">
                  20–20–20
                </p>
                <p className="mt-1 text-sm leading-5 text-gray-600">
                  A simple habit for
                  <br />
                  healthier screen use
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}