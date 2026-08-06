"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import {
  CalendarCheck2,
  ClipboardList,
  Eye,
  ScanSearch,
  FileText,
} from "lucide-react";

const steps = [
  {
    icon: CalendarCheck2,
    title: "Appointment & History",
    description:
      "We begin by discussing your symptoms, medical history, medications, previous eye conditions, and visual concerns.",
    image: "/services/comprehensive-eye-care/history.png",
  },
  {
    icon: ClipboardList,
    title: "Vision Assessment",
    description:
      "Your visual acuity, refraction, and eye pressure are measured to understand your current vision and eye health.",
    image: "/services/comprehensive-eye-care/vision-assessment.png",
  },
  {
    icon: Eye,
    title: "Comprehensive Eye Examination",
    description:
      "Using a slit lamp and dilated retinal examination when indicated, we evaluate both the front and back of your eyes.",
    image: "/services/comprehensive-eye-care/slitlamp.jpg",
  },
  {
    icon: ScanSearch,
    title: "Advanced Imaging",
    description:
      "Additional testing such as OCT, fundus photography, visual fields, corneal topography, or ultrasound is performed when needed.",
    image: "/services/comprehensive-eye-care/imaging.png",
  },
  {
    icon: FileText,
    title: "Treatment Plan",
    description:
      "We'll explain the findings, answer your questions, and recommend a personalized treatment plan.",
    image: "/services/comprehensive-eye-care/treatment-plan.jpg",
  },
];

export default function WhatToExpect() {
  return (
    <section
    id="expect"
     className="bg-neutral-50 py-32">
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1F4E8C]">
              Your Visit
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
              What to Expect
              <span className="block font-semibold">
                During Your Appointment
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              From your initial consultation to a personalized treatment plan,
              every step is focused on understanding your eyes and providing
              the best possible care.
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Connecting line */}

          <div className="absolute left-0 right-0 top-10 hidden h-px bg-neutral-200 lg:block" />

          <div className="grid gap-10 lg:grid-cols-5">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <FadeIn key={step.title} delay={index * 0.08}>
                  <div className="relative text-center">

                    {/* Circle */}

                    <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:border-[#1F4E8C] hover:bg-[#1F4E8C] group">

                      <Icon
                        size={34}
                        className="text-[#1F4E8C] transition-colors duration-300 group-hover:text-white"
                      />

                    </div>

                    {/* Step */}

                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#1F4E8C]">
                      Step {index + 1}
                    </p>

                    {/* Title */}

                    <h3 className="mt-3 text-xl font-semibold text-neutral-900">
                      {step.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-4 leading-7 text-neutral-600">
                      {step.description}
                    </p>

                  </div>
                </FadeIn>
              );
            })}

          </div>

        </div>

        {/* Large Illustration */}

        <FadeIn delay={0.3}>
          <div className="group mt-24 overflow-hidden rounded-[36px] bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">

            <Image
              src="/services/comprehensive-eye-care/patient-journey3.png"
              alt="Comprehensive eye examination"
              width={1600}
              height={900}
              className="aspect-[16/9] w-full rounded-[24px] object-cover transition duration-700 group-hover:scale-[1.02]"
            />

          </div>
        </FadeIn>

      </div>
    </section>
  );
}