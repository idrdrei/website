import type { Metadata } from "next";

import Hero from "@/components/education/Hero";
import SectionNav from "@/components/SectionNav";

import WhyEducation from "@/components/education/WhyEducation";
import FeaturedTopics from "@/components/education/FeaturedTopics";
import WatchLearn from "@/components/education/WatchLearn";
import FAQ from "@/components/education/FAQ";

import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Patient Education",
  description:
    "Explore evidence-based patient education by Dr. Andrei Martin covering cataracts, laser vision correction, eye tumors, retinal diseases, children's eye health, dry eye, glaucoma, and everyday eye care.",
};

export default function EducationPage() {
  return (
    <>
      <SectionNav
        sections={[
          { id: "overview", label: "Overview" },
          { id: "topics", label: "Topics" },
          { id: "videos", label: "Videos" },
          { id: "faq", label: "FAQs" },
          { id: "cta", label: "Contact" },
        ]}
      />

      <Hero />

      <WhyEducation />

      <FeaturedTopics />

      <WatchLearn />

      <FAQ />

      <section id="cta" className="scroll-mt-28">
        <CallToAction />
      </section>
    </>
  );
}