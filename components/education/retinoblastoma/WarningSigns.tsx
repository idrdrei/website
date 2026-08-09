"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";

const signs = [
  {
    title: "White Pupil (Leukocoria)",
    image: "/education/retinoblastoma/leukocoria.png",
    description:
      "A white or yellow reflection in your child's pupil, especially in flash photographs. This is the most common warning sign of retinoblastoma.",
  },
  {
    title: "Different Colored Pupils in Photos",
    image: "/education/retinoblastoma/photo-comparison.png",
    description:
      "In flash photographs, one eye may appear red while the other looks white or reflects light differently. If this happens repeatedly, your child should be examined by an ophthalmologist.",
  },
  {
    title: "Crossed Eyes (Strabismus)",
    image: "/education/retinoblastoma/strabismus.jpg",
    description:
      "One eye may turn inward or outward because the affected eye is not seeing normally. This can sometimes be the first sign of retinoblastoma.",
  },
  {
    title: "Poor Vision",
    image: "/education/retinoblastoma/poor-vision.png",
    description:
      "Young children may not be able to tell you they cannot see well. They may bump into objects, have difficulty following toys, or seem to rely on one eye more than the other.",
  },
];

export default function WarningSigns() {
  return (
    <section
      id="warning-signs"
      className="scroll-mt-28 bg-[#FAFAF7] py-24"
    >
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
              Warning Signs
            </p>

            <h2 className="mt-6 text-4xl font-light tracking-[-0.04em] text-[#111] sm:text-5xl">
              Know the signs.
              <br />
              Trust your instincts.
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Many children with retinoblastoma appear healthy. Recognizing
              these early warning signs can lead to earlier diagnosis and
              improve the chances of successful treatment.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {signs.map((sign, index) => (
            <FadeIn key={sign.title} delay={index * 0.1}>
              <div className="overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <Image
                  src={sign.image}
                  alt={sign.title}
                  width={700}
                  height={500}
                  className="h-64 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-neutral-900">
                    {sign.title}
                  </h3>

                  <p className="mt-4 leading-8 text-neutral-600">
                    {sign.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-16 rounded-[32px] border border-[#1F4E8C]/10 bg-[#F8FAFC] p-8">
            <h3 className="text-2xl font-semibold text-[#1F4E8C]">
              When should I see an eye doctor?
            </h3>

            <p className="mt-4 text-lg leading-8 text-neutral-700">
              If you notice a white pupil, crossed eyes, or a repeated
              difference in your child's pupils in flash photographs,
              schedule an eye examination as soon as possible. These
              findings do not always mean your child has retinoblastoma,
              but they should always be evaluated promptly by an
              ophthalmologist.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}