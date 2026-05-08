import { Link, Navigate, useParams } from "react-router";

import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { ArrowLeftIcon, ExternalLinkIcon } from "../components/ui/Icons";
import { projects } from "../data/portfolio-data";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/#projects" replace />;
  }

  const metaItems = [
    { label: "Role", value: project.role },
    { label: "Year", value: project.year },
    { label: "Period", value: project.period },
    { label: "Type", value: project.type },
    { label: "Status", value: project.status },
  ];

  return (
    <div className="parallax-page min-h-screen text-neutral-950">
      <Navbar />
      <main>
        <section className="section-parallax-grid relative isolate overflow-hidden px-5 py-12 sm:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-neutral-700 transition hover:text-neutral-950"
            >
              <ArrowLeftIcon className="size-4" />
              Back to projects
            </Link>

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start">
              <div>
                <p className="text-sm font-extrabold uppercase text-neutral-500">
                  Project Detail
                </p>
                <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-neutral-950 sm:text-5xl lg:text-6xl">
                  {project.name}
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-600 sm:text-lg">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border-2 border-neutral-950 bg-white px-4 py-2 text-xs font-extrabold text-neutral-950"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <aside className="border-2 border-neutral-950 bg-white p-6 shadow-[10px_10px_0_#111111]">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                  {metaItems.map((item) => (
                    <div key={item.label} className="border-b border-neutral-200 pb-4 last:border-b-0 last:pb-0">
                      <p className="text-xs font-extrabold uppercase text-neutral-500">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm font-bold leading-6 text-neutral-950">{item.value}</p>
                    </div>
                  ))}
                </div>
                {project.links?.length ? (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-neutral-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-neutral-700"
                      >
                        {link.label}
                        <ExternalLinkIcon className="size-4" />
                      </a>
                    ))}
                  </div>
                ) : null}
              </aside>
            </div>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="flex snap-x gap-5 overflow-x-auto pb-5">
              {project.images.map((image, index) => (
                <figure
                  key={`${image.src}-${index}`}
                  className="min-w-[82%] snap-start border-2 border-neutral-950 bg-white sm:min-w-[520px] lg:min-w-[620px]"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                  </div>
                  <figcaption className="border-t-2 border-neutral-950 px-5 py-4 text-sm font-bold text-neutral-700">
                    {String(index + 1).padStart(2, "0")} / {project.images.length} - {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 sm:px-8 lg:pb-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div>
              <h2 className="text-3xl font-black text-neutral-950">Overview</h2>
              <div className="mt-5 space-y-5 text-base leading-8 text-neutral-600">
                {project.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <DetailList title="Responsibilities" items={project.responsibilities} />
              <DetailList title="Key Features" items={project.features} />
              <DetailList title="Results" items={project.results} className="md:col-span-2" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

type DetailListProps = {
  title: string;
  items: string[];
  className?: string;
};

const DetailList = ({ title, items, className = "" }: DetailListProps) => {
  return (
    <section className={`border-2 border-neutral-950 bg-white p-6 ${className}`}>
      <h2 className="text-xl font-black text-neutral-950">{title}</h2>
      <ul className="mt-5 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-neutral-600">
            <span className="mt-2 size-2 shrink-0 bg-neutral-950" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectDetail;
