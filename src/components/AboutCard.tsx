
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import React from "react";

interface StatsCardProps {
  icon?: React.ReactNode;
  number: number | string;
  title: string;
  description: string;
}

const StatsCard = ({
  icon ,
  number,
  title,
  description,
}: StatsCardProps) => {
  return (
    <div className="group relative w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] max-w-xl min-w-0
      rounded-3xl border border-white/10
      bg-[#191d38]/95 backdrop-blur-xl
      p-2 sm:p-4
      transition-all duration-300
      hover:scale-[1.03] hover:opacity-100
      hover:border-purple-500/30">

      {/* Top Section */}
      <div className="flex items-center justify-between">

        {/* Icon */}
        <div className="w-10 h-10 sm:w-16 sm:h-16
          rounded-full bg-[#303653]
          flex items-center justify-center
          text-white
          [&>svg]:w-6 [&>svg]:h-6
          sm:[&>svg]:w-8 sm:[&>svg]:h-8">
          {icon}
        </div>

        {/* Number */}
        <span className="text-3xl sm:text-4xl
          font-bold text-white">
          {number}
        </span>

      </div>

      {/* Bottom Section */}
      <div className="mt-5 space-y-2">

        <h3 className="text-base sm:text-sm font-medium text-gray-300 text-left">
          {title}
        </h3>

        <div className="flex items-center justify-between gap-3">

          <p className="text-xs sm:text-xs text-gray-400 text-left">
            {description}
          </p>

          {/* Arrow */}
          <Link
            href="#Portfolio"
            aria-label="View portfolio projects"
            className="shrink-0 text-gray-400
              transition-all duration-300
              group-hover:text-white
              group-hover:scale-125
              hover:text-purple-400"
          >
            <ArrowUpRight size={18} />
          </Link>

        </div>
      </div>
    </div>
  );
};

export default StatsCard;
