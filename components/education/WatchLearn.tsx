"use client";

import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

export default function WatchLearn() {
  return (
    <section
      id="videos"
      className="scroll-mt-28 bg-[#FAFAF7] py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <div className="rounded-[40px] border border-neutral-200 bg-white px-10 py-16 text-center shadow-sm md:px-16">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1F4E8C]/10">
              <FaYoutube
                className="text-[#FF0000]"
                size={34}
              />
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-[#1F4E8C]">
              Watch & Learn
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
              Eye Health,
              <span className="block font-semibold">
                Explained Simply.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
  Watch educational videos covering common eye conditions,
  treatments, surgery, and practical tips for maintaining healthy
  vision—all explained in a way that's easy to understand.
</p>

<p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-neutral-500">
  Join a growing community of <span className="font-semibold text-neutral-900">over 22,000 subscribers</span> learning
  about eye health through trusted, evidence-based educational videos.
</p>

            <a
              href="https://youtube.com/@idrdrei"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 text-lg font-semibold text-[#FF0000] transition-colors duration-300 hover:text-[#CC0000]"
            >
              <FaYoutube className="text-2xl" />

              Visit my YouTube Channel

              <ArrowRight size={18} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}