"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const conditions = [
  {
    title: "Choroidal Melanoma",
    description:
      "The most common primary eye cancer in adults, requiring specialized diagnosis and individualized treatment.",
    href: "/education/choroidal-melanoma",
  },
 {
  title: "Retinoblastoma",
  description:
    "A rare childhood eye cancer where early diagnosis is essential to preserve life, the eye, and vision.",
  href: "/education/retinoblastoma",
},
  {
    title: "Ocular Surface Tumors",
    description:
      "Evaluation and management of benign, pre-cancerous, and malignant tumors of the conjunctiva.",
  },
  {
    title: "Orbital Tumors",
    description:
      "Comprehensive care for tumors affecting the tissues surrounding the eye through multidisciplinary collaboration.",
  },
  {
    title: "Eyelid Tumors",
    description:
      "Diagnosis, biopsy, and treatment of benign and malignant eyelid lesions with attention to both function and appearance.",
  },
  {
    title: "Ocular Metastasis",
    description:
      "Specialized evaluation and coordinated care for cancers that have spread to the eye.",
  },
];

export default function Conditions() {
  return (
    <Section id="conditions" background="white">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        <SectionHeader
          eyebrow="Conditions We Treat"
          title={
            <>
              Expertise across the
              <br />
              full spectrum of
              <br />
              ocular tumors.
            </>
          }
          description={
            <>
              Every condition is unique. Treatment recommendations are
              individualized based on the diagnosis, extent of disease,
              visual potential, and the patient's overall health.
            </>
          }
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {conditions.map((condition, index) => {
           const Card = (
  <div className="group flex h-full flex-col rounded-[32px] border border-neutral-200 bg-[#FAFAF7] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#1F4E8C]/20 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
    <div className="h-1 w-12 rounded-full bg-[#1F4E8C] transition-all duration-500 group-hover:w-20" />

    <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#111]">
      {condition.title}
    </h3>

    <p className="mt-5 leading-8 text-neutral-600">
      {condition.description}
    </p>

    {condition.href && (
      <div className="mt-auto pt-8">
        <span className="inline-flex items-center gap-2 font-medium text-[#1F4E8C] transition-all duration-300 group-hover:gap-3">
          Learn More
          <span aria-hidden="true">→</span>
        </span>
      </div>
    )}
  </div>
);

            return (
              <FadeIn key={condition.title} delay={index * 0.05}>
                {condition.href ? (
                  <Link href={condition.href} className="block h-full">
                    {Card}
                  </Link>
                ) : (
                  Card
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </Section>
  );
}