import Hero from "@/components/home/Hero";
import Highlights from "@/components/home/Highlights";
import AreasOfCare from "@/components/home/AreasOfCare";
import WhyChoose from "@/components/home/WhyChoose";
import Clinics from "@/components/home/Clinics";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF7] text-[#111]">
      <Hero />
      <Highlights />
      <AreasOfCare />
      <WhyChoose />
      <Clinics />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}