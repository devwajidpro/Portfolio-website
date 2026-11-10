
import {
  GraduationCap,
  CalendarDays,
  MapPin,
  BookOpen,
  Award,
  ArrowUpRight,
} from "lucide-react";

const education = [
  {
    degree: "BS Computer Science",
    short: "BSCS",
    institute: "Government College University Faisalabad",
    duration: "2025 – Present",
    location: "Pakistan",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science, with an interest in software engineering, web development, and emerging technologies.",
    icon: GraduationCap,
    current: true,
  },
  {
    degree: "Intermediate",
    short: "FSc",
    institute: "Superior College, Sheikhupura",
    duration: "2023 – 2025",
    location: "Pakistan",
    description:
      "Completed intermediate education with a focus on Chemistry, Physics, and Biology.",
    icon: BookOpen,
    current: false,
  },
  {
    degree: "Matriculation",
    short: "Science",
    institute: "Quaid Public School",
    duration: "2021 – 2023",
    location: "Pakistan",
    description:
      "Completed secondary education with a foundation in science and core academic subjects.",
    icon: Award,
    current: false,
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">

        {/* Section Heading */}
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 inline-block text-sm font-medium tracking-widest text-purple-400 uppercase">
            My Background
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Education & <span className="text-purple-400">Learning</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            My academic journey has helped me build a foundation in
            computer science and develop a passion for technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative ml-2 border-l border-white/10 sm:ml-3">

          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.degree}
                className="group relative pb-12 pl-8 last:pb-0 sm:pl-12"
              >
                {/* Timeline Marker */}
                <div
                  className={`absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full border ${
                    item.current
                      ? "border-purple-400 bg-purple-500/15 text-purple-300"
                      : "border-white/15 bg-[#11111b] text-gray-400"
                  }`}
                >
                  <Icon size={15} />
                </div>

                {/* Card */}
                <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors duration-300 hover:border-purple-400/30 hover:bg-white/[0.04] sm:p-7">

                  {/* Top Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3">

                    <span className="text-xs font-medium tracking-wide text-gray-500">
                      {String(index + 1).padStart(2, "0")} / EDUCATION
                    </span>

                    {item.current && (
                      <span className="flex items-center gap-2 text-xs font-medium text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Currently Studying
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <div className="mt-5">
                    <h3 className="text-xl font-semibold text-white sm:text-2xl">
                      {item.degree}
                      <span className="ml-2 text-base font-normal text-gray-500">
                        ({item.short})
                      </span>
                    </h3>

                    <p className="mt-2 text-sm font-medium text-purple-300 sm:text-base">
                      {item.institute}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-xs text-gray-400 sm:text-sm">
                    <span className="flex items-center gap-2">
                      <CalendarDays size={15} className="text-gray-500" />
                      {item.duration}
                    </span>

                    <span className="flex items-center gap-2">
                      <MapPin size={15} className="text-gray-500" />
                      {item.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400">
                    {item.description}
                  </p>

                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-14 flex items-center gap-3 border-t border-white/10 pt-7">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10 text-purple-300">
            <GraduationCap size={18} />
          </div>

          <p className="text-sm text-gray-400">
            Learning is a continuous part of my journey.
          </p>
        </div>

      </div>
    </section>
  );
}
