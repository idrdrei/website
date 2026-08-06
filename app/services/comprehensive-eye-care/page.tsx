import type { Metadata } from "next";

import Hero from "@/components/services/comprehensive-eye-care/Hero";
import SectionNav from "@/components/SectionNav";
import VisionAtEveryStage from "@/components/services/comprehensive-eye-care/VisionAtEveryStage";
import CommonConditions from "@/components/services/comprehensive-eye-care/CommonConditions";
import Technology from "@/components/services/comprehensive-eye-care/Technology";
import WhatToExpect from "@/components/services/comprehensive-eye-care/WhatToExpect";

import RelatedServices from "@/components/RelatedServices";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Comprehensive Eye Care",
  description:
    "Comprehensive eye care by Dr. Andrei Martin, including routine eye examinations, diabetic eye disease, glaucoma screening, dry eye treatment, retinal disorders, and personalized vision care for patients of all ages.",
};

export default function ComprehensiveEyeCarePage() {
  return (
    <>
      <SectionNav
        sections={[
          { id: "overview", label: "Overview" },
          { id: "condition", label: "Common Conditions" },
          { id: "diagnostics", label: "Diagnostics" },
          { id: "expect", label: "Visit" },
          { id: "cta", label: "Book" },
        ]}
      />

      <Hero />

      <VisionAtEveryStage />

      <CommonConditions />

      <Technology />

      <WhatToExpect />

      <RelatedServices
        services={[
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