"use client";

import {
  Eye,
  Monitor,
  EyeOff,
  ScanEye,
  Brain,
  Glasses,
  CircleAlert,
  TriangleAlert,
} from "lucide-react";

import FadeIn from "@/components/FadeIn";

const commonSigns = [
  {
    icon: Eye,
    title: "Squinting",
    text: "Your child frequently squints or partially closes one eye to see more clearly.",
  },
  {
    icon: Monitor,
    title: "Sitting too close",
    text: "Your child consistently sits very close to the television, tablet, or computer.",
  },
  {
    icon: EyeOff,
    title: "Covering one eye",
    text: "Your child covers or closes one eye when reading, watching television, or looking at distant objects.",
  },
  {
    icon: ScanEye,
    title: "Eye turning",
    text: "One eye appears to turn inward, outward, upward, or downward.",
  },
  {
    icon: Brain,
    title: "Headaches",
    text: "Frequent headaches or eye discomfort occur after reading or other close-up activities.",
  },
  {
    icon: Glasses,
    title: "Difficulty seeing",
    text: "Your child has trouble seeing the board, recognizing faces from a distance, or keeping up visually at school.",
  },
];

export default function ChildrenWarningSigns() {
  return (
    <section
      id="warning-signs"
      className="bg-gray-50 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Heading */}
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F4E8C]">
              Warning Signs
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              Signs parents
              <br />
              shouldn&apos;t ignore.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Children may not always be able to explain that they are having
              trouble seeing. Changes in their behavior can sometimes be the
              first clue that something needs attention.
            </p>
          </div>
        </FadeIn>

        {/* Common Signs */}
        <div className="mt-14 lg:mt-20">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
              Common signs
            </p>
          </FadeIn>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {commonSigns.map((sign, index) => {
              const Icon = sign.icon;

              return (
                <FadeIn key={sign.title} delay={index * 0.05}>
                  <div className="group h-full rounded-[1.75rem] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
                    <div className="flex h-11 w-11 items-center justify-center text-[#1F4E8C] transition-transform duration-300 group-hover:scale-110">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>

                    <h3 className="mt-7 text-xl font-semibold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-[#1F4E8C]">
                      {sign.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {sign.text}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Important Signs */}
        <FadeIn delay={0.25}>
          <div className="mt-16 lg:mt-20">
            <p className="mb-7 text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
              Important signs
            </p>

            <div className="grid gap-5 md:grid-cols-2">

              {/* White Pupil */}
              <div className="group rounded-[1.75rem] border border-[#1F4E8C]/15 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#1F4E8C]/30 hover:shadow-lg sm:p-9">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1F4E8C]/10 text-[#1F4E8C] transition-transform duration-300 group-hover:scale-110">
                    <CircleAlert size={25} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900">
                      White pupil
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      A white or unusual reflection in one pupil, particularly
                      when it repeatedly appears in photographs, should be
                      evaluated promptly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sudden Changes */}
              <div className="group rounded-[1.75rem] border border-[#1F4E8C]/15 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#1F4E8C]/30 hover:shadow-lg sm:p-9">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1F4E8C]/10 text-[#1F4E8C] transition-transform duration-300 group-hover:scale-110">
                    <TriangleAlert size={25} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900">
                      Sudden changes
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      A sudden change in vision, eye alignment, eye appearance,
                      or visual behavior should not be ignored.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}