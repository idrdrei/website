import type { Metadata } from "next";

import Hero from "@/components/clinics/Hero";
import SectionNav from "@/components/SectionNav";

import Locations from "@/components/clinics/Locations";
import Schedule from "@/components/clinics/Schedule";
import WhatToExpect from "@/components/clinics/WhatToExpect";
import FAQ from "@/components/clinics/FAQ";

import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Clinic Locations",
  description:
    "Visit Dr. Andrei Martin at conveniently located clinics in Quezon City, Makati, and Antipolo. View consultation schedules, clinic locations, directions, and information to help you prepare for your visit.",
};

export default function ClinicsPage() {
  return (
    <>
      <SectionNav
        sections={[
          { id: "locations", label: "Locations" },
          { id: "schedule", label: "Schedule" },
          { id: "visit", label: "Your Visit" },
          { id: "faq", label: "FAQs" },
          { id: "cta", label: "Book" },
        ]}
      />

      <Hero />

      <Locations />

      <Schedule />

      <WhatToExpect />

      <FAQ />

      <section id="cta" className="scroll-mt-28">
        <CallToAction />
      </section>
    </>
  );
}