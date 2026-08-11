import Image from "next/image";
import { AlertTriangle } from "lucide-react";

export default function RetinalDetachment() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-200">
            <Image
              src="/education/retina/retinal-detachment1.png"
              alt="Retinal detachment"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-xl">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F4E8C]">
              03 · Retinal Detachment
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              When the retina pulls away
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A retinal detachment happens when the retina separates from
              the back of the eye. Without treatment, it can cause
              permanent vision loss.
            </p>

            {/* Warning */}
            <div className="mt-8 rounded-3xl bg-[#1F4E8C] p-7 sm:p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-white" />

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Know the warning signs
                  </h3>

                  <p className="mt-2 leading-7 text-white/80">
                    Retinal detachment can happen suddenly. If you notice
                    any of these symptoms, seek urgent eye care.
                  </p>
                </div>
              </div>
            </div>

            {/* Symptoms */}
            <div className="mt-8 space-y-4">

              <div className="rounded-2xl bg-white p-5">
                <h3 className="font-semibold text-slate-950">
                  Flashes of light
                </h3>

                <p className="mt-1 text-slate-600">
                  You may suddenly see flashes, especially in the side
                  of your vision.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <h3 className="font-semibold text-slate-950">
                  New floaters
                </h3>

                <p className="mt-1 text-slate-600">
                  You may suddenly notice many new spots, dots, or
                  thread-like shapes floating in your vision.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <h3 className="font-semibold text-slate-950">
                  A curtain or shadow
                </h3>

                <p className="mt-1 text-slate-600">
                  A dark curtain or shadow may appear over part of
                  your vision.
                </p>
              </div>

            </div>

            {/* Treatment */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-slate-950">
                Can it be treated?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Yes. Treatment usually involves surgery to put the retina
                back in place. The sooner it is treated, the better the
                chance of protecting vision.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}