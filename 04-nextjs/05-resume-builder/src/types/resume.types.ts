import { Types } from "mongoose";

export interface IPersonalInfo {
  fullname: string;
  email: string;
  mobile: string;
  location: string;
  github: string;
  linkedIn: string;
  portfolio: string;
}

export interface IWorkExperience {
  company: string;
  description: string;
  position: string;
  startDate: string;
  endDate: string;
}

export interface IProjects {
  title: string;
  decsription: string;
  liveLink: string;
  githubLink: string;
  techStack: string[];
  startDate: string;
  endDate: string;
}

export interface IEducation {
  institute: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface IResume {
  _id?: Types.ObjectId;
  user: Types.ObjectId;
  title: string;
  summary: string;
  personalInfo: IPersonalInfo;
  workExperience?: IWorkExperience[];
  projects: IProjects[];
  education: IEducation[];
  certifications?: string[];
  achievements: string[];
  skills: string[];
  createdAt: Date;
  updatedAt: Date;
}
