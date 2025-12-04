"use client";

import { motion } from "framer-motion";

export default function FadeIn({
  children,
  delay = 0,
  yOffset = 18,
}: {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // premium easing curve
      }}
    >
      {children}
    </motion.div>
  );
}
