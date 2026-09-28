"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { Card, CardContent } from "@/components/ui/card";

const stripProtocol = (url: string) => url.replace(/^https?:\/\//, "");

const details = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, chip: "bg-accent/10 text-accent" },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    chip: "bg-accent2/10 text-accent2",
  },
  { icon: Linkedin, label: "LinkedIn", value: stripProtocol(profile.linkedin), href: profile.linkedin, chip: "bg-accent/10 text-accent" },
  { icon: Github, label: "GitHub", value: stripProtocol(profile.github), href: profile.github, chip: "bg-success/10 text-success" },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined, chip: "bg-accent2/10 text-accent2" },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-3xl font-bold md:text-4xl">Let&apos;s build something.</h2>
        <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-accent to-accent2" />
        <p className="mt-5 max-w-2xl text-foreground/60">
          Whether it&apos;s <span className="font-semibold text-foreground">payment systems</span>, engineering{" "}
          <span className="font-semibold text-foreground">Kafka pipelines</span>, or building{" "}
          <span className="font-semibold text-foreground">agentic AI workflows</span> — I&apos;d love to hear about
          your next project.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {details.map((item, i) => {
          const Icon = item.icon;
          const content = (
            <CardContent>
              <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${item.chip}`}>
                <Icon size={17} />
              </div>
              <p className="text-xs uppercase tracking-wide text-foreground/50">{item.label}</p>
              <p className="mt-1 break-words font-semibold">{item.value}</p>
            </CardContent>
          );
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={item.href ? { y: -4 } : undefined}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="block h-full"
                >
                  <Card className="h-full transition-shadow hover:shadow-lg">{content}</Card>
                </a>
              ) : (
                <Card className="h-full">{content}</Card>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
