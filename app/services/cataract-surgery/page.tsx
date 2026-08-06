import type { Metadata } from "next";

import Hero from "@/components/services/cataract-surgery/Hero";
import SectionNav from "@/components/SectionNav";

import UnderstandingCataract from "@/components/services/cataract-surgery/UnderstandingCataract";
import Symptoms from "@/components/services/cataract-surgery/Symptoms";
import CataractSurgery from "@/components/services/cataract-surgery/CataractSurgery";
import RecoveryResult from "@/components/services/cataract-surgery/RecoveryResult";

import RelatedServices from "@/components/RelatedServices";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Cataract Surgery",
  description:
    "Restore clear vision with advanced cataract surgery by Dr. Andrei Martin, a board-certified ophthalmologist. Modern microincision cataract surgery with premium intraocular lens options tailored to your visual needs and lifestyle.",
};

export default function CataractSurgeryPage() {
  return (
    <>
      <SectionNav
        sections={[
          { id: "overview", label: "Overview" },
          { id: "understanding", label: "Understanding" },
          { id: "symptoms", label: "Symptoms" },
          { id: "surgery", label: "Surgery" },
          { id: "recovery", label: "Recovery" },
          { id: "cta", label: "Book" },
        ]}
      />

      <Hero />

      <UnderstandingCataract />

      <Symptoms />

      <CataractSurgery />

      <RecoveryResult />

      <RelatedServices
        services={[
          {
            title: "Comprehensive Eye Care",
            description:
              "Routine eye examinations and personalized care for every stage of life.",
            href: "/services/comprehensive-eye-care",
          },
          {
            title: "Laser Vision Correction",
            description:
              "Reduce your dependence on glasses or contact lenses with LASIK, PRK, or SMILE.",
            href: "/services/laser-vision-correction",
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