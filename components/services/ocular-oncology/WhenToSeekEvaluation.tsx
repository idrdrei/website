"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { CheckCircle2 } from "lucide-react";

const symptoms = [
  "Blurred or distorted vision",
  "New flashes or floaters",
  "A dark spot in your vision",
  "A growing spot on the white of the eye",
  "A persistent eyelid lump",
  "Eye bulging or double vision",
];

export default function WhenToSeekEvaluation() {
  return (
    <section
      id="evaluation"
      className="scroll-mt-28 bg-white py-20 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-[1fr_1.15fr] lg:px-16">
        {/* Left */}
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
            When to Seek Evaluation
          </p>

          <h2 className="mt-4 text-3xl font-light tracking-[-0.04em] text-[#111] sm:text-4xl lg:text-5xl">
            Early diagnosis
            <br />
            can protect both
            <br />
            vision and health.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
            Many eye tumors are discovered during routine eye examinations
            before they cause noticeable symptoms. If you experience any of
            the signs below—or have been told you have a suspicious eye
            lesion—an evaluation by an ocular oncologist may be appropriate.
          </p>

          <div className="mt-10 space-y-5">
            {symptoms.map((symptom) => (
              <div key={symptom} className="flex items-start gap-4">
                <CheckCircle2
                  className="mt-1 h-6 w-6 flex-shrink-0 text-[#1F4E8C]"
                  strokeWidth={1.8}
                />
                <p className="text-lg text-neutral-700">{symptom}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Right */}
        <FadeIn className="relative">
          <div className="relative h-[500px] overflow-hidden rounded-[40px] lg:h-[720px]">
            <Image
              src="/services/ocular-oncology/PAM.png"
              alt="Comprehensive ocular examination"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}