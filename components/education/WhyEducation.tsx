"use client";

import FadeIn from "@/components/FadeIn";

const topics = [
  {
    title: "Eye Conditions",
    description:
      "Learn about cataracts, glaucoma, retinal diseases, dry eye, and other common eye conditions.",
  },
  {
    title: "Treatment Options",
    description:
      "Understand surgery, laser vision correction, medications, and the latest treatment approaches.",
  },
  {
    title: "Eye Tumors",
    description:
      "Explore patient-friendly guides on ocular oncology, including diagnosis, treatment, and follow-up care.",
  },
  {
    title: "Protecting Your Vision",
    description:
      "Discover practical tips for maintaining healthy eyes and recognizing when to seek specialist care.",
  },
];

export default function WhyEducation() {
  return (
    <section
      id="overview"
      className="scroll-mt-28 bg-[#FAFAF7] py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1F4E8C]">
              What You'll Learn
            </p>

            <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] text-neutral-900 md:text-5xl lg:text-6xl">
              Trusted Information,
              <span className="block font-medium">
                Written for Patients.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
              Explore evidence-based resources designed to help you understand
              eye conditions, treatment options, surgery, and preventive eye
              care—all explained in clear, patient-friendly language.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[32px] bg-neutral-200 md:grid-cols-2">
          {topics.map((topic) => (
            <FadeIn key={topic.title}>
              <div className="bg-[#FAFAF7] p-10 transition-colors duration-300 hover:bg-white">
                <h3 className="text-2xl font-light tracking-tight text-neutral-900">
                  {topic.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-neutral-600">
                  {topic.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}