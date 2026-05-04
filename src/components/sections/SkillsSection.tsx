import { capabilities, skills } from "../../data/portfolio-data";
import SectionHeading from "../ui/SectionHeading";
import SkillCard from "../ui/SkillCard";

const SkillsSection = () => {
  return (
    <section id="skills" className="scroll-mt-24 bg-neutral-50 px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="My" highlight="Skills" />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {capabilities.map((capability) => (
            <span key={capability} className="bg-neutral-950 px-4 py-2 text-sm font-semibold text-white">
              {capability}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
