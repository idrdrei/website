"use client";

import FadeIn from "@/components/FadeIn";

const journey = [
  {
    year: "Medical School",
    title: "St. Luke's College of Medicine",
    description:
      "Completed my medical degree while developing a strong foundation in clinical medicine and patient-centered care.",
  },
  {
    year: "Residency",
    title: "St. Luke's Eye Institute",
    description:
      "Completed residency training in ophthalmology with broad medical and surgical experience across the spectrum of eye disease.",
  },
  {
    year: "Fellowship",
    title: "Wills Eye Hospital",
    description:
      "Completed fellowship training in Ocular Oncology at Wills Eye Hospital in Philadelphia, with a focus on the diagnosis and treatment of ocular tumors.",
  },
  {
    year: "Leadership",
    title: "Section Chief, Ocular Oncology",
    description:
      "Currently leads the Ocular Oncology Service at St. Luke's Eye Institute while caring for patients with complex ocular conditions.",
  },
  {
    year: "Medical Education",
    title: "Resident Training Officer",
    description:
      "Committed to training future ophthalmologists through clinical teaching, surgical mentorship, and academic leadership.",
  },
];

export default function MyJourney() {
  return (
    <section 
    id="journey"
    className="scroll-mt-28 bg-white py-20 lg:py-32">
      <div className="mx-auto grid max-w-8xl gap-16 px-6 sm:gap-20 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-16">

        {/* Left Column */}
        <FadeIn>
          <div className="lg:sticky lg:top-32">

            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
              Professional Journey
            </p>

            <h2 className="mt-6 text-3xl font-light tracking-[-0.04em] text-[#111] sm:text-4xl lg:text-6xl">
              A career built through continuous learning.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              From medical school and residency to international fellowship
              training and academic leadership, each stage has strengthened
              my commitment to thoughtful, evidence-based patient care.
            </p>

            <div className="mt-12 h-px w-16 bg-neutral-300" />

          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-[13px] top-0 h-full w-px bg-neutral-200 sm:left-[15px]" />

          <div className="space-y-12 sm:space-y-14 lg:space-y-16">

            {journey.map((item, index) => (
              <FadeIn key={item.year} delay={index * 0.08}>
                <div className="relative flex gap-5 sm:gap-8">

                  {/* Timeline Marker */}
                  <div className="relative z-10 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white sm:mt-2 sm:h-8 sm:w-8">
                    <div className="h-3 w-3 rounded-full bg-[#1F4E8C]" />
                  </div>

                  {/* Timeline Content */}
                  <div>

                    <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
                      {item.year}
                    </p>

                    <h3 className="mt-3 text-2xl font-light tracking-[-0.03em] text-[#111] sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                      {item.description}
                    </p>

                  </div>

                </div>
              </FadeIn>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}