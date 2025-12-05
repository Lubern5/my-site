"use client";

import { useEffect, useState } from "react";
import FadeIn from "./FadeIn";

const METRICS = [
  { label: "Build Time After Optimization", value: 4.2, suffix: " min" },
  { label: "Deployment Frequency", value: 3, suffix: "× / day" },
  { label: "Core Web Vitals", value: 100, suffix: "% Passed", isPercent: true },
];

const TRAFFIC = [
  { label: "Direct", value: 45 },
  { label: "Referrals", value: 25 },
  { label: "Search", value: 30 },
];

export default function Analytics() {
  const [counters, setCounters] = useState(METRICS.map(() => 0));
  const total = TRAFFIC.reduce((s, t) => s + t.value, 0);

  // Smooth counter animation
  useEffect(() => {
    const duration = 1200;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic

      setCounters(METRICS.map((m) => Math.round(m.value * eased * 100) / 100));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <FadeIn>
      <section className="container space-y-14 py-24">

        {/* HEADER */}
        <div className="space-y-4 max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Outcomes
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-neutral-900">
            Reliability & performance you can quantify.
          </h2>

          <p className="text-sm text-neutral-600 leading-relaxed max-w-md">
            Engineered improvements backed by real cloud deployments, DevOps automation, 
            and measurable system performance data.
          </p>
        </div>

        <div className="grid md:grid-cols-[1.15fr,0.85fr] gap-12">

          {/* METRIC CARDS */}
          <div className="grid sm:grid-cols-3 gap-6">
            {METRICS.map((m, i) => (
              <div
                key={m.label}
                className="
                  rounded-2xl border border-neutral-200 bg-white/70 
                  p-6 shadow-sm backdrop-blur-xl relative overflow-hidden
                  hover:shadow-md transition-all
                "
              >
                {/* Gradient border accent */}
                <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-neutral-900/40 to-neutral-900/10" />

                <p className="text-xs text-neutral-500">{m.label}</p>

                <p className="mt-2 text-2xl font-semibold text-neutral-900">
                  {m.isPercent
                    ? `${Math.round(counters[i])}% Passed`
                    : `${counters[i]}${m.suffix}`}
                </p>
              </div>
            ))}
          </div>

          {/* TRAFFIC BREAKDOWN */}
          <div
            className="
              rounded-2xl border border-neutral-200 bg-white/70 p-6 
              shadow-sm space-y-6 backdrop-blur-xl hover:shadow-md transition-all
            "
          >
            <p className="text-xs font-medium text-neutral-900 tracking-wide">
              Example traffic distribution
            </p>

            {TRAFFIC.map((t, i) => {
              const pct = Math.round((t.value / total) * 100);

              return (
                <div key={t.label} className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-neutral-600">
                    <span>{t.label}</span>
                    <span>{pct}%</span>
                  </div>

                  <div className="h-2 bg-neutral-200/60 rounded-full overflow-hidden">
                    <div
                      className="
                        h-full rounded-full bg-neutral-900 transition-all duration-700
                      "
                      style={{ width: `${pct}%`, transitionDelay: `${i * 120}ms` }}
                    />
                  </div>
                </div>
              );
            })}

            <p className="text-[11px] text-neutral-500 leading-relaxed pt-2">
              Real analytics integrations available for AWS Pinpoint, Vercel Analytics, 
              Plausible, or Google Analytics 4.
            </p>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
