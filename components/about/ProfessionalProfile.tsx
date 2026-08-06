"use client";

import FadeIn from "@/components/FadeIn";

const sections = [
  {
    title: "Education & Training",
    items: [
      "Doctor of Medicine — St. Luke's College of Medicine",
      "Residency in Ophthalmology — St. Luke's Eye Institute",
      "Fellowship in Ocular Oncology — Wills Eye Hospital, Philadelphia",
    ],
  },
  {
    title: "Leadership & Appointments",
    items: [
      "Section Chief, Ocular Oncology — St. Luke's Eye Institute",
      "Resident Training Officer — Rizal Medical Center",
      "Clinical Assistant Professor — St. Luke's College of Medicine",
    ],
  },
  {
    title: "Professional Memberships",
    items: [
      "Founding Member — Philippine Society of Ocular Oncology",
      "Member — Philippine Society of Ophthalmic Plastic & Reconstructive Surgery",
      "Member — Refractive Surgery Society of the Philippines",
    ],
  },
  {
    title: "Academic Contributions",
    items: [
      "Author, Cornea & Conjunctiva — St. Luke's Eye Institute External Disease and Cornea Handbook",
      "Author, Tumors — Pediatric Ophthalmology in the Emergency Room",
      "Lecturer in Ophthalmology and Ocular Oncology",
    ],
  },
];

export default function ProfessionalProfile() {
  return (
    <section 
    id="credentials"
    className="scroll-mt-28 bg-[#FAFAF7] py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-16">

        <FadeIn>
          <div className="max-w-3xl">

            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
              Credentials & Leadership
            </p>

            <h2 className="mt-6 text-3xl font-light tracking-[-0.04em] text-[#111] sm:text-4xl lg:text-6xl">
              Experience beyond clinical practice.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              International fellowship training, academic leadership,
              and continued contributions to ophthalmology through
              education, research, and professional service.
            </p>

          </div>
        </FadeIn>

        <div className="mt-14 grid gap-x-16 gap-y-14 lg:mt-24 lg:gap-y-20 lg:grid-cols-2">

          {sections.map((section, index) => (
            <FadeIn key={section.title} delay={index * 0.08}>
              <div className="border-t border-neutral-200 pt-8">

                <h3 className="text-2xl font-light tracking-[-0.03em] text-[#111] sm:text-3xl">
                  {section.title}
                </h3>

                <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">

                  {section.items.map((item) => (
                    <p
                      key={item}
                      className="text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8"
                    >
                      {item}
                    </p>
                  ))}

                </div>

              </div>
            </FadeIn>
          ))}

        </div>

      </div>
    </section>
  );
}