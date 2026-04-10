export type ExperienceLevel = "junior" | "mid" | "senior" | "staff";
export type CVTheme = "dark-editorial" | "colorful";

export interface CVHeader {
  name: string;
  title: string;
  email: string;
  phone?: string;
  linkedin: string;
  github: string;
  location: string;
  photo?: string; // path relative to public/, e.g. "/profile.jpg"
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
}

export interface ProjectEntry {
  name: string;
  description: string;
  bullets: string[];
  tech: string[];
  link?: string;
}

export interface EducationEntry {
  degree: string;
  school: string;
  year: string;
  note?: string;
}

export interface CVData {
  meta: {
    person: string;
    level: ExperienceLevel;
    theme?: CVTheme;
  };
  header: CVHeader;
  summary?: string;
  coreExpertise?: string[];
  experience: ExperienceEntry[];
  highlights?: string[];
  skills: Record<string, string[]>;
  projects: ProjectEntry[];
  education: EducationEntry[];
}
