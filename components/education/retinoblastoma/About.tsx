"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 bg-white py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 lg:grid-cols-2 lg:px-16">

        {/* Left */}
        <FadeIn>
          <div className="overflow-hidden rounded-[32px] border border-neutral-200 bg-neutral-50 shadow-sm">
            <Image
              src="/education/retinoblastoma/retinoblastoma-fundus1.jpg"
              alt="Illustration of retinoblastoma inside the eye"
              width={900}
              height={900}
              className="w-full object-cover"
            />
          </div>
        </FadeIn>

        {/* Right */}
        <FadeIn delay={0.15}>
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
              About Retinoblastoma
            </p>

            <h2 className="mt-6 text-4xl font-light leading-tight tracking-[-0.04em] text-[#111] sm:text-5xl">
              Early detection can save
              <br />
              life and vision.
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Retinoblastoma is a rare type of eye cancer that starts in the{" "}
              <strong>retina</strong>, the light-sensitive layer at the back of
              the eye that allows us to see. It is the{" "}
              <strong>most common eye cancer in young children</strong> and is
              usually diagnosed before 5 years of age.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Hearing that your child may have retinoblastoma can be
              overwhelming, but there is good news. Thanks to advances in
              diagnosis and treatment,{" "}
              <strong>most children can be successfully treated</strong>. When
              the disease is found early, treatment can often save not only a
              child's life, but also the eye and useful vision.
            </p>

            <div className="mt-10 rounded-3xl border border-[#1F4E8C]/10 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#1F4E8C]">
                Key Facts
              </h3>

              <ul className="mt-5 space-y-3 text-neutral-700">
                <li>• Most children are diagnosed before 5 years of age.</li>
                <li>• Retinoblastoma may affect one eye or both eyes.</li>
                <li>
                  • Early diagnosis gives the best chance of saving the eye and
                  preserving vision.
                </li>
                <li>
                  • Some children inherit a gene change (RB1) that increases
                  their risk of developing retinoblastoma.
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}