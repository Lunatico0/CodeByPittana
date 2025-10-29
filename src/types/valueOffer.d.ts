export interface PillarData {
  id: string;
  title: string;
  description: string;
  Icon: React.ElementType;
}

export interface CTAData {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
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
