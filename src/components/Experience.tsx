"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, GraduationCap, MapPin, ChevronDown, ChevronUp, Award } from "lucide-react";
import { experiences, education } from "@/data/experience";

function ExperienceCard({
  exp,
  index,
  inView,
}: {
  exp: (typeof experiences)[0];
  index: number;
  inView: boolean;
}) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-10 pb-12 last:pb-0"
    >
      {/* Glowing timeline line */}
      <div className="absolute left-0 top-3 bottom-0 w-px">
        <div className="absolute inset-0 bg-gradient-to-b from-[#BF80FF]/50 to-[#2a2a4a]/20" />
        <motion.div
          initial={{ height: 0 }}
          animate={inView ? { height: "100%" } : {}}
          transition={{ duration: 1.5, delay: index * 0.3 }}
          className="absolute top-0 w-full bg-gradient-to-b from-[#BF80FF] to-[#BF80FF]/0"
        />
      </div>

      {/* Glowing dot */}
      <div className="absolute left-[-6px] top-3 w-[13px] h-[13px] rounded-full bg-[#BF80FF] border-2 border-[#000000] shadow-[0_0_15px_rgba(34,197,94,0.6)]" />

      <div
        className="bg-[#1a1a2e]/30 border border-[#2a2a4a]/20 rounded-2xl p-6 backdrop-blur-sm hover:border-[#BF80FF]/15 transition-all duration-300 cursor-pointer hover:shadow-[0_0_30px_rgba(34,197,94,0.05)]"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
              {exp.company}
            </h3>
            <p className="text-[#BF80FF] font-medium text-sm">{exp.role}</p>
          </div>
          <div className="flex items-center gap-4 text-sm text-[#9CA3AF]">
            <span className="flex items-center gap-1">
              <MapPin size={13} /> {exp.location}
            </span>
            <span className="text-xs bg-[#1a1a2e]/50 px-3 py-1 rounded-full border border-[#2a2a4a]/20">{exp.period}</span>
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </div>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 space-y-5"
          >
            {exp.highlights.map((h) => (
              <div key={h.area}>
                <h4 className="text-xs font-semibold text-[#BF80FF] mb-2 uppercase tracking-widest">
                  {h.area}
                </h4>
                <ul className="space-y-2">
                  {h.points.map((point) => (
                    <li key={point} className="text-sm text-[#9CA3AF] flex gap-2.5 leading-relaxed">
                      <span className="text-[#BF80FF] mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-[#BF80FF]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              {exp.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs bg-[#BF80FF]/8 text-[#BF80FF] rounded-full border border-[#BF80FF]/15">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-32 px-6" ref={ref}>
      <div className="section-divider max-w-6xl mx-auto mb-32" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[#BF80FF] text-sm font-medium tracking-widest uppercase mb-3">Where I have been</p>
          <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-space-grotesk)]">
            Experience <span className="gradient-text">&</span> Education
          </h2>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-5 gap-16">
          {/* Experience */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-8">
              <div className="p-2 bg-[#BF80FF]/8 rounded-lg">
                <Briefcase size={16} className="text-[#BF80FF]" />
              </div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Work</h3>
            </div>
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.company} exp={exp} index={i} inView={inView} />
            ))}
          </div>

          {/* Education */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="p-2 bg-[#BF80FF]/8 rounded-lg">
                <GraduationCap size={16} className="text-[#BF80FF]" />
              </div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Education</h3>
            </div>
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="mb-5 p-5 bg-[#1a1a2e]/30 border border-[#2a2a4a]/20 rounded-2xl backdrop-blur-sm hover:border-[#BF80FF]/15 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.05)]"
              >
                <h4 className="font-bold text-white">{edu.school}</h4>
                <p className="text-[#BF80FF] text-sm font-medium">{edu.degree}</p>
                <div className="flex items-center gap-2 text-xs text-[#9CA3AF] mt-1">
                  <MapPin size={11} /> {edu.location} &middot; {edu.period}
                </div>
                <ul className="mt-3 space-y-1.5">
                  {edu.highlights.map((h) => (
                    <li key={h} className="text-sm text-[#9CA3AF] flex gap-2.5 leading-relaxed">
                      <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-[#BF80FF]" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Certification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-5 bg-gradient-to-br from-[#BF80FF]/8 to-transparent border border-[#BF80FF]/15 rounded-2xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <Award size={16} className="text-[#BF80FF]" />
                <h4 className="font-bold text-white text-sm">Certification</h4>
              </div>
              <p className="text-[#BF80FF] text-sm">Microsoft Certified: Azure Data Fundamentals</p>
              <p className="text-xs text-[#9CA3AF] mt-1">Microsoft &middot; January 2021</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
