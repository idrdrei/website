import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function DiabeticRetinopathy() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-200">
            <Image
              src="/education/retina/diabetic-retinopathy.png"
              alt="Diabetic retinopathy"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-xl">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F4E8C]">
              01 · Diabetic Retinopathy
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              When diabetes affects your eyes
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Diabetes can damage the tiny blood vessels in the retina,
              the light-sensitive layer at the back of your eye.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              In the early stages, you may not notice any changes in your
              vision. As the condition progresses, it can cause swelling,
              bleeding, or abnormal blood vessels that can affect your sight.
            </p>

            {/* What you may notice */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-slate-950">
                What might you notice?
              </h3>

              <ul className="mt-4 space-y-3 text-slate-600">
                <li>• Blurry or changing vision</li>
                <li>• Dark spots or floaters</li>
                <li>• Difficulty seeing at night</li>
                <li>• Sometimes, no symptoms at all</li>
              </ul>
            </div>

            {/* Treatment */}
            <div className="mt-10 rounded-2xl bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Can it be treated?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Yes. Treatment depends on how advanced the disease is.
                It may include medicines injected into the eye, laser
                treatment, or surgery.
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                Keeping your blood sugar, blood pressure, and cholesterol
                under control is also important.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}