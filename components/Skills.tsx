"use client";

import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

const SKILLS = [
  { name: "AWS & Cloud Architecture", level: 92 },
  { name: "CI/CD & Automation", level: 90 },
  { name: "Docker & Containers", level: 88 },
  { name: "Kubernetes / Orchestration", level: 82 },
  { name: "Next.js & Frontend", level: 86 },
];

export default function Skills() {
  return (
    <FadeIn delay={0.05}>
      <section className="container py-24 space-y-10">
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Skills
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
            Focused on the tools that actually move the needle.
          </h2>

          <p className="max-w-md text-sm leading-relaxed text-neutral-600">
            A concise snapshot of the technologies I use most frequently when
            deploying real systems to production — from cloud infrastructure to
            user-facing UI.
          </p>
        </div>

        {/* Skills List */}
        <div className="space-y-6 max-w-2xl">
          {SKILLS.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              {/* Label Row */}
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-neutral-800">
                  {skill.name}
                </span>
                <span className="text-neutral-500">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 rounded-full bg-neutral-100">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full bg-neutral-900"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
