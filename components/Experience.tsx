"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { experience } from "@/data/profile";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading title="Experience" />

      {experience.map((job) => (
        <div key={job.company} className="mb-10">
          <div className="mb-6 flex items-center gap-3">
            <Building2 className="text-accent" size={22} />
            <div>
              <h3 className="text-lg font-semibold">{job.company}</h3>
              <p className="font-mono text-xs text-foreground/50">
                {job.period} · {job.type}
              </p>
            </div>
          </div>

          <div className="relative border-l border-border pl-8">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ transformOrigin: "top" }}
              className="absolute left-0 top-0 h-full w-px origin-top bg-gradient-to-b from-accent to-accent2"
            />

            {job.clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="mb-8"
              >
                <div className="absolute -left-[calc(2rem+4.5px)] mt-1.5 h-2 w-2 rounded-full bg-accent" />
                <Card>
                  <CardContent>
                    <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-semibold text-accent2">{client.name}</h4>
                      <span className="font-mono text-xs text-foreground/50">{client.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {client.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-2 text-sm leading-relaxed text-foreground/70">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-foreground/40" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
