export type ProjectType = "side_project" | "employment" | "freelance";

export interface IProjects {
  description: string;
  id: number;
  image?: string;
  title: string;
  type: "web" | "mobile";
  link?: string;
  project_type: ProjectType;
  year: number;
}

export interface ITalks {
  id: number;
  title: string;
  date: Date;
  link: string;
  company: string;
}
