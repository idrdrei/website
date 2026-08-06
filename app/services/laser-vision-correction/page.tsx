import type { Metadata } from "next";

import Hero from "@/components/services/laser-vision-correction/Hero";
import SectionNav from "@/components/SectionNav";

import VisionCorrectionOptions from "@/components/services/laser-vision-correction/VisionCorrectionOptions";
import Procedures from "@/components/services/laser-vision-correction/Procedures";
import Candidate from "@/components/services/laser-vision-correction/Candidate";
import Consultation from "@/components/services/laser-vision-correction/Consultation";
import Recovery from "@/components/services/laser-vision-correction/Recovery";

import RelatedServices from "@/components/RelatedServices";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Laser Vision Correction",
  description:
    "Reduce your dependence on glasses and contact lenses with laser vision correction by Dr. Andrei Martin. Comprehensive evaluation for LASIK, SMILE Pro, PRK, and refractive lens exchange, with personalized recommendations based on your eyes and visual goals.",
};

export default function LaserVisionCorrectionPage() {
  return (
    <>
      <SectionNav
        sections={[
          { id: "overview", label: "Overview" },
          { id: "options", label: "Procedures" },
          { id: "candidate", label: "Candidates" },
          { id: "consultation", label: "Consultation" },
          { id: "recovery", label: "Recovery" },
          { id: "cta", label: "Book" },
        ]}
      />

      <Hero />

      <VisionCorrectionOptions />

      <Procedures />

      <Candidate />

      <Consultation />

      <Recovery />

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
            title: "Ocular Oncology",
            description:
              "Expert diagnosis and treatment of benign and malignant eye tumors.",
            href: "/services/ocular-oncology",
          },
        ]}
      />

      <section id="cta" className="scroll-mt-28">
        <CallToAction />
      </section>
    </>
  );
}