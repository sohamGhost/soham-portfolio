"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/profile";
import { Card, CardContent } from "@/components/ui/card";

export function Certifications() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-center text-3xl font-bold"
      >
        Education & Certifications
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <Card>
          <CardContent className="flex items-center gap-4">
            <GraduationCap className="text-accent" size={28} />
            <div>
              <h3 className="font-semibold">{education.degree}</h3>
              <p className="text-sm text-foreground/60">
                {education.school} · {education.period} · CGPA: {education.cgpa}
              </p>
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
            whileHover={{ scale: 1.03 }}
          >
            <Card className="h-full border-success/20">
              <CardContent className="flex items-start gap-3">
                <Award className="mt-0.5 flex-shrink-0 text-success" size={20} />
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
