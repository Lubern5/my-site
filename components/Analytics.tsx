"use client";

import FadeIn from "./FadeIn";

const METRICS = [
  { label: "Build Time After Optimization", value: "4.2 min" },
  { label: "Deployment Frequency", value: "3× / day" },
  { label: "Core Web Vitals", value: "Passed" },
];

const TRAFFIC = [
  { label: "Direct", value: 45 },
  { label: "Referrals", value: 25 },
  { label: "Search", value: 30 },
];

export default function Analytics() {
  const total = TRAFFIC.reduce((sum, t) => sum + t.value, 0);

  return (
    <FadeIn>
      <section className="container space-y-12 py-24">
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Outcomes
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
            Reliability & performance you can measure.
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed max-w-md">
            Data-driven improvements from real engineering workflows and cloud
            infrastructure deployments.
          </p>
        </div>

        <div className="grid md:grid-cols-[1.15fr,0.85fr] gap-10">
          {/* Metric Cards */}
          <div className="grid sm:grid-cols-3 gap-6">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <p className="text-xs text-neutral-500">{m.label}</p>
                <p className="mt-1 text-lg font-semibold text-neutral-900">
                  {m.value}
                </p>
              </div>
            ))}
          </div>

          {/* Traffic Breakdown */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-5">
            <p className="text-xs font-medium text-neutral-900">
              Example traffic distribution
            </p>

            {TRAFFIC.map((t) => {
              const pct = Math.round((t.value / total) * 100);
              return (
                <div key={t.label} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-neutral-600">
                    <span>{t.label}</span>
                    <span>{pct}%</span>
                  </div>
                  <div className="h-2 bg-neutral-100 rounded-full">
                    <div
                      className="h-full rounded-full bg-neutral-900"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}

            <p className="text-[11px] text-neutral-500 leading-relaxed">
              Real analytics can be integrated with AWS Pinpoint, Vercel
              Analytics, Plausible, or GA4.
            </p>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
