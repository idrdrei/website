"use client";

import FadeIn from "@/components/FadeIn";
import {
  ShieldCheck,
  ScanEye,
  Microscope,
  HeartHandshake,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Comprehensive Eye Care",
    description:
      "Routine eye examinations focused on prevention, early detection, and long-term visual health for patients of all ages.",
  },
  {
    icon: ScanEye,
    title: "Ocular Oncology",
    description:
      "Evaluation and treatment of benign and malignant eye tumors using modern diagnostic imaging and evidence-based care.",
  },
  {
    icon: Microscope,
    title: "Cataract & Refractive Surgery",
    description:
      "Advanced surgical solutions to restore clarity and reduce dependence on glasses through personalized treatment planning.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centered Care",
    description:
      "Every consultation is designed around education, shared decision-making, and treatment plans tailored to your needs.",
  },
];

export default function SignatureServices() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
              What We Offer
            </p>

            <h2 className="mt-6 text-3xl font-light tracking-[-0.04em] text-[#111] sm:text-4xl lg:text-6xl">
              Expertise across every stage of your eye health.
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Whether you're visiting for a routine eye examination or a
              highly specialized condition, every recommendation is grounded in
              clinical evidence, modern technology, and compassionate care.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <div className="group rounded-[32px] border border-neutral-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl">
                <service.icon
                  className="h-10 w-10 text-[#1F4E8C]"
                  strokeWidth={1.6}
                />

                <h3 className="mt-6 text-2xl font-light text-[#111]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-neutral-600">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}