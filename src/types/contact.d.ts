interface SocialLink {
  name: string;
  href: string;
  Icon?: React.ElementType;
}

export interface ContactProps {
  heading: string;
  subheading: string;
  paragraph: string;
  ctaLabel: string;
  socialLinks: SocialLink[];
}
