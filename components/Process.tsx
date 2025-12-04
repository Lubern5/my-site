"use client";

import FadeIn from "./FadeIn";

const STEPS = [
  {
    title: "01 · Discovery & Architecture",
    body: "We identify your constraints, requirements, and delivery goals. Then I map a lean, scalable architecture that supports your product without unnecessary complexity.",
  },
  {
    title: "02 · Build & Integrate",
    body: "Infrastructure as code, CI/CD, APIs, frontend, and backend systems — built in tight loops with rapid feedback and clean execution.",
  },
  {
    title: "03 · Hardening & Observability",
    body: "Logging, metrics, tracing, and alerting ensure deployments are predictable and incidents become manageable instead of chaotic.",
  },
  {
    title: "04 · Launch & Iterate",
    body: "Once live, we use real usage data, performance metrics, and team feedback to refine and evolve the system over time.",
  },
];

export default function Process() {
  return (
    <FadeIn delay={0.1}>
      <section className="container py-24 grid gap-12 md:grid-cols-[0.85fr,1.15fr]">
        {/* Sticky Summary */}
        <div className="relative">
          <div className="sticky top-28 space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Process
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 max-w-sm leading-[1.2]">
              A simple, opinionated way to ship stable, scalable systems.
            </h2>

            <p className="text-sm leading-relaxed text-neutral-600 max-w-sm">
              My goal is always the same: deliver something stable into
              production quickly — then iterate safely and predictably.
            </p>
          </div>
        </div>

        {/* Steps Column */}
        <div className="space-y-5">
          {STEPS.map((step) => (
            <article
              key={step.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-2"
            >
              <h3 className="text-sm font-semibold text-neutral-900">
                {step.title}
              </h3>

              <p className="text-xs leading-relaxed text-neutral-600">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
