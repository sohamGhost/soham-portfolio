"use client";

import { profile } from "@/data/profile";

const role = profile.title.split("|")[0].trim();

export function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 sm:flex-row">
        <p className="text-sm text-foreground/50">
          © {new Date().getFullYear()} {profile.name} · {role}
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm text-accent transition-colors hover:text-accent2"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
