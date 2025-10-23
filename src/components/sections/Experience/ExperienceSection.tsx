"use client";

import TimeLine from "@ui/TimeLine";
import type { ExperienceProps } from "@typings/experience";
import { motion } from "framer-motion";
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import ReactMarkdown from "react-markdown";
import { markdownComponents } from '@lib/markdownComponents'

export default function ExperienceSection({ work, education }: ExperienceProps) {
  return (
    <section className="w-full flex flex-col gap-12 md:flex-row md:gap-16">
      {/* EXPERIENCIA */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-6">
          <WorkRoundedIcon className="text-primary w-5 h-5" />
          <h2 className="text-xl font-bold text-text">Experiencia Laboral</h2>
        </div>

        <div className="relative pl-6 space-y-8">
          {work.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="relative pl-2"
            >
              <TimeLine />
              <div className="p-4 rounded-xl bg-secondary/40 border border-secondary/60">
                <h3 className="font-semibold text-text">{job.role}</h3>
                <p className="text-sm text-text/60 mb-2">
                  {job.company} • {job.period}
                </p>
                <ul className="list-disc list-outside ml-4 text-text/80 space-y-1">
                  {job.description.map((line, j) => (
                    <li key={j} className="text-sm">
                      <ReactMarkdown components={markdownComponents}>
                        {line}
                      </ReactMarkdown>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* EDUCACIÓN */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-6">
          <SchoolRoundedIcon className="text-primary w-5 h-5" />
          <h2 className="text-xl font-bold text-text">Educación</h2>
        </div>

        <div className="relative pl-6 space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="relative pl-2"
            >
              <TimeLine />

              <div className="p-4 rounded-xl bg-secondary/40 border border-secondary/60">
                <h3 className="font-semibold text-text">{edu.title}</h3>
                <p className="text-sm text-text/60 mb-2">
                  {edu.institution} • {edu.period}
                </p>
                {edu.description && (
                  <p className="text-sm text-text/80">
                    <ReactMarkdown components={markdownComponents}>
                      {edu.description}
                    </ReactMarkdown>
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
