import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EducationCTA() {
  return (
    <section className="bg-white px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mt-6">
          <Link
            href="/education#topics"
            className="group block rounded-[28px] bg-[#1F4E8C] px-7 py-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:px-9 sm:py-8"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              {/* Content */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Did You Know?
                </p>

                <h3 className="mt-3 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                  You can have glaucoma without knowing it.
                </h3>

                <p className="mt-3 max-w-2xl text-base leading-7 text-white/75">
                  Learn why glaucoma can silently affect your vision and
                  why regular eye examinations matter.
                </p>
              </div>

              {/* CTA */}
              <div className="flex shrink-0 items-center gap-2 text-sm font-medium text-white">
                <span>Learn More</span>

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>

            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}