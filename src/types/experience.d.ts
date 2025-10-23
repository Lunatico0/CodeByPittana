export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string[];
};

export type EducationItem = {
  title: string;
  institution: string;
  period: string;
  description?: string;
};

export type ExperienceProps = {
  work: ExperienceItem[];
  education: EducationItem[];
};
