"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import FadeIn from "./FadeIn";

const TESTIMONIALS = [
  {
    name: "Product Lead — SaaS",
    quote:
      "Lubern rebuilt our deployment workflow into something fast, reliable, and fully automated. Huge upgrade.",
  },
  {
    name: "Founder — Local Brand",
    quote:
      "He delivered a premium AWS-hosted site that loads instantly. Modern, clean, and extremely professional.",
  },
  {
    name: "Engineering Manager",
    quote:
      "We finally have proper observability – logs, metrics, dashboards. Incidents dropped dramatically.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <FadeIn>
      <section className="container py-24 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Testimonials
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
            What teams say.
          </h2>

          <p className="text-sm text-neutral-600 max-w-md leading-relaxed">
            I work best with teams who value clarity, structure, and reliability.  
            Here’s how engineering leaders describe the experience.
          </p>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-[1.4fr,1fr] gap-10 items-center">
          {/* Testimonial Card */}
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm min-h-[200px] flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-4"
              >
                <p className="text-sm leading-relaxed text-neutral-700">
                  “{TESTIMONIALS[index].quote}”
                </p>

                <p className="text-sm font-semibold text-neutral-900">
                  {TESTIMONIALS[index].name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sidebar + Controls */}
          <div className="space-y-4 max-w-sm">
            {/* Navigation */}
            <div className="flex items-center justify-between text-[12px] text-neutral-500">
              <span>
                {index + 1} / {TESTIMONIALS.length}
              </span>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="h-8 w-8 rounded-full border border-neutral-200 hover:bg-neutral-50 transition flex items-center justify-center"
                >
                  ←
                </button>

                <button
                  onClick={next}
                  className="h-8 w-8 rounded-full border border-neutral-200 hover:bg-neutral-50 transition flex items-center justify-center"
                >
                  →
                </button>
              </div>
            </div>

            {/* Side Note */}
            <p className="text-xs text-neutral-600 leading-relaxed">
              Whether it’s DevOps, AWS infrastructure, or product engineering —  
              I bring predictability, structure, and craftsmanship to every engagement.
            </p>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
