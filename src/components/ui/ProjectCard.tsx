import { Link } from "react-router";

import { ArrowRightIcon } from "./Icons";

type ProjectCardProps = {
  slug: string;
  name: string;
  problem: string;
  role: string;
  result: string;
  stack: string[];
  images: {
    src: string;
    alt: string;
  }[];
};

const ProjectCard = ({ slug, name, problem, role, result, stack, images }: ProjectCardProps) => {
  const thumbnail = images[0];

  return (
    <Link
      to={`/projects/${slug}`}
      className="group flex h-full flex-col border-2 border-neutral-950 bg-white p-6 text-left transition duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_#111111] focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-950/20"
      aria-label={`View ${name} case study`}
    >
      {thumbnail ? (
        <div className="mb-6 aspect-[16/9] overflow-hidden border-2 border-neutral-950 bg-neutral-100">
          <img
            src={thumbnail.src}
            alt={thumbnail.alt}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      ) : null}

      <h3 className="text-xl font-extrabold text-neutral-950">{name}</h3>

      <p className="mt-4 text-sm leading-7 text-neutral-600">{problem}</p>

      <div className="mt-4 border-t border-neutral-200 pt-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-extrabold text-neutral-500">Role</span>
          <span className="font-bold text-neutral-950">{role}</span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="border border-neutral-950 px-3 py-1 text-xs font-bold text-neutral-950 transition group-hover:bg-neutral-950 group-hover:text-white"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="mt-4 flex-1 text-sm leading-7 text-neutral-600">{result}</p>

      <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-neutral-950">
        Read Case Study
        <ArrowRightIcon className="size-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
};

export default ProjectCard;