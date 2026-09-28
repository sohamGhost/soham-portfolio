"use client";

import { motion } from "framer-motion";
import { Zap, Rocket, Network, Users, ShieldCheck, Award } from "lucide-react";
import { achievements, type Achievement } from "@/data/profile";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";

const iconMap: Record<Achievement["icon"], typeof Zap> = {
  Zap,
  Rocket,
  Network,
  Users,
  ShieldCheck,
  Award,
};

const chipColors = ["bg-accent/10 text-accent", "bg-accent2/10 text-accent2", "bg-success/10 text-success"];

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        title="Achievements"
        subtitle="Milestones earned across engineering, reliability, and delivery — more to come."
      />

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {achievements.map((item, i) => {
          const Icon = iconMap[item.icon];
          const offset = i % 2 === 0 ? "md:translate-y-0" : "md:translate-y-6";
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className={offset}
            >
              <Card className="h-full">
                <CardContent>
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${chipColors[i % chipColors.length]}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
