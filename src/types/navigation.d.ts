export type NavId = 'hero' | 'highlights' | 'projects' | 'tech' | 'about' | 'experience' | 'value' | 'contact';

export interface NavLink {
  href: string;
  id: NavId;
  label: string;
}
