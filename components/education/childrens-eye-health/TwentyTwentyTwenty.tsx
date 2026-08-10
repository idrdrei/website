"use client";

import FadeIn from "@/components/FadeIn";

const steps = [
  {
    number: "20",
    label: "MINUTES",
  },
  {
    number: "20",
    label: "FEET AWAY",
  },
  {
    number: "20",
    label: "SECONDS",
  },
];

export default function TwentyTwentyTwenty() {
  return (
    <section className="bg-gray-50 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Heading */}
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F4E8C]">
              A Simple Habit
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Remember the
              <br />
              20–20–20 rule.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl font-bold leading-9 tracking-tight text-gray-900 sm:text-2xl sm:leading-10">
              Every 20 minutes of screen time or other close-up work, look at
              something about 20 feet away for at least 20 seconds.
            </p>
          </div>
        </FadeIn>

        {/* 20–20–20 */}
        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-16">
          {steps.map((step, index) => (
            <FadeIn key={step.label} delay={index * 0.1}>
              <div className="rounded-[2rem] bg-white px-8 py-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:px-10 sm:py-12">

                <p className="text-7xl font-semibold tracking-[-0.04em] text-[#1F4E8C] sm:text-8xl">
                  {step.number}
                </p>

                <p className="mt-4 text-sm font-semibold tracking-[0.2em] text-gray-500">
                  {step.label}
                </p>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Parent Tip */}
        <FadeIn delay={0.3}>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gray-200 bg-white px-6 py-5 text-center sm:px-8">
            <p className="text-sm leading-6 text-gray-600">
              <span className="font-semibold text-gray-900">
                Parent tip:
              </span>{" "}
              Set a timer or use natural breaks in homework, gaming, or
              screen-based activities to remind your child to look away.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}