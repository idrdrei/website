"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const steps = [
  {
    number: "01",
    title: "Vision Assessment",
    description:
      "A detailed refraction and vision assessment to understand your current prescription and visual needs.",
  },
  {
    number: "02",
    title: "Corneal Mapping",
    description:
      "Advanced corneal imaging measures the shape and thickness of your cornea to determine the safest treatment.",
  },
  {
    number: "03",
    title: "Eye Health Evaluation",
    description:
      "A comprehensive examination checks for dry eye, cataracts, retinal disease, glaucoma, and other conditions.",
  },
  {
    number: "04",
    title: "Personalized Recommendation",
    description:
      "We'll discuss whether LASIK, SMILE, PRK, ICL, or another option is best suited to your eyes and lifestyle.",
  },
];

export default function Consultation() {
  return (
    <section 
    id="consultation"className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1F4E8C]">
              Your Consultation
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
              What to Expect
              <span className="block font-semibold">
                During Your Consultation
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Every laser vision correction journey begins with a comprehensive
              eye examination. We take the time to understand your eyes,
              lifestyle, and visual goals before recommending the safest and
              most effective treatment.
            </p>
          </div>
        </FadeIn>

        {/* Image */}

        <FadeIn delay={0.15}>
          <div className="group mt-16 overflow-hidden rounded-[36px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
            <Image
              src="/services/laser-vision-correction/consultation1.png"
              alt="Laser vision correction consultation"
              width={1600}
              height={900}
              className="aspect-[16/9] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </FadeIn>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Desktop line */}

          <div className="absolute left-0 right-0 top-5 hidden h-px bg-neutral-200 lg:block" />

          <div className="grid gap-12 lg:grid-cols-4">

            {steps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.08}>
                <div className="relative">

                  <div className="relative z-10 mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-[#1F4E8C] text-sm font-semibold text-white shadow-lg">
                    {step.number}
                  </div>

                  <h3 className="text-2xl font-semibold text-neutral-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-600">
                    {step.description}
                  </p>

                </div>
              </FadeIn>
            ))}

          </div>

        </div>

        {/* Bottom Note */}

        <FadeIn delay={0.3}>
          <div className="mx-auto mt-24 max-w-4xl rounded-[32px] border border-[#1F4E8C]/10 bg-neutral-50 p-10 text-center">

            <p className="text-xl font-light leading-9 text-neutral-700">
              Our goal isn't to recommend a particular procedure—
              <span className="font-medium text-neutral-900">
                {" "}
                it's to recommend the procedure that's right for you.
              </span>
            </p>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}