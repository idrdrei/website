"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";

const tests = [
  {
    title: "Dilated Eye Examination",
    image: "/education/retinoblastoma/exam.png",
    description:
      "Your child's pupils are dilated with eye drops so the retina can be carefully examined. This is the most important step in making the diagnosis.",
  },
  {
    title: "Examination Under Anesthesia (EUA)",
    image: "/education/retinoblastoma/eua.png",
    description:
      "Young children often need to be asleep during the examination so the ophthalmologist can carefully evaluate both eyes and plan treatment safely.",
  },
  {
    title: "Ultrasound",
    image: "/education/retinoblastoma/ultrasound.jpg",
    description:
      "An ultrasound uses sound waves to create pictures of the inside of the eye. It helps confirm the diagnosis and can detect calcium within the tumor.",
  },
  {
    title: "MRI Scan",
    image: "/education/retinoblastoma/mri.jpg",
    description:
      "An MRI provides detailed images of the eye and surrounding structures. It helps determine whether the tumor has spread beyond the eye without exposing your child to radiation.",
  },
];

export default function Diagnosis() {
  return (
    <section
      id="diagnosis"
      className="scroll-mt-28 bg-[#FAFAF7] py-24"
    >
      <div className="mx-auto max-w-7xl px-8 lg:px-16">

        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
              Diagnosis
            </p>

            <h2 className="mt-6 text-4xl font-light tracking-[-0.04em] text-[#111] sm:text-5xl">
              How is retinoblastoma
              <br />
              diagnosed?
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              If retinoblastoma is suspected, several tests may be needed to
              confirm the diagnosis and determine the best treatment. These
              tests help your child's eye care team understand the size,
              location, and extent of the tumor.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {tests.map((test, index) => (
            <FadeIn key={test.title} delay={index * 0.1}>
              <div className="overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

                <Image
                  src={test.image}
                  alt={test.title}
                  width={700}
                  height={500}
                  className="h-60 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-neutral-900">
                    {test.title}
                  </h3>

                  <p className="mt-4 leading-8 text-neutral-600">
                    {test.description}
                  </p>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 rounded-[32px] border border-[#1F4E8C]/10 bg-[#F8FAFC] p-8">
            <h3 className="text-2xl font-semibold text-[#1F4E8C]">
              Will my child need a biopsy?
            </h3>

            <p className="mt-4 text-lg leading-8 text-neutral-700">
              In most cases, <strong>a biopsy is not performed</strong> for
              retinoblastoma. Experienced ophthalmologists can usually make the
              diagnosis based on the eye examination and imaging tests.
              Avoiding a biopsy helps reduce the risk of spreading tumor cells
              outside the eye.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}