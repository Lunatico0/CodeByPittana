"use client";

import Intro from "@components/sections/Hero/Intro";
import { ProfileImage } from "@components/sections/Hero/ProfileImage";

type HeroProps = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHREF: string;
  secondaryCta: string;
  secondaryHREF: string;
};

export default function Hero({
  ...props
}: HeroProps) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-6">

      {/* ProfileImage */}
      <ProfileImage />

      {/* Intro */}
      <Intro {...props} />
    </section >
  );
}
