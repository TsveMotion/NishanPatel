export interface ExperienceItem {
  role: string;
  company: string;
  dates: string;
  description: string[];
}

export interface CertificateItem {
  title: string;
  year?: string;
}

export interface ProjectData {
  name: string;
  role: string;
  about: string;
  experience: ExperienceItem[];
  skills: string[];
  sportsAndHobbies: {
    content: string;
    highlights: string[];
  };
  certificates: string[];
  volunteering: string;
}
