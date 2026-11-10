
import { ArrowRight, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  demoLink: string;
  detail: string;
}

export default function ProjectCard({
  image,
  title,
  description,
  demoLink,
  detail,
}: ProjectCardProps) {
  return (
    <article className="p-4 hover:border border-[#561c8d] hover:-translate-y-1 transition duration-300 rounded-lg shadow w-full sm:w-[78%] md:w-[58%] lg:w-[38%] xl:w-[28%] max-w-xl min-w-0 bg-[#191d38]/95 backdrop-blur-xl group">

      <Image
        className="rounded-md max-h-40 w-full object-cover group-hover:scale-105 transition-all"
        src={image}
        alt={`${title} web application project preview`}
        width={600}
        height={400}
      />

      <h3 className="bg-linear-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent text-xl font-semibold ml-2 mt-4 text-left">
        {title}
      </h3>

      <p className="text-zinc-400 text-sm/6 mt-2 ml-2 mb-2 text-left">
        {description}
      </p>

      <div className="pt-4 flex items-center justify-between">
        <Link
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 gap-2"
        >
          Live Demo
          <SquareArrowOutUpRight size={16} />
        </Link>

        <Link
          href={detail}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
        >
          Details
          <ArrowRight size={20} />
        </Link>
      </div>
    </article>
  );
}
