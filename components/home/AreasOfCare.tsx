"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Ocular Oncology",
    description:
      "Diagnosis and treatment of tumors involving the eye, eyelids, orbit, and ocular surface using modern medical and surgical techniques.",
    href: "/services/ocular-oncology",
  },
  {
    title: "Cataract Surgery",
    description:
      "Advanced microincision cataract surgery with premium intraocular lens options tailored to your visual goals.",
    href: "/services/cataract-surgery",
  },
  {
    title: "LASIK & Refractive Surgery",
    description:
      "Comprehensive evaluation for laser vision correction to reduce dependence on glasses and contact lenses.",
    href: "/services/laser-vision-correction",
  },
  {
    title: "Comprehensive Eye Care",
    description:
      "Evaluation and personalized management of common and complex eye conditions.",
    href: "/services/comprehensive-eye-care",
  },
];

export default function AreasOfCare() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Heading */}
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F4E8C]">
              Areas of Care
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-[-0.03em] text-[#111] lg:text-5xl">
              Specialized Eye Care
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              From routine eye care to highly specialized surgical treatment,
              every patient receives personalized care focused on preserving
              and restoring vision.
            </p>
          </div>
        </FadeIn>

        {/* Services */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <Link
                href={service.href}
                className="group block rounded-[36px] border border-gray-200 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-start justify-between gap-6">
                  <h3 className="text-2xl font-medium text-[#111]">
                    {service.title}
                  </h3>

                  <ArrowRight
                    size={22}
                    className="mt-1 text-[#1F4E8C] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </div>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Children's Eye Health Hook */}
<FadeIn delay={0.45}>
  <div className="mt-14">
    <Link
      href="/education/childrens-eye-health"
      className="group block rounded-[28px] border border-[#1F4E8C]/15 bg-[#1F4E8C]/[0.04] px-7 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#1F4E8C]/30 hover:bg-[#1F4E8C]/[0.07] hover:shadow-lg sm:px-9 sm:py-8"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1F4E8C]">
            For Parents
          </p>

          <h3 className="mt-3 text-2xl font-medium tracking-tight text-gray-900 sm:text-3xl">
            Is your child spending too much time on screens?
          </h3>

          <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600">
            Learn simple ways to protect your child&apos;s developing vision,
            recognize warning signs, and build healthier screen habits.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2 text-sm font-medium text-[#1F4E8C]">
          <span>Learn more</span>

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>

      </div>
    </Link>
  </div>
</FadeIn>

      </div>
    </section>
  );
}