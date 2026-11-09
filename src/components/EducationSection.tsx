
import {
  GraduationCap,
  CalendarDays,
  MapPin,
  BookOpen,
  Award,
} from "lucide-react";

const education = [
  {
    degree: "BS Computer Science",
    short: "BSCS",
    institute: "Government College University Faisalabad",
    duration: "2025 – Present",
    location: "Pakistan",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science, focusing on software development, programming and modern technologies.",
    icon: GraduationCap,
    color: "purple",
  },
  {
    degree: "Intermediate",
    short: "FSc",
    institute: "Superior College, Sheikhupura",
    duration: "2023 – 2025",
    location: "Pakistan",
    description:
      "Completed intermediate education with a focus on Chemistry, Physics and Biology.",
    icon: BookOpen,
    color: "blue",
  },
  {
    degree: "Matriculation",
    short: "Science",
    institute: "Quaid Public School",
    duration: "2021 – 2023",
    location: "Pakistan",
    description:
      "Completed secondary education with Science subjects.",
    icon: Award,
    color: "purple",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.12),transparent_65%)]" />

      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-purple-700/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-700/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">



        {/* Education Content */}
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.4fr]">

          {/* Left Illustration */}
          <div className="relative flex items-center justify-center">

            <div className="absolute h-72 w-72 rounded-full border border-purple-500/20 bg-purple-500/5 shadow-[0_0_100px_rgba(124,58,237,0.2)]" />

            <div className="relative flex flex-col items-center">

              <GraduationCap
                size={100}
                strokeWidth={1}
                className="mb-[-12px] text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.7)]"
              />

              <div className="relative rounded-2xl border border-purple-500/30 bg-gradient-to-br from-[#25204a] to-[#111126] p-10 shadow-[0_0_60px_rgba(124,58,237,0.25)]">

                <div className="space-y-3">
                  <div className="h-8 w-48 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg" />
                  <div className="h-8 w-48 rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 shadow-lg" />
                  <div className="h-8 w-48 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-700 shadow-lg" />
                </div>

                <div className="mt-7 flex items-center justify-center gap-3 text-purple-300">
                  <Award size={25} />
                  <span className="font-semibold">
                    Keep Learning
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Timeline */}
          <div className="relative space-y-8">

            {/* Timeline Line */}
            <div className="absolute bottom-12 left-[27px] top-12 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500" />

            {education.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.degree}
                  className="group relative flex gap-5"
                >
                  {/* Timeline Icon */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-purple-500/50 bg-[#111126] text-purple-400 shadow-[0_0_20px_rgba(124,58,237,0.25)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]">
                    <Icon size={25} />
                  </div>

                  {/* Education Card */}
                  <div className="flex-1 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#171529]/95 to-[#101020]/95 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-[0_10px_40px_rgba(124,58,237,0.12)] sm:p-7">

                    <h3 className="text-lg font-bold text-white sm:text-xl">
                      {item.degree}{" "}
                      <span className="text-purple-400">
                        ({item.short})
                      </span>
                    </h3>

                    <p className="mt-2 font-medium text-purple-400">
                      {item.institute}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-gray-400">

                      <span className="flex items-center gap-2">
                        <CalendarDays
                          size={17}
                          className="text-purple-400"
                        />
                        {item.duration}
                      </span>

                      <span className="flex items-center gap-2">
                        <MapPin
                          size={17}
                          className="text-purple-400"
                        />
                        {item.location}
                      </span>

                    </div>

                    <p className="mt-4 text-sm leading-7 text-gray-400">
                      {item.description}
                    </p>

                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
