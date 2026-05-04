import { experiences } from "../../data/portfolio-data";
import ExperienceCard from "../ui/ExperienceCard";
import SectionHeading from "../ui/SectionHeading";

const ExperienceSection = () => {
  return (
    <section id="experience" className="scroll-mt-24 bg-neutral-950 px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="My" highlight="Experience" tone="dark" />
        <div className="relative mt-14 space-y-12">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-white/40 lg:left-1/2" aria-hidden="true" />
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.position}-${experience.period}`}
              index={index}
              total={experiences.length}
              {...experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
