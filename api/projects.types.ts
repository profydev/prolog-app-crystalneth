export enum ProjectLanguage {
  react = "react",
  node = "node",
  python = "python",
}

// API statuses error, warning, info
export enum ProjectStatus {
  info = "info",
  warning = "warning",
  error = "error",
}

export type Project = {
  id: string;
  name: string;
  language: ProjectLanguage;
  numIssues: number;
  numEvents24h: number;
  status: ProjectStatus;
};
