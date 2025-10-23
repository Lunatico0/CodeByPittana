"use client";

import Intro from "@components/sections/Hero/Intro";
import ProfileImage from "@components/sections/Hero/ProfileImage";
import type { HeroProps } from "@typings/hero";

export default function Hero({ ...props }: HeroProps) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-6">
      <ProfileImage />
      <Intro {...props} />
    </section >
  );
}
