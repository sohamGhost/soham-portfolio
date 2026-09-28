"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/profile";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";

export function Certifications() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading title="Education & Certifications" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <Card>
          <CardContent className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="font-semibold">{education.degree}</h3>
                <p className="text-sm text-foreground/60">{education.school}</p>
              </div>
            </div>
            <div className="flex-shrink-0 text-right">
              <p className="font-display text-xl font-bold text-accent">{education.cgpa} CGPA</p>
              <p className="mt-1 text-xs text-foreground/50">{education.period}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
          >
            <Card className="h-full">
              <CardContent className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-success/10 text-success">
                  <Award size={17} />
                </div>
                <div>
                  <p className="text-sm font-medium leading-snug">{cert.name}</p>
                  <p className="mt-1 text-xs text-foreground/50">{cert.issuer}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
