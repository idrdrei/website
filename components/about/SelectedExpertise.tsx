"use client";

import FadeIn from "@/components/FadeIn";

const expertise = [
  {
    title: "Ocular Oncology",
    focus:
      "Retinoblastoma • Uveal Melanoma • Conjunctival Tumors • Orbital Tumors",
    description:
      "Diagnosis and management of ocular tumors with an emphasis on multidisciplinary, vision-preserving care tailored to each patient's condition.",
  },
  {
    title: "Cataract & Anterior Segment Surgery",
    focus:
      "Cataract Surgery • Secondary IOLs • Complex Anterior Segment Procedures",
    description:
      "Modern cataract surgery and advanced anterior segment procedures focused on restoring vision safely and achieving excellent visual outcomes.",
  },
  {
    title: "Laser Vision Correction",
    focus: "LASIK • PRK • SMILE",
    description:
      "Personalized laser vision correction using modern refractive techniques to reduce dependence on glasses and contact lenses.",
  },
  {
    title: "Comprehensive Eye Care",
    focus:
      "Preventive Eye Care • Diabetic Eye Screening • Infections • Coordinated Specialty Care",
    description:
      "Comprehensive ophthalmic care for patients of all ages, with seamless referral and collaboration with retina, glaucoma, pediatric, and neuro-ophthalmology specialists when appropriate.",
  },
];

export default function SelectedExpertise() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">

        <FadeIn>
          <div className="max-w-3xl">

            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
              Selected Expertise
            </p>

            <h2 className="mt-6 text-3xl font-light tracking-[-0.04em] text-[#111] sm:text-4xl lg:text-6xl">
              Areas of practice developed through specialized training and
              clinical experience.
            </h2>

          </div>
        </FadeIn>

        <div className="mt-14 lg:mt-20">

          {expertise.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <div className="grid gap-6 border-t border-neutral-200 py-10 sm:gap-8 sm:py-12 lg:grid-cols-[320px_1fr] lg:gap-12">

                {/* Left Column */}

                <div>
                  <h3 className="text-2xl font-light tracking-[-0.03em] text-[#111] sm:text-3xl">
                    {item.title}
                  </h3>
                </div>

                {/* Right Column */}

                <div>

                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#1F4E8C] sm:text-sm sm:tracking-[0.35em]">
                    {item.focus}
                  </p>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:mt-6 sm:text-lg sm:leading-8">
                    {item.description}
                  </p>

                </div>

              </div>
            </FadeIn>
          ))}

        </div>

      </div>
    </section>
  );
}