export function selectFeaturedProjects(projects) {
  return projects
    .filter((project) => project.featured)
    .sort(
      (a, b) =>
        (a.featuredOrder ?? Number.MAX_SAFE_INTEGER) -
        (b.featuredOrder ?? Number.MAX_SAFE_INTEGER),
    );
}

export function getAdjacentImageIndex(index, total, direction) {
  if (total <= 0) return 0;

  const delta = direction === "previous" ? -1 : 1;
  return (index + delta + total) % total;
}
