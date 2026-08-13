import Hero from "@/components/education/glaucoma/Hero";
import WhatIsGlaucoma from "@/components/education/glaucoma/WhatIsGlaucoma";
import TypesOfGlaucoma from "@/components/education/glaucoma/TypesOfGlaucoma";
import Symptoms from "@/components/education/glaucoma/Symptoms";
import Diagnosis from "@/components/education/glaucoma/Diagnosis";
import Treatment from "@/components/education/glaucoma/Treatment";
import FAQ from "@/components/education/glaucoma/FAQ";
import CallToAction from "@/components/CallToAction";

export default function GlaucomaPage() {
  return (
    <main>
      <Hero />
      <WhatIsGlaucoma />
      <TypesOfGlaucoma />
      <Symptoms />
      <Diagnosis />
      <Treatment />
      <FAQ />
      <CallToAction />
    </main>
  );
}