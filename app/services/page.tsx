import type { Metadata } from "next";

import ServicesNav from "@/components/services/ServicesNav";
import ServicesHero from "@/components/services/ServicesHero";
import ComprehensiveEyeCare from "@/components/services/ComprehensiveEyeCare";
import OcularOncology from "@/components/services/OcularOncology";
import CataractRefractive from "@/components/services/CataractRefractive";
import PatientCenteredCare from "@/components/services/PatientCenteredCare";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Eye Care Services",
  description:
    "Comprehensive eye care services by Dr. Andrei Martin, including ocular oncology, cataract surgery, laser vision correction, and comprehensive ophthalmology tailored to every stage of life.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Secondary Navigation */}
      <ServicesNav />

      {/* Hero */}
      <section id="top">
        <ServicesHero />
      </section>

      {/* Sections */}
      <section id="routine-eye-care">
        <ComprehensiveEyeCare />
      </section>

      <section id="ocular-oncology">
        <OcularOncology />
      </section>

      <section id="vision-restoration">
        <CataractRefractive />
      </section>

      <section id="patient-centered-care">
        <PatientCenteredCare />
      </section>

      {/* Contact */}
      <section id="contact">
        <CallToAction />
      </section>
    </>
  );
}