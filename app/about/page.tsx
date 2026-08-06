import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr. Andrei Martin",
  description:
    "Learn about Dr. Andrei Martin, a board-certified ophthalmologist with fellowship training in ocular oncology at Wills Eye Hospital. Dedicated to personalized eye care, cataract surgery, laser vision correction, and the management of complex eye tumors.",
};

import AboutNav from "@/components/about/AboutNav";
import AboutHero from "@/components/about/AboutHero";
import AtAGlance from "@/components/about/AtAGlance";
import MyJourney from "@/components/about/MyJourney";
import SpecializedCare from "@/components/about/SpecializedCare";
import SelectedExpertise from "@/components/about/SelectedExpertise";
import ProfessionalProfile from "@/components/about/ProfessionalProfile";
import Philosophy from "@/components/about/Philosophy";
import CallToAction from "@/components/CallToAction";

export default function AboutPage() {
  return (
    <>
      <AboutNav />

      <AboutHero />

      <AtAGlance />

      <MyJourney />

      <SpecializedCare />

      <SelectedExpertise />

      <ProfessionalProfile />

      <Philosophy />

      <CallToAction />
    </>
  );
}