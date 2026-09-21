import type { Project } from "../data/portfolio-data";

export declare function selectFeaturedProjects(projects: Project[]): Project[];

export declare function getAdjacentImageIndex(
  index: number,
  total: number,
  direction: "previous" | "next",
): number;
