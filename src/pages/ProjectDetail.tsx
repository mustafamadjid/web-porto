import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router";

import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CloseIcon,
  ExternalLinkIcon,
} from "../components/ui/Icons";
import { projects } from "../data/portfolio-data";
import { getAdjacentImageIndex } from "../utils/project-presentation.js";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const selectedImage =
    project && selectedImageIndex !== null ? project.images[selectedImageIndex] : null;
  const selectedImageNumber =
    selectedImageIndex === null ? null : selectedImageIndex + 1;

  useEffect(() => {
    if (project) {
      document.title = `${project.name} Case Study | Athaullah Mustafa Madjid`;
    } else {
      document.title = "Project Not Found | Athaullah Mustafa Madjid";
    }
  }, [project]);

  const isLightboxOpen = selectedImageIndex !== null && Boolean(selectedImage);

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
      previousFocusRef.current = null;
    };
  }, [isLightboxOpen]);

  useEffect(() => {
    if (!isLightboxOpen || !project) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImageIndex(null);
        return;
      }

      if (event.key === "ArrowLeft" && selectedImageIndex !== null) {
        setSelectedImageIndex(
          getAdjacentImageIndex(selectedImageIndex, project.images.length, "previous"),
        );
        return;
      }

      if (event.key === "ArrowRight" && selectedImageIndex !== null) {
        setSelectedImageIndex(
          getAdjacentImageIndex(selectedImageIndex, project.images.length, "next"),
        );
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements?.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, project, selectedImageIndex]);

  if (!project) {
    return (
      <div className="parallax-page min-h-screen text-neutral-950">
        <Navbar />
        <main id="main" tabIndex={-1}>
          <section className="section-parallax-grid relative isolate overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
            <div className="mx-auto max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-wide text-neutral-500">
                Case study unavailable
              </p>
              <h1 className="mt-4 text-4xl font-black leading-tight text-neutral-950 sm:text-5xl">
                This project could not be found.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600">
                The project link may be outdated or the case study may no longer be public.
              </p>
              <Link
                to="/#projects"
                className="motion-safe:active:translate-y-px mt-8 inline-flex items-center gap-2 bg-neutral-950 px-5 py-3 font-bold text-white transition duration-200 hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-950 focus-visible:ring-offset-4"
              >
                Return to projects
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
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
      <main id="main" tabIndex={-1}>
        <section className="section-parallax-grid relative isolate overflow-hidden px-5 py-12 sm:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-neutral-700 transition-colors duration-200 hover:text-neutral-950"
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

              <aside className="border-2 border-neutral-950 bg-white p-6 shadow-offset-md">
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
                        className="motion-safe:active:translate-y-px inline-flex items-center gap-2 bg-neutral-950 px-4 py-3 text-sm font-bold text-white transition duration-200 hover:bg-neutral-700"
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
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="border-2 border-neutral-950 bg-white p-6">
              <p className="text-xs font-extrabold uppercase tracking-wide text-neutral-500">Problem</p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-700">{project.problem}</p>
            </div>
            <div className="border-2 border-neutral-950 bg-neutral-950 p-6 text-white">
              <p className="text-xs font-extrabold uppercase tracking-wide text-neutral-300">Outcome</p>
              <p className="mt-4 text-base leading-8 text-neutral-100">{project.result}</p>
            </div>
          </div>
        </section>

        {project.images.length ? (
          <section className="px-5 py-12 sm:px-8 lg:py-16">
            <div className="mx-auto max-w-7xl">
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="text-3xl font-black text-neutral-950">Screenshots</h2>
                <p className="text-sm font-semibold text-neutral-500">
                  Swipe or select an image to open a larger preview.
                </p>
              </div>
              <div className="flex snap-x gap-5 overflow-x-auto pb-5">
                {project.images.map((image, index) => (
                  <figure
                    key={`${image.src}-${index}`}
                    className="min-w-[90%] snap-start border-2 border-neutral-950 bg-white shadow-offset-sm sm:min-w-[680px] lg:min-w-[860px] xl:min-w-[960px]"
                  >
                    <button
                      type="button"
                      onClick={(event) => {
                        previousFocusRef.current = event.currentTarget;
                        setSelectedImageIndex(index);
                      }}
                      className="group block w-full cursor-zoom-in bg-neutral-100 text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-950 focus-visible:ring-inset"
                      aria-label={`Open larger preview for ${image.caption}`}
                    >
                      <span className="relative block aspect-[16/9] overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                        />
                        <span className="absolute bottom-4 right-4 bg-neutral-950 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-white">
                          Open preview
                        </span>
                      </span>
                    </button>
                    <figcaption className="border-t-2 border-neutral-950 px-5 py-4 text-sm font-bold text-neutral-700">
                      {String(index + 1).padStart(2, "0")} / {project.images.length} - {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ) : null}

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

        {(project.decisions?.length || project.testing || project.challenges?.length) ? (
          <section className="px-5 pb-16 sm:px-8 lg:pb-24">
            <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
              {project.decisions?.length ? (
                <section className="border-2 border-neutral-950 bg-white p-6 lg:col-span-2">
                  <h2 className="text-2xl font-black text-neutral-950">Engineering Decisions</h2>
                  <div className="mt-5 grid gap-4">
                    {project.decisions.map((item) => (
                      <article key={item.decision} className="border border-neutral-200 p-4">
                        <h3 className="text-sm font-extrabold text-neutral-950">{item.decision}</h3>
                        <p className="mt-3 text-sm leading-7 text-neutral-600"><span className="font-bold text-neutral-950">Reason:</span> {item.reason}</p>
                        <p className="mt-2 text-sm leading-7 text-neutral-600"><span className="font-bold text-neutral-950">Trade-off:</span> {item.tradeOff}</p>
                      </article>
                    ))}
                  </div>
                </section>
              ) : null}

              {project.testing ? (
                <section className="border-2 border-neutral-950 bg-white p-6">
                  <h2 className="text-2xl font-black text-neutral-950">Testing & Validation</h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">{project.testing.scenario}</p>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{project.testing.environment}</p>
                  <ul className="mt-4 space-y-3">
                    {project.testing.metrics.map((metric) => (
                      <li key={metric} className="flex gap-3 text-sm leading-7 text-neutral-600">
                        <span className="mt-2 size-2 shrink-0 bg-neutral-950" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {project.challenges?.length ? (
                <section className="border-2 border-neutral-950 bg-white p-6 lg:col-span-3">
                  <h2 className="text-2xl font-black text-neutral-950">Challenges & Lessons Learned</h2>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {project.challenges.map((item) => (
                      <article key={item.challenge} className="border border-neutral-200 p-4">
                        <h3 className="text-sm font-extrabold text-neutral-950">{item.challenge}</h3>
                        <p className="mt-3 text-sm leading-7 text-neutral-600"><span className="font-bold text-neutral-950">Solution:</span> {item.solution}</p>
                        <p className="mt-2 text-sm leading-7 text-neutral-600"><span className="font-bold text-neutral-950">Lesson:</span> {item.lesson}</p>
                      </article>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>
          </section>
        ) : null}
      </main>
      <Footer />

      {selectedImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/85 px-4 py-6 backdrop-blur-sm sm:px-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-caption"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div
            ref={dialogRef}
            className="relative w-full max-w-6xl border-2 border-white bg-white shadow-[10px_10px_0_rgba(255,255,255,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              ref={closeButtonRef}
              onClick={() => setSelectedImageIndex(null)}
              className="motion-safe:active:translate-y-px absolute right-3 top-3 z-10 inline-flex size-11 items-center justify-center border-2 border-neutral-950 bg-white text-neutral-950 transition duration-200 hover:bg-neutral-950 hover:text-white"
              aria-label="Close image preview"
            >
              <CloseIcon className="size-5" />
            </button>
            <div className="flex items-center gap-2 bg-neutral-100 p-3 sm:gap-4 sm:p-4">
              <button
                type="button"
                onClick={() =>
                  setSelectedImageIndex(
                    getAdjacentImageIndex(selectedImageIndex ?? 0, project.images.length, "previous"),
                  )
                }
                className="motion-safe:active:translate-y-px inline-flex size-11 shrink-0 items-center justify-center border-2 border-neutral-950 bg-white text-neutral-950 transition duration-200 hover:bg-neutral-950 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                aria-label="Previous image"
              >
                <ArrowLeftIcon className="size-5" />
              </button>
              <div className="max-h-[78vh] min-w-0 flex-1 overflow-auto">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="h-auto w-full object-contain"
                  decoding="async"
                />
              </div>
              <button
                type="button"
                onClick={() =>
                  setSelectedImageIndex(
                    getAdjacentImageIndex(selectedImageIndex ?? 0, project.images.length, "next"),
                  )
                }
                className="motion-safe:active:translate-y-px inline-flex size-11 shrink-0 items-center justify-center border-2 border-neutral-950 bg-white text-neutral-950 transition duration-200 hover:bg-neutral-950 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                aria-label="Next image"
              >
                <ArrowRightIcon className="size-5" />
              </button>
            </div>
            <div className="border-t-2 border-neutral-950 bg-white px-5 py-4 pr-16">
              <p className="text-sm font-black text-neutral-950">
                {String(selectedImageNumber).padStart(2, "0")} / {project.images.length}
              </p>
              <p id="lightbox-caption" className="mt-1 text-sm font-bold text-neutral-600" aria-live="polite">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      ) : null}
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
