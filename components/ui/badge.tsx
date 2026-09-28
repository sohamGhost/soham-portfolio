import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  color?: "accent" | "accent2" | "success" | "neutral";
};

const colorMap: Record<string, string> = {
  accent: "bg-accent/10 text-accent border-accent/30",
  accent2: "bg-accent2/10 text-accent2 border-accent2/30",
  success: "bg-success/10 text-success border-success/30",
  neutral: "bg-muted text-foreground/80 border-border",
};

export function Badge({ className, color = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-mono transition-transform hover:scale-105",
        colorMap[color],
        className
      )}
      {...props}
    />
  );
}
