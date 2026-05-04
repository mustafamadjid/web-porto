type ProjectCardProps = {
  name: string;
  period: string;
  description: string;
  stack: string[];
};

const ProjectCard = ({ name, period, description, stack }: ProjectCardProps) => {
  return (
    <article className="group flex h-full flex-col border-2 border-neutral-950 bg-white p-6 transition duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_#111111]">
      <p className="text-sm font-semibold text-neutral-500">{period}</p>
      <h3 className="mt-4 text-xl font-extrabold text-neutral-950">{name}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-neutral-600">{description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="border border-neutral-950 px-3 py-1 text-xs font-bold text-neutral-950 transition group-hover:bg-neutral-950 group-hover:text-white"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
