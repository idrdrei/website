"use client";

import FadeIn from "@/components/FadeIn";
import { BookOpen } from "lucide-react";

export default function AboutGuide() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <div className="rounded-[28px] border border-neutral-200 bg-white p-8 shadow-sm">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1F4E8C]/10">
                <BookOpen
                  size={22}
                  className="text-[#1F4E8C]"
                />
              </div>

              <h2 className="text-xl font-medium text-[#111]">
                About this guide
              </h2>

            </div>

            <p className="mt-6 leading-8 text-neutral-700">
              This guide was written by{" "}
              <span className="font-medium text-[#111]">
                Dr. Andrei Martin
              </span>
              , an internationally trained ocular oncologist, to help
              patients and their families better understand
              choroidal melanoma.
            </p>

            <p className="mt-4 leading-8 text-neutral-700">
              The information is intended to explain the condition
              in clear, everyday language. It should not replace a
              consultation with your eye doctor, who can provide
              recommendations based on your individual situation.
            </p>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}