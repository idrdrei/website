"use client";

import FadeIn from "@/components/FadeIn";

const concerns = [
  {
    number: "01",
    title: "Vision Development",
    text: "A child’s visual system continues to develop throughout childhood. Clear vision in both eyes is important for normal visual development and learning.",
  },
  {
    number: "02",
    title: "Digital Screens",
    text: "Phones, tablets, computers, and gaming devices are now part of everyday life. Prolonged close-up viewing can contribute to eye fatigue and discomfort.",
  },
  {
    number: "03",
    title: "Myopia",
    text: "Nearsightedness is becoming increasingly common in children. Healthy visual habits and regular eye examinations can help identify problems early.",
  },
];

export default function WhyItMatters() {
  return (
    <section className="bg-gray-50 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Intro */}
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F4E8C]">
              Why It Matters
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              Growing eyes need
              <br />
              special attention.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Children see the world differently as their eyes and visual
              systems develop. Understanding how everyday habits affect their
              vision can help parents make better choices early.
            </p>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:mt-20">
          {concerns.map((item, index) => (
            <FadeIn key={item.number} delay={index * 0.1}>
              <div className="h-full rounded-[1.75rem] bg-white p-8 shadow-sm sm:p-9">
                <span className="text-sm font-medium text-[#1F4E8C]">
                  {item.number}
                </span>

                <h3 className="mt-12 text-2xl font-semibold tracking-tight text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}