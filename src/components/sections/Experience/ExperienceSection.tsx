"use client";

import type { ExperienceProps } from "@typings/experience";
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import TimeLineCard from "@ui/TimeLineCard";

export default function ExperienceSection({ work, education }: ExperienceProps) {
  return (
    <section id="experience" className="w-full flex flex-col gap-12 md:flex-row md:gap-16 scroll-mt-24 md:scroll-mt-28">
      {/* EXPERIENCIA */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-6">
          <WorkRoundedIcon className="text-primary w-5 h-5" />
          <h2 className="text-xl md:text-3xl font-bold text-text">Experiencia Laboral</h2>
        </div>

        <div className="relative pl-6 space-y-8">
          {work.map((job, i) => (
            <TimeLineCard key={i} data={job} index={i} />
          ))}
        </div>
      </div>

      {/* EDUCACIÓN */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-6">
          <SchoolRoundedIcon className="text-primary w-5 h-5" />
          <h2 className="text-xl md:text-3xl font-bold text-text">Educación</h2>
        </div>

        <div className="relative pl-6 space-y-8">
          {education.map((edu, i) => (
            <TimeLineCard key={i} data={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
