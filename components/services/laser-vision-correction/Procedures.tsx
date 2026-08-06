"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { Check } from "lucide-react";

const procedures = [
  {
    title: "LASIK",
    eyebrow: "Most Popular",
    description:
      "LASIK is the most commonly performed laser vision correction procedure worldwide. A thin corneal flap is created, allowing the excimer laser to precisely reshape the cornea for clearer vision. Most patients experience rapid visual recovery and minimal discomfort.",
    highlights: [
      "Fast visual recovery",
      "Minimal discomfort",
      "Excellent for many common prescriptions",
    ],
    image: "/services/laser-vision-correction/lasik-line-art.png",
  },
  {
    title: "SMILE",
    eyebrow: "Minimally Invasive",
    description:
      "SMILE (Small Incision Lenticule Extraction) reshapes the cornea through a tiny incision without creating a corneal flap. It preserves more of the corneal surface and may reduce postoperative dry eye symptoms in selected patients.",
    highlights: [
      "Tiny incision",
      "No corneal flap",
      "Reduced dry eye risk for suitable candidates",
    ],
    image: "/services/laser-vision-correction/smile-line-art.png",
  },
  {
    title: "PRK",
    eyebrow: "Flap-Free",
    description:
      "PRK reshapes the surface of the cornea without creating a flap. Although recovery takes slightly longer than LASIK, it remains an excellent option for patients with thinner corneas or certain occupational and athletic requirements.",
    highlights: [
      "No corneal flap",
      "Suitable for thinner corneas",
      "Excellent long-term results",
    ],
    image: "/services/laser-vision-correction/prk-line-art.png",
  },
  {
    title: "ICL",
    eyebrow: "Premium Lens Option",
    description:
      "Implantable Collamer Lenses (ICL) provide excellent vision correction for patients with higher prescriptions or those who may not be ideal candidates for laser procedures. The natural lens remains in place while the ICL is implanted behind the iris.",
    highlights: [
      "Excellent for high prescriptions",
      "Preserves the cornea",
      "Removable if needed",
    ],
    image: "/services/laser-vision-correction/ICL-line-artV1.png",
  },
];

export default function Procedures() {
  return (
    <section 
    id="options"
    className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mx-auto mb-24 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1F4E8C]">
              Learn About Each Procedure
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
              Which Procedure
              <span className="block font-semibold">
                Is Right for You?
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Every patient's eyes are different. During your consultation,
              we'll recommend the procedure that best matches your prescription,
              corneal anatomy, lifestyle, and visual goals.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-32">
          {procedures.map((procedure, index) => (
            <FadeIn key={procedure.title}>
              <div
                className={`grid items-center gap-16 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}

                <div className="flex justify-center">
                  <img
  src={procedure.image}
  alt={procedure.title}
  className="w-full max-w-lg transition-transform duration-500 hover:scale-105"
/>
                </div>

                {/* Text */}

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1F4E8C]">
                    {procedure.eyebrow}
                  </p>

                  <h3 className="mt-4 text-4xl font-light text-neutral-900">
                    <span className="font-semibold">
                      {procedure.title}
                    </span>
                  </h3>

                  <p className="mt-8 text-lg leading-8 text-neutral-600">
                    {procedure.description}
                  </p>

                  <div className="mt-10 space-y-4">
                    {procedure.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-4"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1F4E8C]/10">
                          <Check
                            size={16}
                            className="text-[#1F4E8C]"
                          />
                        </div>

                        <span className="text-neutral-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}