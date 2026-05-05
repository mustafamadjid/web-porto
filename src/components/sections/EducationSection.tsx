import { education, languages } from "../../data/portfolio-data";
import EducationCard from "../ui/EducationCard";
import Parallax from "../ui/Parallax";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

const EducationSection = () => {
  return (
    <section id="education" className="relative isolate overflow-hidden scroll-mt-24 bg-white px-5 py-16 sm:px-8 lg:py-24">
      <Parallax
        speed={-0.1}
        maxOffset={85}
        className="pointer-events-none absolute right-0 top-1/3 hidden h-56 w-20 border-y-2 border-l-2 border-neutral-950 md:block"
      >
        <span className="block h-full w-full -translate-x-4 border-y-2 border-l-2 border-neutral-950 bg-neutral-50" />
      </Parallax>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.42fr_1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <ScrollReveal>
              <SectionHeading title="My" highlight="Education" align="left" />
              <p className="mt-6 text-base leading-8 text-neutral-600">
                Academic foundation in informatics engineering, strengthened through assistantship roles, database practicums, and project-based software development.
              </p>
              <Parallax speed={0.08} maxOffset={55}>
                <div className="mt-8 bg-neutral-950 p-6 text-white shadow-[10px_10px_0_#d4d4d4]">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">Current Focus</p>
                  <p className="mt-4 text-2xl font-extrabold leading-tight">Backend systems, relational databases, and full-stack delivery.</p>
                </div>
              </Parallax>
            </ScrollReveal>
          </div>

          <div>
            <div className="relative space-y-8 pl-10 md:pl-16">
              <div className="absolute bottom-4 left-4 top-4 w-px bg-neutral-950 md:left-5" aria-hidden="true" />
              {education.map((item, index) => (
                <ScrollReveal key={item.school} delay={(index % 3) * 90}>
                  <EducationCard index={index} {...item} />
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={160}>
              <div className="mt-12 grid gap-4 border-2 border-neutral-950 bg-neutral-50 p-6 sm:grid-cols-[0.35fr_1fr] sm:items-center">
                <h3 className="text-xl font-extrabold text-neutral-950">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {languages.map((language) => (
                    <span key={language} className="bg-neutral-950 px-4 py-2 text-sm font-semibold text-white">
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
