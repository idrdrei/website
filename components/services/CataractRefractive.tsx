"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

const services = [
  "Comprehensive cataract evaluation",
  "Modern cataract surgery",
  "Premium intraocular lens (IOL) options",
  "LASIK, PRK, and SMILE evaluation",
  "Implantable Collamer Lens (ICL)",
  "Personalized vision correction planning",
];

export default function CataractRefractive() {
  return (
    <section className="bg-white py-24 lg:py-32">
        <section  className="py-20 lg:py-32"
></section>
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-16">
        {/* Image */}
        <FadeIn>
          <div className="group overflow-hidden rounded-[36px] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <Image
              src="/services/service-cataractref.png"
              alt="Vision restoration through cataract and refractive surgery"
              width={1400}
              height={1000}
              className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </FadeIn>

        {/* Content */}
        <FadeIn delay={0.15}>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
              Vision Restoration
            </p>

            <h2 className="mt-6 text-3xl font-light leading-tight tracking-[-0.04em] text-[#111] sm:text-5xl">
              Clearer vision,
              <br />
              tailored to you.
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Vision changes with time, but modern treatment offers more options
              than ever before. From advanced cataract surgery to laser vision
              correction, we develop personalized treatment plans to help you
              see more clearly and live with greater visual freedom.
            </p>

            <ul className="mt-10 space-y-4">
              {services.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-neutral-700"
                >
                  <span className="h-2 w-2 rounded-full bg-[#1F4E8C]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 max-w-md divide-y divide-neutral-200">
  <a
    href="/services/cataract-surgery"
    className="group flex items-center justify-between py-4 text-[#1F4E8C] transition-colors duration-300 hover:text-[#163d70]"
  >
    <span className="font-medium">
      Learn more about Cataract Surgery
    </span>

    <ArrowRight
      size={18}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </a>

  <a
    href="/services/laser-vision-correction"
    className="group flex items-center justify-between py-4 text-[#1F4E8C] transition-colors duration-300 hover:text-[#163d70]"
  >
    <span className="font-medium">
      Learn more about Laser Vision Correction
    </span>

    <ArrowRight
      size={18}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </a>
</div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}