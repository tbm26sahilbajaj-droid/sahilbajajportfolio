"use client";

import { motion, useInView, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
import { Sparkles, TrendingUp, BarChart3, ShoppingBag, Code2, Rocket } from "lucide-react";
import { projects, segments, type ProjectSegment } from "@/data/projects";

const segmentIcons: Record<string, typeof Sparkles> = {
  "Engineering": Code2,
  "Product & Strategy": BarChart3,
  "GTM & Business": Rocket,
};

const projectIcons = [Sparkles, TrendingUp, BarChart3, ShoppingBag, Code2, Rocket];

function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const spotlightX = useTransform(mouseX, (v) => `${v}px`);
  const spotlightY = useTransform(mouseY, (v) => `${v}px`);

  const handleMouse = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    rotateX.set((y - rect.height / 2) / 25);
    rotateY.set(-(x - rect.width / 2) / 25);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        className="absolute pointer-events-none w-60 h-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          left: spotlightX,
          top: spotlightY,
          x: "-50%",
          y: "-50%",
          background: "radial-gradient(circle, rgba(191,128,255,0.12) 0%, transparent 70%)",
        }}
      />
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeSegment, setActiveSegment] = useState<ProjectSegment>("All");

  const filtered = activeSegment === "All"
    ? projects
    : projects.filter((p) => p.segment === activeSegment);

  return (
    <section id="projects" className="py-32 px-6 relative" ref={ref}>
      <div className="section-divider max-w-6xl mx-auto mb-32" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[#BF80FF] text-sm font-medium tracking-widest uppercase mb-3">What I have built</p>
          <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-space-grotesk)]">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Segment filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-2"
        >
          {segments.map((seg) => (
            <button
              key={seg}
              onClick={() => setActiveSegment(seg)}
              className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${
                activeSegment === seg
                  ? "text-black"
                  : "text-gray-400 hover:text-white border border-white/5 hover:border-white/10"
              }`}
            >
              {activeSegment === seg && (
                <motion.div
                  layoutId="activeSegment"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {seg !== "All" && (() => {
                  const Icon = segmentIcons[seg];
                  return Icon ? <Icon size={14} /> : null;
                })()}
                {seg}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Project cards */}
        <div className="mt-10 grid md:grid-cols-2 gap-6" style={{ perspective: "1000px" }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const Icon = projectIcons[i % projectIcons.length];
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <SpotlightCard className="group bg-[#1a1a2e]/30 border border-[#2a2a4a]/20 rounded-2xl p-6 backdrop-blur-sm hover:border-[#BF80FF]/15 transition-all duration-300 cursor-pointer hover:shadow-[0_0_40px_rgba(191,128,255,0.08)]">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="p-3 bg-[#BF80FF]/8 rounded-xl group-hover:bg-[#BF80FF]/15 group-hover:shadow-[0_0_20px_rgba(191,128,255,0.1)] transition-all duration-300">
                        <Icon size={22} className="text-[#BF80FF]" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-[#BF80FF] bg-[#BF80FF]/8 px-2.5 py-1 rounded-full border border-[#BF80FF]/15 font-medium uppercase tracking-wider">
                          {project.segment}
                        </span>
                        <span className="text-xs text-[#9CA3AF] bg-[#000000]/50 px-3 py-1 rounded-full border border-[#2a2a4a]/20">
                          {project.period}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-3 group-hover:text-[#BF80FF] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#9CA3AF] leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.metrics.map((metric) => (
                        <span key={metric} className="px-3 py-1 text-xs bg-[#BF80FF]/8 text-[#BF80FF] rounded-full border border-[#BF80FF]/15 font-medium">
                          {metric}
                        </span>
                      ))}
                    </div>

                    {/* Tags + Link */}
                    <div className="flex items-end justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 text-xs bg-[#000000]/50 text-[#9CA3AF] rounded-lg border border-[#2a2a4a]/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="shrink-0 flex items-center gap-1 text-xs text-[#BF80FF] hover:text-white border border-[#BF80FF]/20 hover:border-[#BF80FF]/60 px-3 py-1.5 rounded-full transition-all duration-200"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                          </svg>
                          Live
                        </a>
                      )}
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
