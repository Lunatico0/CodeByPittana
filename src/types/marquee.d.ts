import type React from "react";

export interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  reverse?: boolean;
  speed?: "slow" | "normal" | "fast";
}
