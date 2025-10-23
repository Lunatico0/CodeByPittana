export interface CardWithIconProps {
  Icon?: React.ElementType;
  title: string;
  paragraph?: string;
  index?: number;
  variant?: "default" | "compact" | "about";
  className?: string;
}
