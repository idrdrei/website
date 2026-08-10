"use client";

import FadeIn from "@/components/FadeIn";

const habits = [
  {
    number: "01",
    title: "Follow the 20–20–20 rule",
    text: "During prolonged screen use or close-up work, encourage your child to look about 20 feet away for at least 20 seconds every 20 minutes.",
  },
  {
    number: "02",
    title: "Spend time outdoors",
    text: "Regular outdoor time is associated with a lower risk of developing myopia and provides a natural break from close-up activities.",
  },
  {
    number: "03",
    title: "Keep screens at a comfortable distance",
    text: "Encourage children to avoid holding phones, tablets, or books too close to their face.",
  },
  {
    number: "04",
    title: "Get regular eye examinations",
    text: "Routine eye examinations can detect vision problems that children may not recognize or be able to describe themselves.",
  },
];

export default function HealthyHabits() {
  return (
    <section
      id="healthy-habits"
      className="bg-white py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Heading */}
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F4E8C]">
              Healthy Habits
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              Simple habits can
              <br />
              support healthy vision.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Good visual habits begin early. Small changes to your child&apos;s
              daily routine can help reduce prolonged eye strain and encourage
              healthier screen and near-work habits.
            </p>
          </div>
        </FadeIn>

        {/* Habits */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20">
          {habits.map((habit, index) => (
            <FadeIn key={habit.number} delay={index * 0.08}>
              <div className="group h-full rounded-[2rem] bg-gray-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg sm:p-10">

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#1F4E8C]">
                    {habit.number}
                  </span>

                  <span className="h-px w-10 bg-gray-200 transition-all duration-300 group-hover:w-16 group-hover:bg-[#1F4E8C]" />
                </div>

                <h3 className="mt-12 text-2xl font-semibold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-[#1F4E8C]">
                  {habit.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-gray-600">
                  {habit.text}
                </p>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Parent reminder */}
        <FadeIn delay={0.3}>
          <div className="mt-10 rounded-[1.75rem] border border-gray-200 bg-white p-7 sm:p-9">
            <p className="text-base leading-7 text-gray-600">
              <span className="font-semibold text-gray-900">
                The goal isn&apos;t to eliminate screens.
              </span>{" "}
              Screens are an important part of school, communication, and
              everyday life. The goal is to help children develop balanced
              habits around screen use, near work, outdoor activity, and
              regular eye care.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}