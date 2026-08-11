import Hero from "@/components/education/retina/Hero";
import DiabeticRetinopathy from "@/components/education/retina/DiabeticRetinopathy";
import MacularDegeneration from "@/components/education/retina/MacularDegeneration";
import RetinalDetachment from "@/components/education/retina/RetinalDetachment";
import FAQ from "@/components/education/retina/FAQ";
import CallToAction from "@/components/CallToAction";

export default function RetinaPage() {
  return (
    <main>
      <Hero />
      <DiabeticRetinopathy />
      <MacularDegeneration />
      <RetinalDetachment />
      <FAQ />
      <CallToAction />
    </main>
  );
}