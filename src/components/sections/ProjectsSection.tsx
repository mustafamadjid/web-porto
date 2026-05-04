import { projects } from "../../data/portfolio-data";
import ProjectCard from "../ui/ProjectCard";
import SectionHeading from "../ui/SectionHeading";

const getLatestYear = (period: string) => {
  const years = period.match(/\d{4}/g)?.map(Number) ?? [];
  return Math.max(...years);
};

const ProjectsSection = () => {
  const sortedProjects = [...projects].sort((a, b) => getLatestYear(b.period) - getLatestYear(a.period));

  return (
    <section id="projects" className="scroll-mt-24 px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="My" highlight="Projects" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
