"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";

function LinkedinIcon({ size = 24 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
}

function GithubIcon({ size = 24 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>;
}

const contactLinks = [
  { icon: Mail, label: "Email", value: "Send me an email", href: "mailto:tbm26sahil.bajaj@mastersunion.org" },
  { icon: Phone, label: "Phone", value: "Give me a call", href: "tel:+919266365444" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/in/sahilbajaj1/" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 px-6 relative" ref={ref}>
      <div className="section-divider max-w-6xl mx-auto mb-32" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#BF80FF]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-[#BF80FF] text-sm font-medium tracking-widest uppercase mb-3">Reach out</p>
          <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-space-grotesk)]">
            Let&apos;s <span className="gradient-text">connect</span>
          </h2>
          <p className="mt-6 text-lg text-[#9CA3AF] leading-relaxed">
            I am always open to discussing product management roles, interesting projects,
            or opportunities to collaborate. Let&apos;s build something great together.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col items-center p-6 bg-[#1a1a2e]/30 border border-[#2a2a4a]/20 rounded-2xl backdrop-blur-sm hover:border-[#BF80FF]/20 transition-all duration-300 cursor-pointer hover:shadow-[0_0_40px_rgba(34,197,94,0.08)]"
              >
                <div className="p-3 bg-[#BF80FF]/8 rounded-xl group-hover:bg-[#BF80FF]/15 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.1)] transition-all duration-300 mb-4">
                  <Icon size={22} className="text-[#BF80FF]" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{link.label}</h3>
                <p className="text-xs text-[#9CA3AF] text-center break-all">{link.value}</p>
                <ArrowUpRight size={14} className="mt-3 text-[#9CA3AF] group-hover:text-[#BF80FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </motion.a>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="mailto:tbm26sahil.bajaj@mastersunion.org"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all duration-300 cursor-pointer"
          >
            <Send size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            Say Hello
          </a>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 flex justify-center items-center gap-2 text-sm text-[#9CA3AF]"
        >
          <MapPin size={13} />
          <span>Gurugram, India</span>
        </motion.div>
      </div>
    </section>
  );
}
