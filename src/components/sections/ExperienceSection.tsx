import { experiences } from "../../data/portfolio-data";
import ExperienceCard from "../ui/ExperienceCard";
import Parallax from "../ui/Parallax";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative isolate overflow-hidden scroll-mt-24 bg-neutral-950 px-5 py-16 sm:px-8 lg:py-24">
      <Parallax
        speed={-0.09}
        maxOffset={95}
        className="pointer-events-none absolute left-0 top-20 hidden h-64 w-28 border-y-2 border-r-2 border-white/25 md:block"
      >
        <span className="block h-full w-full translate-x-5 border-y-2 border-r-2 border-white/45" />
      </Parallax>
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionHeading title="My" highlight="Experience" tone="dark" />
        </ScrollReveal>
        <div className="relative mt-14 space-y-12">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-white/40 lg:left-1/2" aria-hidden="true" />
          {experiences.map((experience, index) => (
            <ScrollReveal key={`${experience.position}-${experience.period}`} delay={(index % 3) * 80}>
              <ExperienceCard
                index={index}
                total={experiences.length}
                {...experience}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
