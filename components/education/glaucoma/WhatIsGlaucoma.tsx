import Image from "next/image";

export default function WhatIsGlaucoma() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-200">
            <Image
              src="/education/glaucoma/what-is-glaucoma.png"
              alt="Healthy and glaucomatous optic nerve"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-xl">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F4E8C]">
              Understanding Glaucoma
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              What is glaucoma?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Glaucoma is a group of eye diseases that can damage the
              <strong> optic nerve</strong> — the nerve that carries
              information from your eye to your brain.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              In many people, glaucoma develops slowly. You may not notice
              any changes in your vision until the disease has already
              caused damage.
            </p>

            {/* Key message */}
            <div className="mt-8 rounded-3xl bg-white p-7 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">
                The important thing to know
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Glaucoma damage is usually permanent, but early detection
                and treatment can help slow or prevent further vision loss.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}