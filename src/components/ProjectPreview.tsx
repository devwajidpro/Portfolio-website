
import Link from "next/link";
import {
  ArrowLeft,
  ChevronRight,
  Code2,
  Layers,
  ExternalLink,
  Star,
  Box
} from "lucide-react";

import { FaGithub } from "react-icons/fa6";
import Image from "next/image";


interface featureInterface {
  icon: string,
  title: string,
  description: string
}


interface ProjectPreviewPorps {
    name: string,
    description: string,
    NoOfTechnologies: number,
    NoOfFeatures: number,
    liveDemo: string,
    github: string,
    technologies: string[]
    image: string,
    features: featureInterface[]
}


export default function ProjectPreview({name, description, NoOfTechnologies, NoOfFeatures, liveDemo, github, technologies, image, features}: ProjectPreviewPorps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080514] text-white">

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(124,58,237,0.15),transparent_40%),radial-gradient(ellipse_at_90%_15%,rgba(37,99,235,0.13),transparent_40%),radial-gradient(ellipse_at_20%_75%,rgba(219,39,119,0.12),transparent_40%)]" />

      <div className="relative mx-auto max-w-[1450px] px-5 py-10 sm:px-8 lg:px-12">

        {/* Breadcrumb */}
        <div className="mb-14 flex flex-wrap items-center gap-4 text-sm sm:text-base">

          <Link
            href="/#Portfolio"
            className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-3 transition hover:border-purple-500/50 hover:bg-purple-500/10"
          >
            <ArrowLeft size={20} />
            Back
          </Link>

          <Link
            href="/#Portfolio"
            className="text-gray-400 transition hover:text-purple-400"
          >
            Projects
          </Link>

          <ChevronRight size={18} className="text-gray-500" />

          <span className="text-white">{name}</span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT COLUMN */}
          <div>

            {/* Project Title */}
            <h1 className="text-6xl font-bold tracking-tight text-transparent bg-gradient-to-r from-blue-300 via-violet-300 to-purple-400 bg-clip-text sm:text-7xl">
              {name}
            </h1>

            <div className="mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_20px_rgba(139,92,246,0.7)]" />

            {/* Description */}
            <p className="mt-12 max-w-2xl text-lg leading-9 text-gray-300 sm:text-xl">
              {description}
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-white/5 bg-white/[0.035] p-4">

              <div className="flex items-center gap-4 rounded-xl border border-blue-500/25 bg-white/[0.045] p-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-300">
                  <Code2 size={25} />
                </div>

                <div>
                  <p className="text-2xl font-bold text-blue-200">{NoOfTechnologies}</p>
                  <p className="text-sm text-gray-400">
                    Total Technology
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-purple-500/25 bg-white/[0.045] p-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-purple-300">
                  <Layers size={25} />
                </div>

                <div>
                  <p className="text-2xl font-bold text-purple-200">{NoOfFeatures}</p>
                  <p className="text-sm text-gray-400">
                    Key Features
                  </p>
                </div>
              </div>

            </div>

            {/* Project Links */}
            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-8 py-5 text-lg font-semibold text-blue-300 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]"
              >
                <ExternalLink size={22} />
                Live Demo
              </a>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-purple-500/30 bg-purple-500/10 px-8 py-5 text-lg font-semibold text-purple-300 transition duration-300 hover:-translate-y-1 hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]"
              >
                <FaGithub size={22} />
                Github
              </a>

            </div>

            {/* Technologies */}
            <div className="mt-12">

              <h2 className="mb-7 flex items-center gap-4 text-xl font-bold sm:text-2xl">
                <Code2 className="text-blue-400" size={24} />
                Technologies Used
              </h2>

              <div className="flex flex-wrap gap-3">

                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-3 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-5 py-4 text-sm font-medium text-blue-300 transition duration-300 hover:border-purple-400/60 hover:bg-purple-500/15 sm:text-base"
                  >
                    <Box size={18} />
                    {tech}
                  </span>
                ))}

              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-12">

            {/* Project Preview */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-black p-3 shadow-[0_0_50px_rgba(34,197,94,0.06)]">

              <div className="relative flex aspect-[1.65/1] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#041b13] via-black to-[#063a27]">

                {/* project image */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(34,197,94,0.35),transparent_45%)]" />

                <Image
                src={image}
                alt={name}
                fill
                priority
                className="object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

            </div>

            {/* Key Features */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl sm:p-9">

              <h2 className="mb-10 flex items-center gap-4 text-xl font-bold sm:text-2xl">
                <Star size={24} className="text-yellow-400" />
                Key Features
              </h2>

              <ul className="space-y-7">
              {features.map((feature) => (
                <li key={feature.title} className="group flex items-start gap-4">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />

                  <p className="text-base leading-7 text-gray-300 sm:text-lg">
                    <span className="mr-1 text-white font-medium">
                      {feature.icon} {feature.title}
                    </span>
                    – {feature.description}
                  </p>
                </li>
              ))}
              </ul>

            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
