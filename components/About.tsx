"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-3xl font-bold"
      >
        About Me
      </motion.h2>

      <div className="grid items-center gap-10 md:grid-cols-[280px_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto h-56 w-56 overflow-hidden rounded-3xl border border-border shadow-card md:h-72 md:w-72"
        >
          <Image
            src={profile.avatar}
            alt={profile.name}
            fill
            className="object-cover"
            sizes="288px"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-balance leading-relaxed text-foreground/70">{profile.bio}</p>
          <p className="mt-4 font-mono text-sm text-foreground/50">{profile.location}</p>
        </motion.div>
      </div>
    </section>
  );
}
