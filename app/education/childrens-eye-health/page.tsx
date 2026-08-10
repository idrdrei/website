import type { Metadata } from "next";

import Hero from "@/components/education/childrens-eye-health/Hero";
import SectionNav from "@/components/SectionNav";

import WhyItMatters from "@/components/education/childrens-eye-health/WhyItMatters";
import ScreenTime from "@/components/education/childrens-eye-health/ScreenTime";
import TwentyTwentyTwenty from "@/components/education/childrens-eye-health/TwentyTwentyTwenty";
import Myopia from "@/components/education/childrens-eye-health/Myopia";
import OutdoorTime from "@/components/education/childrens-eye-health/OutdoorTime";
import EyeExams from "@/components/education/childrens-eye-health/EyeExams";
import ChildrenWarningSigns from "@/components/education/childrens-eye-health/ChildrenWarningSigns";
import HealthyHabits from "@/components/education/childrens-eye-health/HealthyHabits";
import FAQ from "@/components/education/childrens-eye-health/FAQ";

import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Children's Eye Health",
  description:
    "A parent's guide to children's eye health, including screen time, myopia, outdoor time, eye examinations, warning signs, and healthy vision habits.",
};

export default function ChildrensEyeHealthPage() {
  return (
    <>
      <SectionNav
        sections={[
          { id: "overview", label: "Overview" },
          { id: "screen-time", label: "Screen Time" },
          { id: "myopia", label: "Myopia" },
          { id: "eye-exams", label: "Eye Exams" },
          { id: "warning-signs", label: "Warning Signs" },
          { id: "healthy-habits", label: "Healthy Habits" },
          { id: "faq", label: "FAQ" },
          { id: "cta", label: "Book" },
        ]}
      />

      <section id="overview" className="scroll-mt-28">
        <Hero />
      </section>

      <WhyItMatters />

      <ScreenTime />

      <TwentyTwentyTwenty />

      <section id="myopia" className="scroll-mt-28">
        <Myopia />
      </section>

      <OutdoorTime />

      <section id="eye-exams" className="scroll-mt-28">
        <EyeExams />
      </section>

      <ChildrenWarningSigns />

      <section id="healthy-habits" className="scroll-mt-28">
        <HealthyHabits />
      </section>

      <section id="faq" className="scroll-mt-28">
        <FAQ />
      </section>

      <section id="cta" className="scroll-mt-28">
        <CallToAction />
      </section>
    </>
  );
}