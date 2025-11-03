export type TimeLineCardProps = {
  data: {
    id: string;
    role?: string;
    company?: string;
    description?: string | string[];
    title?: string;
    institution?: string;
    period: string;
  };
  index: number;
};
