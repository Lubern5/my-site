"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import Image from "next/image";

export default function Hero() {
  const [particles, setParticles] = useState<
    { left: string; top: string; opacity: number; delay: string }[]
  >([]);

  // Subtle parallax
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 250], [0, 18]);

  // Generate particles
  useEffect(() => {
    const created = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3.5}s`,
      opacity: Math.random() * 0.35 + 0.25,
    }));
    setParticles(created);
  }, []);

  return (
    <section className="relative w-full pt-50 pb-40 overflow-hidden">

      {/* ========================================================= */}
      {/* ⭐ FULLSCREEN BACKGROUND IMAGE (FIXED WIDTH ISSUE) ⭐ */}
      {/* ========================================================= */}
      <div className="absolute inset-0 -z-50">
        <Image
          src="/693872.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        {/* Fade overlay so text remains readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/65 to-white/20" />
      </div>

      {/* All effects now sit ON TOP of the full-width background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-40 opacity-[0.55]"
      >
        <div className="absolute top-[-25%] left-[8%] h-[420px] w-[420px] rounded-full bg-neutral-200 blur-[150px]" />
        <div className="absolute bottom-[-28%] right-[4%] h-[340px] w-[340px] rounded-full bg-neutral-100 blur-[160px]" />
      </motion.div>

      {/* Floating orb */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.22, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute right-[12%] top-[26%] h-[210px] w-[210px] rounded-full bg-gradient-to-br from-neutral-900 via-neutral-700 to-neutral-900 blur-[100px] opacity-25 -z-30"
      />

      {/* Grain */}
      <div className="absolute inset-0 -z-20 opacity-[0.045] pointer-events-none noise" />

      {/* Grid */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000007_1px,transparent_1px),linear-gradient(to_bottom,#00000007_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              opacity: p.opacity,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* ========================================================= */}
      {/* ⭐ CENTERED TEXT CONTAINER (KEEPS YOUR ORIGINAL LAYOUT) ⭐ */}
      {/* ========================================================= */}
      <div className="container">
        <FadeIn>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="text-[2.9rem] md:text-[3.7rem] font-semibold leading-[1.08] tracking-tight text-neutral-900"
            >
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl opacity-30" />
                Engineering scalable cloud systems
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900">
                and world-class digital experiences.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="max-w-xl mt-6 text-neutral-900 text-[1.02rem] leading-relaxed"
            >
              I design infrastructure, automation workflows, and modern frontends
              that help teams ship with clarity, confidence, and reliability.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
              className="flex items-center gap-4 mt-10"
            >
              <a
                href="#projects"
                className="rounded-full bg-neutral-900 text-white px-7 py-3 text-sm font-medium shadow-md transition hover:bg-neutral-800"
              >
                View Work
              </a>
              <a
                href="mailto:Lubernfigaro5@gmail.com"
                className="rounded-full border border-neutral-300 px-7 py-3 text-sm text-neutral-900 transition hover:bg-neutral-50"
              >
                Contact
              </a>
            </motion.div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
