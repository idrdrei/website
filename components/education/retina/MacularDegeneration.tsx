import Image from "next/image";

export default function MacularDegeneration() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Content */}
          <div className="order-2 max-w-xl lg:order-1">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F4E8C]">
              02 · Macular Degeneration
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              When the center of your vision changes
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The macula is the small area at the center of the retina
              that gives you sharp, detailed vision.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Macular degeneration can damage this area and make it harder
              to read, recognize faces, or see fine details.
            </p>

            {/* What you may notice */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-slate-950">
                What might you notice?
              </h3>

              <ul className="mt-4 space-y-3 text-slate-600">
                <li>• Blurry or missing areas in your central vision</li>
                <li>• Straight lines may look wavy</li>
                <li>• Difficulty reading or recognizing faces</li>
                <li>• Colors may appear less bright</li>
              </ul>
            </div>

            {/* Dry vs Wet */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="font-semibold text-slate-950">
                  Dry Macular Degeneration
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Usually develops gradually. It is the more common form
                  of macular degeneration.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="font-semibold text-slate-950">
                  Wet Macular Degeneration
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Abnormal blood vessels can leak fluid or blood and cause
                  faster changes in vision.
                </p>
              </div>

            </div>

            {/* Treatment */}
            <div className="mt-6 rounded-2xl bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Can it be treated?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Treatment depends on the type. Wet macular degeneration
                can often be treated with medicines injected into the eye
                to stop abnormal blood vessels from leaking.
              </p>
            </div>

          </div>

          {/* Image */}
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-100 lg:order-2">
            <Image
              src="/education/retina/amd.png"
              alt="Macular degeneration"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}