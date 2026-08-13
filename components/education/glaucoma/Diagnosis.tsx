import {
  Gauge,
  ScanEye,
  Eye,
  Activity,
  Search,
} from "lucide-react";

const tests = [
  {
    icon: Gauge,
    title: "Eye Pressure",
    description:
      "Measures the pressure inside your eye. High pressure can increase the risk of glaucoma, but glaucoma can also occur with normal eye pressure.",
  },
  {
    icon: Eye,
    title: "Optic Nerve Exam",
    description:
      "Your doctor examines the optic nerve for changes that may suggest glaucoma.",
  },
  {
    icon: ScanEye,
    title: "OCT Scan",
    description:
      "A painless scan that creates detailed images of the optic nerve and the layers of the retina.",
  },
  {
    icon: Activity,
    title: "Visual Field Test",
    description:
      "Checks your side vision to see whether glaucoma has affected your field of vision.",
  },
  {
    icon: Search,
    title: "Gonioscopy",
    description:
      "A special examination that allows your doctor to look at the drainage area of the eye.",
  },
];

export default function Diagnosis() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F4E8C]">
            Diagnosis
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            How do we find glaucoma?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Glaucoma is not diagnosed with just one test. Your eye doctor
            looks at your eye pressure, optic nerve, vision, and other
            findings together.
          </p>
        </div>

        {/* Tests */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tests.map((test) => {
            const Icon = test.icon;

            return (
              <div
                key={test.title}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F4E8C]/8">
                  <Icon
                    size={24}
                    strokeWidth={1.7}
                    className="text-[#1F4E8C]"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-950">
                  {test.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {test.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Key message */}
        <div className="mt-10 rounded-[2rem] bg-slate-50 p-8 sm:p-10">
          <h3 className="text-xl font-semibold text-slate-950">
            Why do I need several tests?
          </h3>

          <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-600">
            Glaucoma can look different from person to person. Using several
            tests helps your doctor determine whether the optic nerve is
            healthy, whether glaucoma is present, and whether it is changing
            over time.
          </p>
        </div>

      </div>
    </section>
  );
}