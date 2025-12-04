"use client";

import FadeIn from "./FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Portfolio",
    description:
      "Portfolio using S3, Cloudfront, Route 53, and API Gateway. Built for speed and horizontal scaling.",
    stack: ["S3", "CLoudfront", "Route 53", "API Gateway"],
    image: "/images/pexels.jpeg",
    url: "http://figarodesigns.com/",
  },
  {
    title: "FXT Appliance Repair Website",
    description:
      "High-performance marketing experience deployed on Next.js + TypeScript + Amplify with a polished, conversion-focused UI.",
    stack: ["Next.js", "TypeScript", "Amplify"],
    image: "/images/pexels.jpeg",
    url: "https://github.com/Lubern5/fxt-aws-pro",
  },
  {
    title: "Sports Hub Web App",
    description:
      "ESPN-inspired sports interface featuring real-time data blending, modern Next.js patterns, and AWS Amplify hosting.",
    stack: ["S3", "CLoudfront", "Route 53", "API Gateway"],
    image: "/images/pexels.jpeg",
    url: "https://figarodesigns.com/sports/index.html",
  },
  {
    title: "Automated CI/CD Pipeline",
    description:
      "Jenkins + GitHub Actions pipeline with Docker builds, security scanning, and structured promotion workflows.",
    stack: ["Jenkins", "Docker", "GH Actions"],
    image: "/images/pexels.jpeg",
    url: "https://github.com/Lubern5/devops-fully-automated",
  },
];

export default function Projects() {
  return (
    <FadeIn delay={0.05}>
      <section id="projects" className="container space-y-12 py-24">
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Featured Projects
          </p>

          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
            Real systems. Real deployments. Real results.
          </h2>

          <p className="max-w-md text-sm leading-relaxed text-neutral-600">
            A curated selection of cloud, DevOps, and full-stack work — shipped
            with production-ready AWS architectures, CI/CD pipelines, and clean
            frontends.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-gradient-to-br from-white via-white to-neutral-50 shadow-[0_8px_30px_rgba(15,23,42,0.06)] outline-none transition-all hover:border-purple-500/60 hover:shadow-[0_18px_55px_rgba(15,23,42,0.18)] focus-visible:ring-2 focus-visible:ring-purple-500/70"
            >
              {/* Subtle glow / border accent */}
              <div className="pointer-events-none absolute inset-0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60">
                <div className="h-full w-full bg-[radial-gradient(circle_at_0%_0%,rgba(168,85,247,0.26),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(59,130,246,0.22),transparent_55%)]" />
              </div>

              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06] group-hover:brightness-[1.05]"
                />

                {/* Top-left badge */}
                <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2">
                  <span className="rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-100 backdrop-blur">
                    Deployed on AWS
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="relative space-y-4 p-6">
                {/* Title + small meta row */}
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                      {project.title}
                    </h3>

                    {/* GitHub pill */}
                    <span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-500 transition-colors group-hover:border-neutral-300 group-hover:bg-neutral-100 group-hover:text-neutral-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      GitHub Repo
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-neutral-600">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-1.5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[11px] text-neutral-600 transition-colors group-hover:border-neutral-300 group-hover:bg-white group-hover:text-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer row */}
                <div className="flex items-center justify-between pt-2 text-[11px]">
                  <p className="font-medium text-neutral-500 transition-colors group-hover:text-neutral-900">
                    View repository on GitHub
                  </p>

                  <div className="flex items-center gap-1.5 text-neutral-400 transition-transform transition-colors group-hover:translate-x-0.5 group-hover:text-neutral-800">
                    {/* Simple “arrow out” icon */}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      className="h-3.5 w-3.5"
                    >
                      <path
                        d="M6 5.5A.75.75 0 0 1 6.75 4.75H15a.75.75 0 0 1 .75.75v8.25a.75.75 0 0 1-1.5 0V7.56l-7.22 7.22a.75.75 0 1 1-1.06-1.06L13.19 6.5H6.75A.75.75 0 0 1 6 5.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
