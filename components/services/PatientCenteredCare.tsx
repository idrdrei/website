"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const principles = [
  "Personalized treatment plans",
  "Shared decision-making",
  "Clear communication at every visit",
  "Compassionate, unhurried consultations",
  "Long-term partnerships in eye health",
  "Care guided by evidence and experience",
];

export default function PatientCenteredCare() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-16">
        {/* Content */}
        <FadeIn>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
              Patient-Centered Care
            </p>

            <h2 className="mt-6 text-3xl font-light leading-tight tracking-[-0.04em] text-[#111] sm:text-5xl">
              Every treatment
              <br />
              begins with
              <br />
              listening.
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Exceptional eye care goes beyond diagnosis and treatment. We take
              time to understand your concerns, explain every option clearly,
              and create a care plan that fits your vision, lifestyle, and
              long-term goals.
            </p>

            <ul className="mt-10 space-y-4">
              {principles.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-neutral-700"
                >
                  <span className="h-2 w-2 rounded-full bg-[#1F4E8C]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Image */}
        <FadeIn delay={0.15}>
          <div className="group overflow-hidden rounded-[36px] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <Image
              src="/services/patient-centered-care.png"
              alt="Patient consultation"
              width={1400}
              height={1000}
              className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}