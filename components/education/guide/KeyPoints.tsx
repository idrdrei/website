"use client";

import FadeIn from "@/components/FadeIn";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Choroidal melanoma is a rare type of eye cancer.",
  "Many people have no symptoms when it is first discovered.",
  "Modern treatments can often control the cancer while preserving the eye.",
  "Regular follow-up is important even after successful treatment.",
];

export default function KeyPoints() {
  return (
    <section
      id="key-points"
      className="scroll-mt-36 bg-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <div className="overflow-hidden rounded-[36px] border border-[#1F4E8C]/10 bg-[#1F4E8C]/5 p-8 md:p-10 lg:p-12">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1F4E8C]">
              Before You Continue
            </p>

            <h2 className="mt-5 text-3xl font-light tracking-[-0.03em] text-[#111] md:text-4xl">
              The most important
              <span className="block font-medium">
                things to know
              </span>
            </h2>

            <div className="mt-10 space-y-6">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2
                    size={24}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0 text-[#1F4E8C]"
                  />

                  <p className="text-lg leading-8 text-neutral-700">
                    {point}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}