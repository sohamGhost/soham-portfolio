"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { projects, profile } from "@/data/profile";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-center text-3xl font-bold"
      >
        Projects
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
            whileHover={{ y: -8 }}
            className={project.featured ? "md:col-span-2" : ""}
          >
            <Card className="group relative h-full overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-accent/10">
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-br from-accent/0 via-transparent to-accent2/0 opacity-0 transition-opacity duration-300 group-hover:border-accent/30 group-hover:opacity-100" />
              <CardContent>
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  {project.featured && <Badge color="accent2">Featured</Badge>}
                </div>

                {project.impact && (
                  <p className="mb-3 font-mono text-xs text-success">{project.impact}</p>
                )}

                <p className="mb-4 text-sm leading-relaxed text-foreground/70">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} color="accent">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-accent"
        >
          <Github size={18} /> See more on GitHub
        </a>
      </div>
    </section>
  );
}
