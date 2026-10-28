export interface GenerateSummary {
  experienceLevel: string;
  skills: [];
  jobTitle: string;
}

export interface GenerateSkills {
  experienceLevel: string;
  jobTitle: string;
}

export interface ProjectDescription {
  projectName: string;
  technologies: string;
  projectDetails: string;
}

export interface ExperienceDescription {
  jobTitle: string;
  companyName: string;
  employmentType: string;
  experienceDetails: string;
}
