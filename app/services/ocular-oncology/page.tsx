import type { Metadata } from "next";

import Hero from "@/components/services/ocular-oncology/Hero";
import SectionNav from "@/components/SectionNav";

import Conditions from "@/components/services/ocular-oncology/Conditions";
import WhenToSeekEvaluation from "@/components/services/ocular-oncology/WhenToSeekEvaluation";
import CareApproach from "@/components/services/ocular-oncology/CareApproach";

import RelatedServices from "@/components/RelatedServices";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Ocular Oncology",
  description:
    "Specialized diagnosis and treatment of eye tumors by Dr. Andrei Martin, a board-certified ophthalmologist with fellowship training in ocular oncology. Expertise includes retinoblastoma, choroidal melanoma, conjunctival tumors, iris tumors, and orbital tumors.",
};

export default function OcularOncologyPage() {
  return (
    <main className="bg-[#FAFAF7] text-[#111]">
      <SectionNav
        sections={[
          { id: "overview", label: "Overview" },
          { id: "conditions", label: "Conditions" },
          { id: "evaluation", label: "Evaluation" },
          { id: "approach", label: "Treatment" },
          { id: "cta", label: "Book" },
        ]}
      />

      <Hero />

      <Conditions />

      <WhenToSeekEvaluation />

      <CareApproach />

      <RelatedServices
        services={[
          {
            title: "Comprehensive Eye Care",
            description:
              "Routine eye examinations and personalized care for every stage of life.",
            href: "/services/comprehensive-eye-care",
          },
          {
            title: "Cataract Surgery",
            description:
              "Restore clear vision with modern cataract surgery and premium intraocular lens options.",
            href: "/services/cataract-surgery",
          },
          {
            title: "Laser Vision Correction",
            description:
              "Reduce your dependence on glasses or contact lenses with LASIK, PRK, or SMILE.",
            href: "/services/laser-vision-correction",
          },
        ]}
      />

      <section id="cta" className="scroll-mt-28">
        <CallToAction
          eyebrow="Schedule a Consultation"
          title="Expert care begins with the right diagnosis."
          description="Whether you're seeking an evaluation or a second opinion, we're here to support you."
        />
      </section>
    </main>
  );
}