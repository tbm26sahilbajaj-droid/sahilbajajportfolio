"use client";

import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { Sparkles, TrendingUp, BarChart3, ShoppingBag } from "lucide-react";
import { projects } from "@/data/projects";

const projectIcons = [Sparkles, TrendingUp, BarChart3, ShoppingBag];

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
      {/* Spotlight gradient */}
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

        <div className="mt-16 grid md:grid-cols-2 gap-6" style={{ perspective: "1000px" }}>
          {projects.map((project, i) => {
            const Icon = projectIcons[i % projectIcons.length];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <SpotlightCard className="group bg-[#1a1a2e]/30 border border-[#2a2a4a]/20 rounded-2xl p-6 backdrop-blur-sm hover:border-[#BF80FF]/15 transition-all duration-300 cursor-pointer hover:shadow-[0_0_40px_rgba(191,128,255,0.08)]">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 bg-[#BF80FF]/8 rounded-xl group-hover:bg-[#BF80FF]/15 group-hover:shadow-[0_0_20px_rgba(191,128,255,0.1)] transition-all duration-300">
                      <Icon size={22} className="text-[#BF80FF]" />
                    </div>
                    <span className="text-xs text-[#9CA3AF] bg-[#000000]/50 px-3 py-1 rounded-full border border-[#2a2a4a]/20">
                      {project.period}
                    </span>
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

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-xs bg-[#000000]/50 text-[#9CA3AF] rounded-lg border border-[#2a2a4a]/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
