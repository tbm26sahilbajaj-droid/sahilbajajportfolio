"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Zap } from "lucide-react";
import Image from "next/image";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center pt-20">
        {/* Text */}
        <div>
          <FadeUp delay={0.5}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#BF80FF]/8 border border-[#BF80FF]/15 rounded-full text-[#BF80FF] text-sm font-medium mb-8">
              <Zap size={14} />
              SDE x Product Manager
            </div>
          </FadeUp>

          <FadeUp delay={0.7}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] font-[family-name:var(--font-space-grotesk)]">
              <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                Hi, I&apos;m
              </span>
              <br />
              <span className="gradient-text">
                Sahil Bajaj
              </span>
              <span className="text-[#BF80FF]">.</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.9}>
            <p className="mt-6 text-lg text-gray-400 max-w-md leading-relaxed">
              Ex-Amazon SDE turned Product Manager. I build and ship products at the
              intersection of{" "}
              <span className="text-white font-medium">engineering</span> and{" "}
              <span className="text-white font-medium">product strategy</span>.
            </p>
          </FadeUp>

          <FadeUp delay={1.1}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
              >
                Get in touch
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-white/10 text-white font-semibold rounded-full hover:border-[#BF80FF]/30 hover:bg-[#BF80FF]/5 transition-all duration-300 cursor-pointer"
              >
                View projects
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={1.3}>
            <div className="mt-8 flex items-center gap-5">
              <a href="https://www.linkedin.com/in/sahilbajaj1/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#BF80FF] transition-colors duration-200 cursor-pointer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://github.com/sahilbajaj" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#BF80FF] transition-colors duration-200 cursor-pointer" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="mailto:tbm26sahil.bajaj@mastersunion.org" className="text-gray-500 hover:text-[#BF80FF] transition-colors duration-200 cursor-pointer" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </FadeUp>
        </div>

        {/* Photo */}
        <FadeUp delay={0.8} className="flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-4 rounded-full bg-[#BF80FF]/5 blur-3xl group-hover:bg-[#BF80FF]/10 transition-all duration-700" />
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border border-[#BF80FF]/15 shadow-[0_0_60px_rgba(191,128,255,0.08)]">
              <Image
                src="/sahil.jpg"
                alt="Sahil Bajaj"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 px-4 py-2 bg-black/80 backdrop-blur-xl border border-[#BF80FF]/15 rounded-xl"
            >
              <span className="text-sm font-semibold text-[#BF80FF]">Ex-Amazon</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-2 px-4 py-2 bg-black/80 backdrop-blur-xl border border-[#BF80FF]/15 rounded-xl"
            >
              <span className="text-sm font-semibold text-white">SDE &rarr; PM</span>
            </motion.div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
