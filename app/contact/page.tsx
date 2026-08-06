import type { Metadata } from "next";

import Hero from "@/components/contact/Hero";
import SectionNav from "@/components/SectionNav";

import ContactMethods from "@/components/contact/ContactMethods";
import Locations from "@/components/contact/Locations";
import ClinicHours from "@/components/contact/ClinicHours";
import FAQ from "@/components/contact/FAQ";

import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book an appointment with Dr. Andrei Martin, a board-certified ophthalmologist. Find clinic locations in Quezon City, Makati, and Antipolo, consultation schedules, contact information, and answers to frequently asked questions.",
};

export default function ContactPage() {
  return (
    <>
      <SectionNav
        sections={[
          { id: "contact", label: "Contact" },
          { id: "locations", label: "Locations" },
          { id: "hours", label: "Hours" },
          { id: "faq", label: "FAQs" },
          { id: "cta", label: "Book" },
        ]}
      />

      <Hero />

      <ContactMethods />

      <Locations />

      <ClinicHours />

      <FAQ />

      <section id="cta" className="scroll-mt-28">
        <CallToAction />
      </section>
    </>
  );
}