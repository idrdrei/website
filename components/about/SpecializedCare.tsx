"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import FeatureRow from "./FeatureRow";

export default function SpecializedCare() {
  return (
    <section
      id="expertise"
      className="scroll-mt-36 bg-white py-20 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-16">
        {/* Heading */}

        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
              Specialized Care
            </p>

            <h2 className="mt-6 text-3xl font-light tracking-[-0.04em] text-[#111] sm:text-4xl lg:text-6xl">
              Focused Expertise.
              <br />
              Thoughtful Care.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              My practice focuses on delivering individualized,
              evidence-based care across every stage of eye health—from
              routine eye care to highly specialized ocular oncology.
            </p>
          </div>
        </FadeIn>

        {/* Featured Specialty */}

        <FadeIn>
          <div className="group relative mt-14 overflow-hidden rounded-[28px] sm:mt-20 sm:rounded-[40px] lg:mt-24 lg:rounded-[56px]">
            <Image
              src="/specialties/oncology1.png"
              alt="Ocular Oncology"
              width={1800}
              height={1000}
              priority
              className="h-[460px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] sm:h-[520px] lg:h-auto lg:aspect-[16/9]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex items-start">
              <div className="max-w-2xl p-6 sm:p-10 md:p-14 lg:p-24">
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/80 sm:text-sm">
                  Signature Expertise
                </p>

                <h3 className="mt-4 text-3xl font-light leading-[0.98] tracking-[-0.05em] text-white sm:mt-6 sm:text-5xl lg:mt-7 lg:text-6xl">
                  Ocular
                  <br />
                  Oncology
                </h3>

                <p className="mt-3 text-sm text-white/85 sm:mt-4 sm:text-base">
                  Fellowship-trained at Wills Eye Hospital
                </p>

                <div className="mt-5 h-px w-12 bg-white/40 sm:mt-8 sm:w-16 lg:mt-10" />

                <p className="mt-5 max-w-xl text-sm leading-6 text-white/90 sm:mt-8 sm:text-base sm:leading-7 lg:mt-10 lg:text-lg lg:leading-8">
                  Diagnosis and management of ocular tumors—including
                  retinoblastoma, uveal melanoma, conjunctival tumors,
                  and orbital tumors—with multidisciplinary care focused
                  on preserving both vision and quality of life whenever
                  possible.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Other Specialties */}

        <div className="mt-20 lg:mt-32">
          <div className="border-t border-neutral-200 pt-14 lg:pt-24">
            <FeatureRow
              eyebrow="Surgical Excellence"
              title="Cataract Surgery"
              description="Modern cataract surgery using advanced phacoemulsification and premium intraocular lenses tailored to each patient's visual goals and lifestyle."
              image="/specialties/cataract.png"
            />
          </div>

          <div className="mt-20 border-t border-neutral-200 pt-14 lg:mt-32 lg:pt-24">
            <FeatureRow
              eyebrow="Vision Correction"
              title="Laser Vision Correction"
              description="Comprehensive evaluation for SMILE Pro, LASIK, PRK, and refractive lens exchange to reduce dependence on glasses and contact lenses."
              image="/specialties/lasik.png"
              reverse
            />
          </div>

          <div className="mt-20 border-t border-neutral-200 pt-14 lg:mt-32 lg:pt-24">
            <FeatureRow
              eyebrow="Comprehensive Care"
              title="Comprehensive Eye Care"
              description="Comprehensive ophthalmic care including diabetic eye disease, glaucoma screening, retinal disorders, dry eye management, and routine eye examinations."
              image="/specialties/comprehensive.png"
            />
          </div>
        </div>

        {/* Closing Statement */}

        <FadeIn>
          <div className="mx-auto mt-20 max-w-3xl border-t border-neutral-200 pt-10 text-center lg:mt-28 lg:pt-12">
            <p className="text-lg font-light leading-8 text-neutral-700 sm:text-xl sm:leading-relaxed">
              Great outcomes begin with careful diagnosis, thoughtful
              planning, and care tailored to the individual—not just the
              condition.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}