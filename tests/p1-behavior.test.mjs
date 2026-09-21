import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import {
  getAdjacentImageIndex,
  selectFeaturedProjects,
} from "../src/utils/project-presentation.js";

test("selectFeaturedProjects keeps only curated projects in editorial order", () => {
  const projects = [
    { slug: "exam", featured: true, featuredOrder: 2 },
    { slug: "other", featured: false, featuredOrder: 1 },
    { slug: "financial-data-engine", featured: true, featuredOrder: 1 },
  ];

  assert.deepEqual(
    selectFeaturedProjects(projects).map((project) => project.slug),
    ["financial-data-engine", "exam"],
  );
});

test("selectFeaturedProjects keeps the requested portfolio projects visible", () => {
  const source = readFileSync(
    new URL("../src/data/portfolio-data.ts", import.meta.url),
    "utf8",
  );
  const requestedSlugs = [
    "itera-ppid-system",
    "green-education-information-system",
    "hissa-stock-analysis-dashboard",
  ];
  const projects = requestedSlugs.map((slug) => {
    const projectStart = source.indexOf(`slug: "${slug}"`);
    const nextProjectStart = source.indexOf("\n  {\n    slug:", projectStart + 1);
    const projectSource = source.slice(
      projectStart,
      nextProjectStart === -1 ? source.length : nextProjectStart,
    );

    return {
      slug,
      featured: /featured:\s*true/.test(projectSource),
    };
  });

  assert.deepEqual(
    selectFeaturedProjects(projects).map((project) => project.slug),
    requestedSlugs,
  );
});

test("getAdjacentImageIndex wraps through a gallery in both directions", () => {
  assert.equal(getAdjacentImageIndex(0, 3, "previous"), 2);
  assert.equal(getAdjacentImageIndex(2, 3, "next"), 0);
  assert.equal(getAdjacentImageIndex(1, 3, "next"), 2);
});
