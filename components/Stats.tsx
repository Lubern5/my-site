"use client";

import FadeIn from "./FadeIn";

const STATS = [
  { label: "Cloud Projects Delivered", value: "15+" },
  { label: "Web Apps Built", value: "20+" },
  { label: "Years on AWS", value: "5+" },
  { label: "Reliability Target", value: "99.9%" },
];

export default function Stats() {
  return (
    <FadeIn>
      <section className="container py-24">
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 md:p-10 shadow-sm">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="space-y-1.5">
                <p className="text-xs text-neutral-500">{stat.label}</p>
                <p className="text-lg font-semibold tracking-tight text-neutral-900">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
