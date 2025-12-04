"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const SERVICES = [
  {
    title: "Cloud Architecture",
    desc: "Designing AWS infrastructures that balance performance, scalability, and simplicity.",
    tags: ["AWS", "Terraform", "IaC"],
  },
  {
    title: "DevOps & CI/CD",
    desc: "Automation pipelines, environment orchestration, and deployment workflows built for speed.",
    tags: ["CI/CD", "Docker", "Jenkins"],
  },
  {
    title: "Full-Stack Engineering",
    desc: "Modern applications using Next.js, TypeScript, and clean UI systems built to last.",
    tags: ["Next.js", "TypeScript"],
  },
];

export default function Features() {
  return (
    <FadeIn>
      <section
        id="services"
        className="container max-w-6xl space-y-12 py-24"
      >
        {/* Header */}
        <div className="max-w-xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
            Services
          </p>
          <h2 className="text-[2rem] md:text-[2.25rem] font-semibold tracking-tight text-neutral-900 leading-[1.15]">
            Engineering built around clarity, performance & reliability.
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 max-w-md">
            Infrastructure, automation, and front-end engineering — delivered
            with a clean, predictable process teams can trust.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="text-sm font-semibold text-neutral-900">
                {service.title}
              </h3>

              <p className="mt-3 text-xs leading-relaxed text-neutral-600">
                {service.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[11px] text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
