import type { Metadata } from "next";

import Breadcrumbs from "@/components/Breadcrumbs";
import SectionNav from "@/components/SectionNav";
import CallToAction from "@/components/CallToAction";

import Hero from "@/components/education/retinoblastoma/Hero";
import About from "@/components/education/retinoblastoma/About";
import WarningSigns from "@/components/education/retinoblastoma/WarningSigns";
import WhenToSeekEvaluation from "@/components/education/retinoblastoma/WhenToSeekEvaluation";
import Diagnosis from "@/components/education/retinoblastoma/Diagnosis";
import Treatment from "@/components/education/retinoblastoma/Treatment";
import Vision from "@/components/education/retinoblastoma/Vision";
import Genetics from "@/components/education/retinoblastoma/Genetics";
import FAQ from "@/components/education/retinoblastoma/FAQ";

export const metadata: Metadata = {
  title: "Retinoblastoma | Symptoms, Diagnosis & Treatment",
  description:
    "Learn about retinoblastoma, the most common eye cancer in children. Discover the warning signs, diagnosis, treatment options, genetics, and when to seek urgent evaluation.",
};

const sections = [
  { id: "about", label: "About" },
  { id: "warning-signs", label: "Warning Signs" },
  { id: "when-to-seek-evaluation", label: "Seek Evaluation" },
  { id: "diagnosis", label: "Diagnosis" },
  { id: "treatment", label: "Treatment" },
  { id: "vision", label: "Vision" },
  { id: "genetics", label: "Genetics" },
  { id: "faq", label: "FAQ" },
];

export default function RetinoblastomaPage() {
  return (
    <main className="bg-white">
      

      <Hero />

      <SectionNav sections={sections} />

      <About />

      <WarningSigns />

      <WhenToSeekEvaluation />

      <Diagnosis />

      <Treatment />

      <Vision />

      <Genetics />

      <FAQ />

      <CallToAction
        eyebrow="Request an Appointment"
        title={
          <>
            Concerned about your
            <br />
            child's eyes?
          </>
        }
        description="If you've noticed a white pupil, crossed eyes, or any other concerning changes, early evaluation is important. Request an appointment to have your child examined."
      />
    </main>
  );
}