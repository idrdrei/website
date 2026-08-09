"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";

export default function Genetics() {
  return (
    <section
      id="genetics"
      className="scroll-mt-28 bg-white py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 lg:grid-cols-2 lg:px-16">

        {/* Left */}
        <FadeIn>
          <div className="overflow-hidden rounded-[32px] border border-neutral-200 bg-neutral-50 shadow-sm">
            <Image
              src="/education/retinoblastoma/genetics.png"
              alt="Illustration explaining the genetics of retinoblastoma"
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
              Genetics
            </p>

            <h2 className="mt-6 text-4xl font-light leading-tight tracking-[-0.04em] text-[#111] sm:text-5xl">
              Could my other
              <br />
              children have it?
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Some children develop retinoblastoma because of a change in a
              gene called <strong>RB1</strong>. This change may be inherited
              from a parent or may happen for the first time in the child.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              If a child has a hereditary form of retinoblastoma, brothers,
              sisters, and future children may also be at increased risk.
              Genetic testing can help determine whether other family members
              should be examined.
            </p>

            <div className="mt-10 rounded-3xl border border-[#1F4E8C]/10 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#1F4E8C]">
                Important to Remember
              </h3>

              <ul className="mt-5 space-y-3 text-neutral-700">
                <li>
                  • Not every child with retinoblastoma has an inherited gene
                  change.
                </li>

                <li>
                  • Children with tumors in both eyes are more likely to have a
                  hereditary form.
                </li>

                <li>
                  • Genetic counseling may be recommended for your family.
                </li>

                <li>
                  • Early eye examinations are important for brothers, sisters,
                  and future children if an inherited RB1 mutation is found.
                </li>
              </ul>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}