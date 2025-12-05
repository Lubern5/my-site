"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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
  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  // Auto-rotate every 8 seconds
  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <FadeIn>
      <section className="container py-24 space-y-14">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Testimonials
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-neutral-900">
            What teams say about working with me.
          </h2>

          <p className="text-[15px] text-neutral-600 leading-relaxed max-w-lg">
            Clear communication, predictable delivery, and scalable architecture —
            these are the outcomes I bring to engineering teams. Here’s how leaders describe the experience.
          </p>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-[1.6fr,1fr] gap-12 items-center">
          {/* Testimonial Card */}
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-10 shadow-[0_8px_24px_rgb(0,0,0,0.06)] backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="flex flex-col gap-5"
              >
                <p className="text-[15px] leading-relaxed text-neutral-800">
                  “{TESTIMONIALS[index].quote}”
                </p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="text-sm font-semibold text-neutral-900 tracking-tight"
                >
                  {TESTIMONIALS[index].name}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* Soft Glow Accent */}
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(168,85,247,0.12), transparent 60%)",
              }}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6 max-w-sm">
            {/* Navigation */}
            <div className="flex items-center justify-between text-[12px] text-neutral-500">
              <span className="tracking-wide">
                {index + 1} / {TESTIMONIALS.length}
              </span>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="h-9 w-9 rounded-full border border-neutral-200 hover:bg-neutral-100 active:scale-95 transition-all flex items-center justify-center"
                >
                  ←
                </button>

                <button
                  onClick={next}
                  className="h-9 w-9 rounded-full border border-neutral-200 hover:bg-neutral-100 active:scale-95 transition-all flex items-center justify-center"
                >
                  →
                </button>
              </div>
            </div>

            {/* Side Note */}
            <p className="text-[13px] text-neutral-600 leading-relaxed">
              Whether it’s AWS infrastructure, DevOps pipelines, or production-grade
              engineering — I bring clarity, predictability, and craftsmanship to every build.
            </p>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-neutral-200 to-transparent" />
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
