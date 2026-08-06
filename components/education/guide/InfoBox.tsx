"use client";

import FadeIn from "@/components/FadeIn";
import { Info } from "lucide-react";
import { ReactNode } from "react";

interface InfoBoxProps {
  title?: string;
  children?: ReactNode;
}

export default function InfoBox({
  title = "When should I seek medical attention?",
  children,
}: InfoBoxProps) {
  return (
    <section className="bg-[#FAFAF7] py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <div className="rounded-[36px] border border-[#1F4E8C]/10 bg-[#1F4E8C]/5 p-8 md:p-10 lg:p-12">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                <Info
                  size={22}
                  strokeWidth={2}
                  className="text-[#1F4E8C]"
                />
              </div>

              <h2 className="text-2xl font-medium tracking-tight text-[#111]">
                {title}
              </h2>

            </div>

            <div className="mt-8 text-lg leading-8 text-neutral-700">

              {children ?? (
                <>
                  <p>
                    Contact your eye doctor promptly if you notice:
                  </p>

                  <ul className="mt-6 space-y-4">
                    <li>• Sudden worsening of vision</li>
                    <li>• New flashes of light or floaters</li>
                    <li>• Increasing eye pain</li>
                    <li>• A curtain or shadow in your vision</li>
                  </ul>
                </>
              )}

            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}