"use client";

import { useEffect, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useRef } from "react";
import {
  Github,
  Linkedin,
  Download,
  ArrowRight,
  ChevronDown,
  Code2,
  Database,
  Terminal,
  Binary,
  Braces,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, heroStats } from "@/data/profile";

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? 40 : 70;
    const pause = deleting ? 200 : 1800;

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
      return;
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words]);

  return text;
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, {
        duration: 1.4,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(Math.round(v)),
      });
      return () => controls.stop();
    }
  }, [inView, value, motionValue]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-mono text-3xl font-bold text-accent md:text-4xl">
        {display}
        {suffix}
      </p>
      <p className="mt-1 text-xs text-foreground/60 md:text-sm">{label}</p>
    </div>
  );
}

const doodles = [
  { Icon: Code2, className: "left-[6%] top-[14%] h-9 w-9 -rotate-6" },
  { Icon: Database, className: "right-[8%] top-[8%] h-8 w-8 rotate-3" },
  { Icon: Terminal, className: "left-[4%] top-[50%] h-7 w-7 rotate-6" },
  { Icon: Share2, className: "right-[5%] top-[42%] h-9 w-9 -rotate-3" },
  { Icon: Braces, className: "left-[7%] bottom-[6%] h-8 w-8 rotate-3" },
  { Icon: Binary, className: "right-[6%] bottom-[8%] h-8 w-8 -rotate-6" },
];

export function Hero() {
  const typed = useTypewriter(profile.taglines);
  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-24">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
        {doodles.map(({ Icon, className }, i) => (
          <Icon key={i} className={`absolute text-foreground/10 ${className}`} />
        ))}
        <motion.div
          className="mesh-orb h-72 w-72 bg-accent left-[10%] top-[15%]"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="mesh-orb h-96 w-96 bg-accent2 right-[5%] top-[30%]"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="mesh-orb h-64 w-64 bg-success left-[40%] bottom-[5%]"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-5xl font-bold tracking-tight text-balance md:text-7xl"
        >
          {firstName} <span className="text-gradient">{lastName}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 font-mono text-base text-foreground/50 md:text-lg"
        >
          {profile.quote}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-3 h-8 font-mono text-lg text-accent md:text-xl"
        >
          {typed}
          <span className="animate-pulse">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-foreground/70"
        >
          {profile.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            View Projects <ArrowRight size={16} />
          </Button>
          <a href={profile.resume} download>
            <Button variant="outline">
              Download Resume <Download size={16} />
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 flex items-center justify-center gap-4"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-foreground/60 transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-foreground/60 transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-foreground/40 transition-colors hover:text-accent"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Scroll
        <ChevronDown size={14} />
      </motion.button>
    </section>
  );
}
