import { ElementType, ReactNode } from "react";

export interface PillarData {
  id: string;
  title: string;
  description: string;
  Icon: ElementType;
}

export interface CTAData {
  id: string;
  title: string;
  description: string;
  Icon?: ReactNode;
  ctaText: string;
  ctaLink?: string;
}

export interface ValueOfferSectionProps {
  pillars: PillarData[];
  ctas: CTAData[];
}

export interface ValuePillarCardProps extends PillarData {
  index?: number;
}

export interface DualCTACardProps extends CTAData {
  isPrimary?: boolean;
  className?: string;
}
