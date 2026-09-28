import { Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-foreground/50">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind.
        </p>
        <div className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-foreground/50 hover:text-accent">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-foreground/50 hover:text-accent">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
