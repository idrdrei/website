"use client";

import {
  ScanEye,
  ClipboardList,
  HeartHandshake,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";

const steps = [
  {
    icon: ScanEye,
    title: "Comprehensive Evaluation",
    description:
      "Every consultation begins with a thorough examination, advanced ocular imaging, and a careful review of your medical history to establish an accurate diagnosis.",
  },
  {
    icon: ClipboardList,
    title: "Personalized Treatment",
    description:
      "Treatment recommendations are tailored to your specific condition and may include observation, laser therapy, surgery, chemotherapy, radiation therapy, or collaborative care with other specialists.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Follow-Up",
    description:
      "Many eye tumors require ongoing monitoring. We provide long-term surveillance and coordinated care to help protect both vision and overall health.",
  },
];

export default function CareApproach() {
  return (
    <section
      id="approach"
      className="scroll-mt-28 bg-[#FAFAF7] py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
            Our Approach
          </p>

          <h2 className="mt-4 text-3xl font-light tracking-[-0.04em] text-[#111] sm:text-4xl lg:text-5xl">
            Personalized care,
            <br />
            every step of
            <br />
            the journey.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Managing an eye tumor involves more than treatment alone. Our
            approach emphasizes accurate diagnosis, individualized care, and
            continued follow-up to achieve the best possible outcomes.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <FadeIn key={step.title}>
                <div className="h-full rounded-3xl border border-black/5 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1F4E8C]/10">
                    <Icon
                      className="h-7 w-7 text-[#1F4E8C]"
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3 className="mt-8 text-2xl font-medium text-[#111]">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-600">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}