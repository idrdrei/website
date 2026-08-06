import {
  Eye,
  Sparkles,
  CircleDot,
  MoonStar,
  Search,
} from "lucide-react";

import type { Metadata } from "next";
import Image from "next/image";

import SectionNav from "@/components/SectionNav";

import ArticleHero from "@/components/education/guide/ArticleHero";
import AboutGuide from "@/components/education/guide/AboutGuide";
import KeyPoints from "@/components/education/guide/KeyPoints";
import ArticleSection from "@/components/education/guide/ArticleSection";
import InfoBox from "@/components/education/guide/InfoBox";
import FAQ from "@/components/education/guide/FAQ";
import RelatedArticles from "@/components/education/guide/RelatedArticles";

import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Understanding Choroidal Melanoma",
  description:
    "A patient-friendly guide to choroidal melanoma. Learn about symptoms, diagnosis, treatment options, and what to expect in simple, easy-to-understand language.",
};

export default function ChoroidalMelanomaPage() {
  return (
    <>
      <SectionNav
        sections={[
          { id: "overview", label: "Overview" },
          { id: "key-points", label: "Key Points" },
          { id: "understanding", label: "Understanding" },
          { id: "symptoms", label: "Symptoms" },
          { id: "diagnosis", label: "Diagnosis" },
          { id: "treatment", label: "Treatment" },
          { id: "faq", label: "Questions" },
          { id: "cta", label: "Contact" },
        ]}
      />

      <ArticleHero />

      <AboutGuide />

      <KeyPoints />

      {/* Understanding */}

<ArticleSection
  id="understanding"
  title="What is choroidal melanoma?"
>
  <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">

    {/* Left Card */}

    <div className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm">

      <h3 className="text-2xl font-medium tracking-tight text-[#111]">
        Understanding the condition
      </h3>

      <p className="mt-6 leading-8 text-neutral-700">
        Choroidal melanoma is a <strong>type of eye cancer</strong> that
        develops inside the eye. It begins in the{" "}
        <strong>choroid</strong>, a layer beneath the retina that supplies
        oxygen and nutrients to the back of the eye.
      </p>

      <p className="mt-6 leading-8 text-neutral-700">
        Although uncommon, it is the{" "}
        <strong>most common eye cancer that begins inside the eye in adults.</strong>
        Many people have no symptoms when it is first discovered, which is why
        it is often detected during a routine dilated eye examination.
      </p>

      <div className="mt-8 rounded-[24px] bg-[#1F4E8C]/5 p-6">

        <h4 className="text-lg font-semibold text-[#111]">
          At a glance
        </h4>

        <div className="mt-5 space-y-4">

          <div className="flex justify-between border-b border-[#1F4E8C]/10 pb-3">
            <span className="text-neutral-500">Location</span>
            <span className="font-medium text-[#111]">Inside the eye</span>
          </div>

          <div className="flex justify-between border-b border-[#1F4E8C]/10 pb-3">
            <span className="text-neutral-500">Type</span>
            <span className="font-medium text-[#111]">Eye cancer</span>
          </div>

          <div className="flex justify-between border-b border-[#1F4E8C]/10 pb-3">
            <span className="text-neutral-500">Most common in</span>
            <span className="font-medium text-[#111]">Adults</span>
          </div>

          <div className="flex justify-between">
            <span className="text-neutral-500">Symptoms</span>
            <span className="font-medium text-[#111]">
              Often none at first
            </span>
          </div>

        </div>

      </div>

    </div>

    {/* Right Image */}

    <div>

      <Image
        src="/education/choroidal-melanoma/fundus01.png"
        alt="Wide-field retinal photograph showing a choroidal melanoma."
        width={2200}
        height={1800}
        priority
        className="w-full rounded-[32px] border border-neutral-200 object-cover shadow-xl"
      />

      <p className="mt-5 text-center text-sm italic leading-6 text-neutral-500">
        <strong>Figure 1.</strong> Wide-field retinal photograph showing a
        choroidal melanoma. The appearance of a
        choroidal melanoma can vary depending on its size, color, and
        location within the eye.
      </p>

    </div>

  </div>

  <div className="mt-12 rounded-[32px] border border-[#1F4E8C]/10 bg-gradient-to-br from-[#1F4E8C]/5 to-white p-8 lg:p-10">

    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1F4E8C]">
      Looking Ahead
    </p>

    <h3 className="mt-3 text-3xl font-light tracking-[-0.03em] text-[#111]">
      There is reason to be hopeful.
    </h3>

    <p className="mt-6 leading-8 text-neutral-700">
      Hearing the words <strong>"eye cancer"</strong> can be overwhelming.
      Fortunately, treatment has advanced tremendously over the past few
      decades. Today, many patients can be treated while preserving the eye,
      and in many cases, useful vision.
    </p>

    <p className="mt-5 leading-8 text-neutral-700">
      Every person's situation is different. Your ocular oncologist will
      recommend the treatment that offers the best balance between
      controlling the tumor, preserving vision whenever possible, and
      protecting your long-term health.
    </p>

  </div>

</ArticleSection>
      {/* Symptoms */}
{/* Symptoms */}

<ArticleSection
  id="symptoms"
  title="What symptoms can it cause?"
>
  <p>
    Many people with choroidal melanoma have{" "}
    <strong>no symptoms</strong>, especially when the tumor is small. In many
    cases, it is discovered during a routine eye examination before it affects
    vision.
  </p>

  <div className="mt-10 grid gap-6 md:grid-cols-2">

    {[
      {
        icon: Eye,
        title: "Blurred Vision",
        description:
          "The tumor may affect the retina, causing blurred or distorted vision.",
      },
      {
        icon: Sparkles,
        title: "Flashes of Light",
        description:
          "Some patients notice brief flashes of light, especially if the retina becomes irritated.",
      },
      {
        icon: CircleDot,
        title: "New Floaters",
        description:
          "New spots, specks, or cobweb-like shapes may appear in your field of vision.",
      },
      {
        icon: MoonStar,
        title: "Shadow in Vision",
        description:
          "A larger tumor can create a shadow or missing area in your side vision.",
      },
      {
        icon: Search,
        title: "No Symptoms",
        description:
          "Many choroidal melanomas are found during a routine eye examination before any symptoms develop.",
        full: true,
      },
    ].map((item) => (
      <div
        key={item.title}
        className={`rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
          item.full ? "md:col-span-2" : ""
        }`}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1F4E8C]/10">
          <item.icon className="h-7 w-7 text-[#1F4E8C]" />
        </div>

        <h3 className="mt-6 text-2xl font-medium tracking-tight text-[#111]">
          {item.title}
        </h3>

        <p className="mt-4 leading-8 text-neutral-600">
          {item.description}
        </p>
      </div>
    ))}

  </div>

  <div className="mt-12 rounded-[28px] border border-amber-200 bg-amber-50 p-8">

    <h3 className="text-xl font-medium text-[#111]">
      When should I see an eye doctor?
    </h3>

    <p className="mt-4 leading-8 text-neutral-700">
      These symptoms do not always mean you have choroidal melanoma. Many
      common eye conditions can cause similar symptoms. However, if you notice
      new flashes, floaters, blurred vision, or a shadow in your vision, you
      should arrange a prompt eye examination.
    </p>

  </div>

