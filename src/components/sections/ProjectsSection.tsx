import { selectFeaturedProjects } from "../../utils/project-presentation.js";
import { projects } from "../../data/portfolio-data";
import Parallax from "../ui/Parallax";
import ProjectCard from "../ui/ProjectCard";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

const ProjectsSection = () => {
  const featuredProjects = selectFeaturedProjects(projects);

  return (
    <section id="projects" className="section-parallax-grid relative isolate overflow-hidden scroll-mt-24 px-5 py-16 sm:px-8 lg:py-24">
      <Parallax
        speed={0.13}
        maxOffset={110}
        className="pointer-events-none absolute bottom-12 left-[7%] hidden h-40 w-40 bg-neutral-950 md:block"
      >
        <span className="block h-full w-full translate-x-4 translate-y-4 border-2 border-neutral-950 bg-white" />
      </Parallax>
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionHeading title="Featured" highlight="Projects" />
          <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-600">
            Each project starts with a real problem, includes the role and stack used, and ends with a measurable outcome.
          </p>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={(index % 3) * 90}>
              <ProjectCard
                slug={project.slug}
                name={project.name}
                period={project.period}
                type={project.type}
                problem={project.problem}
                role={project.role}
                result={project.result}
                stack={project.stack}
                images={project.images}
                links={project.links}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
