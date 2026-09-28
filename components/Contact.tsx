"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { Card, CardContent } from "@/components/ui/card";

const details = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-center text-3xl font-bold"
      >
        Get In Touch
      </motion.h2>
      <p className="mb-10 text-center text-foreground/60">
        Have an opportunity or just want to connect? Reach out directly — I&apos;d love to hear from you.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardContent className="space-y-5">
            {details.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-foreground/50">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-xl transition-opacity hover:opacity-80"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </CardContent>
        </Card>
      </motion.div>

      <div className="mt-8 flex justify-center gap-5">
        <a href={profile.github} target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-accent">
          <Github size={20} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-accent">
          <Linkedin size={20} />
        </a>
      </div>
    </section>
  );
}
