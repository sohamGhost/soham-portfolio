"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-4 z-50 mx-auto max-w-5xl px-4"
    >
      <nav
        className={`flex items-center justify-between rounded-full border border-border bg-background/80 px-6 py-3 backdrop-blur-md transition-shadow ${
          scrolled ? "shadow-card" : ""
        }`}
      >
        <a href="#" className="flex items-center gap-2 font-display text-sm font-bold tracking-tight">
          <span className="h-2 w-2 rounded-full bg-accent" />
          {profile.name}
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
      <ul className="mt-2 flex items-center justify-center gap-4 rounded-full border border-border bg-background/80 py-2 backdrop-blur-md md:hidden">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-xs text-foreground/70">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.header>
  );
}
