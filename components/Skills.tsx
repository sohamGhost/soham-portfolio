"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/profile";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading title="Skills" />

      <div className="grid gap-8 md:grid-cols-2">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
          >
            <h3 className="mb-3 font-mono text-sm uppercase tracking-wide text-foreground/50">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} color={group.color}>
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
