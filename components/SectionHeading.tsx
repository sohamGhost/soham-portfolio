"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ title, subtitle, align = "left", className }: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("mb-14", isCenter && "text-center", className)}
    >
      <h2 className="font-display text-3xl font-bold md:text-4xl">{title}</h2>
      <div className={cn("mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-accent to-accent2", isCenter && "mx-auto")} />
      {subtitle && (
        <p className={cn("mt-4 max-w-xl text-foreground/60", isCenter && "mx-auto")}>{subtitle}</p>
      )}
    </motion.div>
  );
}
