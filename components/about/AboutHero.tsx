"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function AboutHero() {
  return (
    <section
      id="overview"
      className="scroll-mt-36 bg-[#FAFAF7] pt-24 pb-24 sm:pt-28 sm:pb-28 lg:pt-40 lg:pb-44"
    >
      <div className="mx-auto grid max-w-[1500px] items-center gap-16 px-6 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-24 lg:px-16">

        {/* Left Content */}
        <FadeIn>
          <div className="max-w-2xl">

            <p className="text-lg font-light tracking-[-0.02em] text-[#1F4E8C]">
              About
            </p>

            <h1 className="mt-4 text-5xl font-light leading-[0.92] tracking-[-0.06em] text-[#111] sm:text-6xl lg:text-8xl">
              Dr. Andrei
              <br />
              Martin
            </h1>

            <p className="mt-6 text-base font-medium text-neutral-600 sm:text-lg">
              Section Chief, Ocular Oncology • St. Luke&apos;s Eye Institute
            </p>

            <p className="mt-10 text-xl font-light leading-relaxed text-neutral-700 lg:text-2xl">
              Helping patients{" "}
              <span className="font-medium text-[#111]">
                preserve and restore vision
              </span>{" "}
              through specialized care in{" "}
              <span className="font-medium text-[#111]">
                ocular oncology
              </span>
              ,{" "}
              <span className="font-medium text-[#111]">
                cataract surgery
              </span>
              , and{" "}
              <span className="font-medium text-[#111]">
                laser vision correction
              </span>
              .
            </p>

            <p className="mt-8 text-base leading-8 text-neutral-600 sm:text-lg">
              Whether treating a routine eye condition or a rare ocular tumor,
              my goal is to provide thoughtful, evidence-based care  to
              every patient.
            </p>

            {/* Credential Ribbon */}
            <div className="mt-12 border-t border-b border-neutral-200 py-5">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-neutral-600 tracking-wide">

                <span>Wills Eye Hospital Fellow</span>

                <span className="text-neutral-300">•</span>

                <span>Section Chief</span>

                <span className="text-neutral-300">•</span>

                <span>Training Officer</span>

                <span className="text-neutral-300">•</span>

                <span>Clinical Assistant Professor</span>

              </div>
            </div>

          </div>
        </FadeIn>

        {/* Right Image */}
        <FadeIn delay={0.15}>
          <div className="relative flex justify-center lg:justify-end">

            {/* Blue Glow */}
            <div className="absolute inset-8 rounded-[40px] bg-[#1F4E8C]/5 blur-3xl" />

            <Image
              src="/about/drdrei1.jpg"
              alt="Dr. Andrei Martin"
              width={900}
              height={1150}
              priority
              className="relative w-full max-w-lg rounded-[40px] border border-white/80 object-cover object-top shadow-[0_40px_120px_rgba(0,0,0,0.08)] sm:max-w-2xl lg:max-w-[760px]"
            />

          </div>
        </FadeIn>

      </div>
    </section>
  );
}