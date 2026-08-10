"use client";

import FadeIn from "@/components/FadeIn";

const stages = [
  {
    age: "Infancy",
    title: "Early assessment",
    text: "An eye examination may be recommended when there are concerns about eye alignment, eye appearance, visual behavior, or a family history of significant eye problems.",
  },
  {
    age: "Preschool",
    title: "Before starting school",
    text: "A vision assessment can help identify problems that may interfere with learning, including significant refractive errors, amblyopia, or eye alignment problems.",
  },
  {
    age: "School Age",
    title: "Regular monitoring",
    text: "Children's vision can change as they grow. Regular eye examinations are especially important when there is a history of myopia or other vision concerns.",
  },
  {
    age: "Any Age",
    title: "When something changes",
    text: "Don't wait for the next routine visit if your child develops a noticeable change in vision, eye alignment, eye appearance, or visual behavior.",
  },
];

export default function EyeExams() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Heading */}
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F4E8C]">
              Eye Examinations
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              When should your
              <br />
              child have an eye exam?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Children don't always know that the way they see isn't normal.
              An eye examination can identify problems before they begin
              affecting school, development, or everyday life.
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative mt-16 lg:mt-20">

          {/* Desktop line */}
          <div className="absolute left-0 right-0 top-[2.75rem] hidden h-px bg-gray-200 lg:block" />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {stages.map((stage, index) => (
              <FadeIn key={stage.age} delay={index * 0.1}>
                <div className="relative">

                  {/* Number */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#1F4E8C] text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="mt-7 text-sm font-semibold uppercase tracking-[0.15em] text-[#1F4E8C]">
                    {stage.age}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900">
                    {stage.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-gray-600">
                    {stage.text}
                  </p>

                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Bottom message */}
        <FadeIn delay={0.3}>
          <div className="mt-16 rounded-[1.75rem] bg-gray-50 px-7 py-8 sm:px-10 sm:py-9">
            <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              <span className="font-semibold text-gray-900">
                A school vision screening is helpful, but it isn't the same
                as a comprehensive eye examination.
              </span>{" "}
              If you have concerns about your child's vision, an eye
              examination can provide a more complete assessment.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}