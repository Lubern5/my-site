"use client";

import FadeIn from "./FadeIn";

export default function FAQ() {
  const faqs = [
    {
      q: "What technologies do you specialize in?",
      a: "I focus on AWS, Docker, Kubernetes, Terraform, CI/CD pipelines, Next.js, and scalable architecture.",
    },
    {
      q: "Do you work with small businesses?",
      a: "Absolutely. I build lightweight, fast, affordable solutions tailored to smaller teams and startups.",
    },
    {
      q: "How long does a typical project take?",
      a: "Timelines vary by complexity, but most projects take 1–4 weeks from planning to deployment.",
    },
    {
      q: "Do you offer ongoing support?",
      a: "Yes — I offer optional maintenance plans, monitoring, and long-term improvements.",
    },
  ];

  return (
    <section id="faq" className="container mt-24 md:mt-28">
      <FadeIn>
        {/* Heading */}
        <div className="mb-8 md:mb-10">
          <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-neutral-500">
            FAQ
          </p>
          <h2 className="text-[1.9rem] md:text-[2.2rem] font-semibold tracking-tight text-neutral-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-5 md:space-y-6">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-7 shadow-sm"
            >
              <h3 className="text-[1rem] font-semibold leading-tight text-neutral-900">
                {item.q}
              </h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-neutral-600">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
