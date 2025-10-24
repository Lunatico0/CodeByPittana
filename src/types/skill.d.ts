export type TechPill = string;

export type SkillPill = TechPill;

export interface SkillStack {
  title: string;
  pills: SkillPill[];
}

export type TechAndSoftSkillsData = SkillStack[];
