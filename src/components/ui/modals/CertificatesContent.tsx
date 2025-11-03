"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { certificateData } from "@data/certificateData";

export default function CertificatesContent() {
  return (
    <div className="space-y-6">
      {certificateData.map(cert => (
        <motion.div
          key={cert.id}
          className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-secondary/40 border border-secondary/60 rounded-xl p-4 hover:bg-secondary/60 transition"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative w-full md:w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
            <Image src={cert.image} alt={cert.title} fill className="object-cover" />
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-text">{cert.title}</h3>
            <p className="text-sm text-text/70 mt-1">{cert.description}</p>
            {cert.link && (
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-accent hover:text-accent/80 transition">
                Ver certificado →
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
