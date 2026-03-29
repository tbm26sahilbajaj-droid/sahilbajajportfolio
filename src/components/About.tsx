"use client";

import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect, useState, MouseEvent } from "react";
import { Code2, Package, Database, Cloud, Brain, BarChart3 } from "lucide-react";

const skills = [
  { category: "Languages & Frameworks", icon: Code2, items: ["Java", "Python", "TypeScript", "React", "Next.js", "REST APIs"] },
  { category: "Cloud & Infrastructure", icon: Cloud, items: ["AWS", "Lambda", "Glue", "Redshift", "DynamoDB", "S3"] },
  { category: "Data & Analytics", icon: Database, items: ["SQL", "Data Pipelines", "Excel", "Dashboards", "A/B Testing"] },
  { category: "Product & Strategy", icon: BarChart3, items: ["Product Design", "GTM Strategy", "Agile / Scrum", "Sprint Planning", "Roadmapping"] },
  { category: "AI & ML", icon: Brain, items: ["LLMs", "Claude", "ML Models", "Predictive Analytics", "NLP"] },
  { category: "Tools & Platforms", icon: Package, items: ["Claude Code", "Cursor", "Supabase", "Lovable", "Jira", "Figma"] },
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouse = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    rotateX.set((y - centerY) / 15);
    rotateY.set(-(x - centerX) / 15);
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
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-32 px-6 relative" ref={ref}>
      <div className="section-divider max-w-6xl mx-auto mb-32" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[#BF80FF] text-sm font-medium tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-space-grotesk)]">
            About <span className="gradient-text">me</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-5 gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-[#9CA3AF] leading-relaxed text-lg">
              I am an <span className="text-white font-medium">ex-Amazon SDE</span> who spent over 2 years
              at AWS building and shipping products used by thousands. I have worked across the full stack,
              from designing REST APIs to analyzing customer data for product insights.
            </p>
            <p className="text-[#9CA3AF] leading-relaxed text-lg">
              Now pursuing my <span className="text-white font-medium">PGP in Technology and Business Management</span>{" "}at
              Masters&apos; Union, I am focused on bridging the gap between technical execution and product strategy.
            </p>
            <p className="text-[#9CA3AF] leading-relaxed text-lg">
              I bring a rare combination: I can write the code <span className="text-[#BF80FF] font-medium">and</span> define the roadmap.
            </p>

            {/* Animated stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { value: 2, suffix: "+", label: "Years at Amazon" },
                { value: 7, suffix: "K+", label: "Users impacted" },
                { value: 3, suffix: "", label: "Countries lived" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-[#1a1a2e]/30 border border-[#2a2a4a]/20 rounded-2xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-[#BF80FF] font-[family-name:var(--font-space-grotesk)]">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-[#9CA3AF] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills grid with tilt */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.08 * i + 0.3 }}
                >
                  <TiltCard className="p-5 bg-[#1a1a2e]/30 border border-[#2a2a4a]/20 rounded-2xl backdrop-blur-sm hover:border-[#BF80FF]/20 transition-all duration-300 group cursor-pointer hover:shadow-[0_0_30px_rgba(34,197,94,0.05)]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 bg-[#BF80FF]/8 rounded-xl group-hover:bg-[#BF80FF]/15 transition-colors duration-300">
                        <Icon size={18} className="text-[#BF80FF]" />
                      </div>
                      <h3 className="text-sm font-semibold text-white">{skill.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.items.map((item) => (
                        <span key={item} className="px-2.5 py-1 text-xs bg-[#000000]/50 text-[#9CA3AF] rounded-lg border border-[#2a2a4a]/20">
                          {item}
                        </span>
                      ))}
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
