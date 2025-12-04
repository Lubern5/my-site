"use client";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import Analytics from "@/components/Analytics";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />
      <div className="border-t border-neutral-200 my-10" />

      <Features />
      <div className="border-t border-neutral-200 my-10" />

      <Projects />
      <div className="border-t border-neutral-200 my-10" />

      <Analytics />
      <div className="border-t border-neutral-200 my-10" />

      <Skills />
      <div className="border-t border-neutral-200 my-10" />

      <Stats />
      <div className="border-t border-neutral-200 my-10" />

      <Process />
      <div className="border-t border-neutral-200 my-10" />

      {/* Pricing removed */}

      <Testimonials />
      <div className="border-t border-neutral-200 my-10" />

      {/* CTA contains the footer now */}
      <CTA />
    </>
  );
}