</ArticleSection>

      {/* Diagnosis */}

      {/* Diagnosis */}

<ArticleSection
  id="diagnosis"
  title="How is it diagnosed?"
>
  <p>
    If your eye doctor suspects a choroidal melanoma, several painless tests
    can help confirm the diagnosis. Each test provides different information
    about the tumor and helps determine the most appropriate treatment.
  </p>

  <div className="mt-10 grid gap-6 md:grid-cols-2">

    <div className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-medium text-[#111]">
        👁️ Dilated Eye Examination
      </h3>

      <p className="mt-4 leading-8 text-neutral-600">
        Eye drops are used to enlarge the pupils so your doctor can examine
        the retina and choroid. This is often the first step in detecting a
        choroidal melanoma.
      </p>
    </div>

    <div className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-medium text-[#111]">
        📷 Retinal Photography
      </h3>

      <p className="mt-4 leading-8 text-neutral-600">
        High-resolution photographs document the size, shape, and location of
        the tumor. They also allow your doctor to compare future images and
        monitor for changes over time.
      </p>
    </div>

    <div className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-medium text-[#111]">
        📡 Ocular Ultrasound
      </h3>

      <p className="mt-4 leading-8 text-neutral-600">
        Ultrasound uses sound waves to measure the thickness and internal
        characteristics of the tumor. This is one of the most important tests
        used to confirm the diagnosis.
      </p>
    </div>

    <div className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-medium text-[#111]">
        🔬 OCT Scan
      </h3>

      <p className="mt-4 leading-8 text-neutral-600">
        Optical Coherence Tomography (OCT) creates detailed cross-sectional
        images of the retina and can detect fluid or swelling caused by the
        tumor.
      </p>
    </div>

  </div>

  <div className="mt-12 rounded-[28px] border border-[#1F4E8C]/10 bg-[#1F4E8C]/5 p-8">

    <h3 className="text-xl font-medium text-[#111]">
      Good to know
    </h3>

    <p className="mt-4 leading-8 text-neutral-700">
      Most of these tests are painless and can be completed during a single
      clinic visit. Together, they help your ocular oncologist confirm the
      diagnosis, measure the tumor accurately, and recommend the treatment
      that is best suited to your condition.
    </p>

  </div>

</ArticleSection>
      <InfoBox />

      {/* Treatment */}

      {/* Treatment */}

<ArticleSection
  id="treatment"
  title="How is it treated?"
>
  <p>
    The best treatment depends on the size of the tumor, its location inside
    the eye, your vision, and your overall health. Your ocular oncologist will
    recommend the option that offers the best chance of controlling the tumor
    while preserving the eye whenever possible.
  </p>

  <div className="mt-10 grid gap-6 md:grid-cols-2">

    <div className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-medium text-[#111]">
        ☢️ Radiation Therapy
      </h3>

      <p className="mt-4 leading-8 text-neutral-600">
        Radiation is the most common treatment for choroidal melanomas in first world countries.
        The goal is to destroy the tumor while preserving the eye and, when
        possible, useful vision.
      </p>
    </div>

    <div className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-medium text-[#111]">
        👁️ Eye Removal (Enucleation)
      </h3>

      <p className="mt-4 leading-8 text-neutral-600">
        If the tumor is very large or the eye has already lost useful vision,
        removing the eye may provide the safest treatment. This is the most common treatment in the Pilippines. A natural-looking
        artificial eye can usually be fitted after surgery.
      </p>
    </div>

    <div className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-medium text-[#111]">
        📅 Regular Monitoring
      </h3>

      <p className="mt-4 leading-8 text-neutral-600">
        Some very small tumors may not require immediate treatment. Instead,
        your doctor may recommend careful monitoring with photographs and
        ultrasound scans to watch for growth.
      </p>
    </div>

    <div className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-medium text-[#111]">
        🩺 Personalized Care
      </h3>

      <p className="mt-4 leading-8 text-neutral-600">
        Every patient is different. Your treatment plan will be tailored to
        your individual situation after discussing the benefits and potential
        risks of each option.
      </p>
    </div>

  </div>

  <div className="mt-12 rounded-[28px] border border-[#1F4E8C]/10 bg-[#1F4E8C]/5 p-8">

    <h3 className="text-xl font-medium text-[#111]">
      A note from Dr. Andrei Martin
    </h3>

    <p className="mt-4 leading-8 text-neutral-700">
      Hearing that you have an eye tumor can be overwhelming. The good news is
      that treatment has advanced significantly over the years, and many
      patients can be successfully treated while preserving the eye. Together,
      we will discuss your diagnosis, answer your questions, and choose the
      treatment that is most appropriate for you.
    </p>

  </div>

</ArticleSection>

      <FAQ />

      <RelatedArticles />

      <section id="cta" className="scroll-mt-28">
        <CallToAction
          eyebrow="Need a Second Opinion?"
          title="We're here to help."
          description="If you or a loved one has been diagnosed with choroidal melanoma, we're here to answer your questions and discuss the treatment options that are right for you."
        />
      </section>
    </>
  );
}