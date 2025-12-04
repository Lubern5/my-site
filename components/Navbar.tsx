"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "mailto:Lubernfigaro5@gmail.com", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[60] border-b border-neutral-200 bg-white/80 backdrop-blur-xl">
      <nav className="container flex items-center justify-between py-3">
        {/* Brand */}
        <a
          href="/"
          className="group flex items-center gap-2 select-none"
          aria-label="Home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-xs font-semibold text-white shadow-sm transition-transform group-hover:scale-105">
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
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {item.label}
            </a>
          ))}

          {/* EMAIL BUTTON */}
          <a
            href="mailto:Lubernfigaro5@gmail.com"
            className="rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-neutral-800"
          >
            Work with me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-800 md:hidden transition hover:bg-neutral-50"
        >
          <span className="sr-only">Open navigation</span>
          <div className="flex flex-col gap-1.5">
            <span className="block h-[2px] w-4 rounded-full bg-neutral-900" />
            <span className="block h-[2px] w-3 rounded-full bg-neutral-900" />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Slide Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: "easeInOut" }}
              className="absolute inset-y-0 right-0 w-72 bg-white border-l border-neutral-200 shadow-xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200">
                <span className="text-sm font-semibold text-neutral-900">
                  Menu
                </span>

                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 hover:bg-neutral-50"
                >
                  <span className="block h-[2px] w-4 rotate-45 bg-neutral-900 -translate-y-[1px]" />
                  <span className="block h-[2px] w-4 -rotate-45 bg-neutral-900 translate-y-[1px]" />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 px-5 py-4 space-y-2 text-sm">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-2 text-neutral-700 hover:bg-neutral-50 transition"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* CTA */}
              <div className="px-5 pb-5 pt-2 border-t border-neutral-100">
                <a
                  href="mailto:Lubernfigaro5@gmail.com"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-neutral-800"
                >
                  Work with me
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
