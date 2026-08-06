"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const technologies = [
  {
    title: "Slit Lamp Examination",
    description:
      "A detailed examination of the front of the eye allows evaluation of the cornea, iris, lens, eyelids, and ocular surface.",
    image: "/services/comprehensive-eye-care/slitlamp1.png",
  },
  {
    title: "Corneal Topography",
    description:
      "Creates a precise map of the corneal surface, helping diagnose astigmatism, keratoconus, and suitability for refractive surgery.",
    image: "/services/comprehensive-eye-care/topography.png",
  },
  {
    title: "Ultrasound Biomicroscopy (UBM)",
    description:
      "High-frequency ultrasound provides detailed visualization of the iris, ciliary body, angle structures, and anterior segment tumors.",
    image: "/services/comprehensive-eye-care/imaging.png",
  },
  {
    title: "Optical Coherence Tomography (OCT)",
    description:
      "Cross-sectional imaging of the retina and optic nerve allows early detection and monitoring of retinal and optic nerve diseases.",
    image: "/services/comprehensive-eye-care/oct.png",
  },
  {
    title: "Fundus Photography",
    description:
      "High-resolution retinal photographs document the health of the retina and optic nerve for accurate diagnosis and long-term follow-up.",
    image: "/services/comprehensive-eye-care/fundus.png",
  },
  {
    title: "Visual Field Testing",
    description:
      "Measures peripheral vision and detects functional vision loss from glaucoma and other neurological or retinal disorders.",
    image: "/services/comprehensive-eye-care/visual-field.png",
  },
];

export default function Technology() {
  return (
    <section
    id="diagnostics"
     className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1F4E8C]">
              Advanced Diagnostic Technology
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
              Looking Beyond
              <span className="block font-semibold">
                What the Eye Can See
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Modern ophthalmology combines a comprehensive clinical examination
              with advanced imaging technology to detect disease earlier,
              confirm diagnoses, and guide personalized treatment decisions.
            </p>
          </div>
        </FadeIn>

        {/* Gallery */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {technologies.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.04}>
              <div className="group h-full overflow-hidden rounded-[32px] border border-neutral-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#1F4E8C]/20 hover:shadow-2xl">

                {/* Image */}

                <div className="flex aspect-square items-center justify-center overflow-hidden bg-neutral-50 p-8">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={900}
                    height={900}
                    className="max-h-full w-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}

                <div className="p-8">

                  <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-[#1F4E8C]">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-neutral-600">
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