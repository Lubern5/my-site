"use client";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white mt-24">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6 py-10">
        
        {/* Branding */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-[10px] font-semibold text-white shadow-sm">
            LF
          </div>

          <div className="leading-tight">
            <p className="text-sm font-semibold text-neutral-900">
              Lubern Figaro
            </p>
            <p className="text-xs text-neutral-500">
              DevOps • Cloud • Full-Stack
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-[12px] text-neutral-600">
          <a href="#projects" className="transition hover:text-neutral-900">
            Projects
          </a>
          <a href="#services" className="transition hover:text-neutral-900">
            Services
          </a>
          <a href="mailto:Lubernfigaro5@gmail.com" className="transition hover:text-neutral-900">
            Contact
          </a>
        </nav>
      </div>

      {/* Footer Bottom */}
      <div className="py-4">
        <p className="text-center text-[11px] text-neutral-500 tracking-tight">
          © {new Date().getFullYear()} Lubern Figaro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
