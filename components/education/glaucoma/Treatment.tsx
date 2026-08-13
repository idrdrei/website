import {
  Droplets,
  ScanLine,
  Stethoscope,
} from "lucide-react";

const treatments = [
  {
    icon: Droplets,
    title: "Eye Drops",
    description:
      "The most common first treatment. Eye drops help lower the pressure inside the eye and protect the optic nerve.",
  },
  {
    icon: ScanLine,
    title: "Laser Treatment",
    description:
      "Laser can help improve the flow of fluid out of the eye or reduce the amount of fluid produced, depending on the type of glaucoma.",
  },
  {
    icon: Stethoscope,
    title: "Glaucoma Surgery",
    description:
      "If eye drops or laser treatment are not enough, surgery may be recommended to create a better pathway for fluid to leave the eye.",
  },
];

export default function Treatment() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F4E8C]">
            Treatment
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            How is glaucoma treated?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Treatment focuses on lowering the pressure in the eye when
            needed and protecting the optic nerve from further damage.
          </p>
        </div>

        {/* Important message */}
        <div className="mt-12 rounded-[2rem] bg-[#1F4E8C] p-8 sm:p-10">
          <h3 className="text-2xl font-semibold text-white">
            The goal is to protect your vision.
          </h3>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/80">
            Glaucoma damage that has already occurred usually cannot be
            reversed. However, appropriate treatment can slow or prevent
            further damage and help preserve the vision you still have.
          </p>
        </div>

        {/* Treatment options */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => {
            const Icon = treatment.icon;

            return (
              <div
                key={treatment.title}
                className="rounded-[2rem] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F4E8C]/8">
                  <Icon
                    size={24}
                    strokeWidth={1.7}
                    className="text-[#1F4E8C]"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-950">
                  {treatment.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {treatment.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Follow-up */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">

          <div className="rounded-[2rem] bg-white p-8 sm:p-10">
            <h3 className="text-xl font-semibold text-slate-950">
              Treatment is often long-term
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Glaucoma usually requires regular check-ups. Your doctor
              will monitor your eye pressure, optic nerve, and vision
              to make sure your treatment is working.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 sm:p-10">
            <h3 className="text-xl font-semibold text-slate-950">
              Treatment can change over time
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Some people need only one treatment, while others may need
              a combination of eye drops, laser, or surgery. Your treatment
              plan is tailored to your eyes.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}