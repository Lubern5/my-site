"use client";

export default function CTA() {
  return (
    <section className="w-full bg-white py-8">

      {/* TWO COLUMN LAYOUT — CENTERED VERTICALLY & TIGHT */}
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

        {/* LEFT COLUMN — FOOTER INFO */}
        <div className="text-left">
          {/* LF BLOCK */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-neutral-900 text-white text-xs font-semibold">
              LF
            </div>

            <div className="leading-tight">
              <p className="font-semibold text-neutral-900">Lubern Figaro</p>
              <p className="text-xs text-neutral-600">
                DevOps • Cloud • Full-Stack
              </p>
            </div>
          </div>

          {/* LINKS — SMALLER & TIGHTER */}
          <div className="flex gap-4 text-sm text-neutral-600 mt-2">
            <a href="#projects" className="hover:text-neutral-900">Projects</a>
            <a href="#services" className="hover:text-neutral-900">Services</a>
            <a href="mailto:Lubernfigaro5@gmail.com" className="hover:text-neutral-900">Contact</a>
          </div>
        </div>

        {/* RIGHT COLUMN — CTA (TIGHT + RIGHT ALIGNED) */}
        <div className="text-left md:text-right">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Ready to Build Something?
          </h2>
          <p className="mt-1 text-base text-neutral-600 max-w-sm md:ml-auto">
            Let’s create something clean, fast, and professional together.
          </p>
        </div>
      </div>

      {/* COPYRIGHT — CENTERED, TIGHT ABOVE BOTTOM */}
      <p className="mt-6 text-center text-xs text-neutral-500">
        © 2025 Lubern Figaro. All rights reserved.
      </p>

    </section>
  );
}
