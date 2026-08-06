"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import {
  ChevronDown,
  Eye,
  Droplets,
  ShieldAlert,
  Wind,
  AlertTriangle,
  ScanEye,
  Sparkles,
  Crosshair,
  Activity,
  CircleDashed,
  Shield,
  Stethoscope,
} from "lucide-react";

const conditions = [
  {
    title: "Stye",
    icon: CircleDashed,
    short: "Painful eyelid lump caused by an inflamed oil gland.",
    symptoms: [
      "Tender eyelid bump",
      "Localized swelling",
      "Redness",
      "Occasional discharge",
    ],
    treatment:
      "Warm compresses, eyelid hygiene, and antibiotics when indicated.",
    urgent:
      "Seek evaluation if swelling spreads, vision changes, or symptoms worsen.",
  },

  {
    title: "Red Eyes",
    icon: AlertTriangle,
    short: "Diagnosis and treatment of irritated or inflamed eyes.",
    symptoms: [
      "Redness",
      "Irritation",
      "Discharge",
      "Pain",
    ],
    treatment:
      "Treatment depends on the cause and may include lubricants, antibiotics, or anti-inflammatory medication.",
    urgent:
      "Urgent assessment is recommended if redness is associated with severe pain or vision loss.",
  },

  {
    title: "Dry Eye Disease",
    icon: Droplets,
    short: "Relief for burning, tearing, and fluctuating vision.",
    symptoms: [
      "Burning",
      "Foreign body sensation",
      "Watering",
      "Blurred vision",
    ],
    treatment:
      "Artificial tears, eyelid care, lifestyle modifications, and prescription therapy when needed.",
    urgent:
      "Persistent symptoms despite treatment should be evaluated.",
  },

  {
    title: "Corneal Abrasion",
    icon: ShieldAlert,
    short: "Prompt treatment for scratches and corneal injuries.",
    symptoms: [
      "Pain",
      "Light sensitivity",
      "Excessive tearing",
      "Blurred vision",
    ],
    treatment:
      "Protective treatment, antibiotics, and close follow-up until healing occurs.",
    urgent:
      "Eye injuries should be evaluated promptly to prevent infection.",
  },

  {
    title: "Eye Allergy",
    icon: Wind,
    short: "Management of itchy, watery eyes caused by allergies.",
    symptoms: [
      "Itching",
      "Watering",
      "Redness",
      "Swollen eyelids",
    ],
    treatment:
      "Lubricants, cold compresses, and anti-allergy eye drops.",
    urgent:
      "Seek care if pain or vision changes develop.",
  },

  {
    title: "Conjunctivitis",
    icon: Sparkles,
    short: "Evaluation and treatment of viral, bacterial, and allergic pink eye.",
    symptoms: [
      "Redness",
      "Discharge",
      "Watering",
      "Irritation",
    ],
    treatment:
      "Treatment depends on the underlying cause.",
    urgent:
      "Persistent symptoms or decreased vision require examination.",
  },

  {
    title: "Blurred Vision",
    icon: Eye,
    short: "Comprehensive assessment to identify the cause.",
    symptoms: [
      "Difficulty focusing",
      "Sudden blur",
      "Double vision",
    ],
    treatment:
      "Management depends on the diagnosis after a comprehensive examination.",
    urgent:
      "Sudden blurred vision should be evaluated immediately.",
  },

  {
    title: "Floaters & Flashes",
    icon: ScanEye,
    short: "Evaluation for retinal tears and retinal detachment.",
    symptoms: [
      "Floaters",
      "Light flashes",
      "Curtain over vision",
    ],
    treatment:
      "May require retinal examination and urgent treatment.",
    urgent:
      "New flashes or floaters require prompt evaluation.",
  },

  {
    title: "Glaucoma Screening",
    icon: Crosshair,
    short: "Early detection before vision is affected.",
    symptoms: [
      "Usually none",
      "Peripheral vision loss (late)",
    ],
    treatment:
      "Monitoring, laser treatment, or medications depending on findings.",
    urgent:
      "Routine screening is recommended, especially if you have risk factors.",
  },

  {
    title: "Diabetic Eye Disease",
    icon: Activity,
    short: "Screening and monitoring diabetic retinopathy.",
    symptoms: [
      "Blurred vision",
      "Floaters",
      "May have no symptoms",
    ],
    treatment:
      "Regular retinal examinations and timely intervention when needed.",
    urgent:
      "Patients with diabetes should have regular dilated eye examinations.",
  },

  {
    title: "Macular Degeneration",
    icon: Shield,
    short: "Diagnosis and long-term management of macular disease.",
    symptoms: [
      "Blurred central vision",
      "Distorted vision",
    ],
    treatment:
      "Monitoring and treatment depending on the type of degeneration.",
    urgent:
      "New distortion or rapid vision loss requires assessment.",
  },

  {
    title: "Eye Injuries",
    icon: Stethoscope,
    short: "Foreign bodies, trauma, and chemical injuries.",
    symptoms: [
      "Pain",
      "Redness",
      "Blurred vision",
      "Foreign body sensation",
    ],
    treatment:
      "Immediate evaluation to prevent permanent vision loss.",
    urgent:
      "Chemical injuries and severe trauma should be treated as emergencies.",
  },
];

export default function CommonConditions() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
    id="condition"
     className="bg-neutral-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1F4E8C]">
              Common Eye Conditions
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
              How Can We
              <span className="block font-semibold">
                Help You Today?
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Click on a condition below to learn more.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {conditions.map((item, index) => {
            const Icon = item.icon;
            const isOpen = open === index;

            return (
              <FadeIn key={item.title} delay={index * 0.03}>
                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="group w-full rounded-[28px] border border-neutral-200 bg-white p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1F4E8C]/10 group-hover:bg-[#1F4E8C] transition">
                      <Icon
                        size={28}
                        className="text-[#1F4E8C] group-hover:text-white"
                      />
                    </div>

                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-neutral-600">
                    {item.short}
                  </p>

                  <div
                    className={`grid transition-all duration-500 ${
                      isOpen
                        ? "grid-rows-[1fr] mt-6"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">

                      <div className="space-y-6 border-t pt-6">

                        <div>
                          <p className="font-semibold text-[#1F4E8C]">
                            Common Symptoms
                          </p>

                          <ul className="mt-3 list-disc pl-5 text-neutral-600 space-y-1">
                            {item.symptoms.map((s) => (
                              <li key={s}>{s}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <p className="font-semibold text-[#1F4E8C]">
                            Typical Treatment
                          </p>

                          <p className="mt-2 text-neutral-600">
                            {item.treatment}
                          </p>
                        </div>

                        <div className="rounded-xl bg-red-50 p-4">
                          <p className="font-semibold text-red-700">
                            Seek Prompt Care
                          </p>

                          <p className="mt-2 text-sm text-red-600">
                            {item.urgent}
                          </p>
                        </div>

                      </div>

                    </div>
                  </div>

                </button>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}