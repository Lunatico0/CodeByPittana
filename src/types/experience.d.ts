export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
};

export type EducationItem = {
  id: string;
  title: string;
  institution: string;
  period: string;
  description?: string;
};

export type ExperienceProps = {
  work: ExperienceItem[];
  education: EducationItem[];
};
