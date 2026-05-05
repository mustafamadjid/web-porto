import { capabilities, skills } from "../../data/portfolio-data";
import Parallax from "../ui/Parallax";
import SectionHeading from "../ui/SectionHeading";
import SkillCard from "../ui/SkillCard";
import ScrollReveal from "../ui/ScrollReveal";

const SkillsSection = () => {
  return (
    <section id="skills" className="relative isolate overflow-hidden scroll-mt-24 bg-neutral-50 px-5 py-16 sm:px-8 lg:py-24">
      <Parallax
        speed={0.1}
        maxOffset={90}
        className="pointer-events-none absolute -right-12 top-10 hidden h-44 w-44 border-2 border-neutral-950 md:block"
      >
        <span className="block h-full w-full translate-x-5 translate-y-5 bg-neutral-950" />
      </Parallax>

      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionHeading title="My" highlight="Skills" />
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={(index % 6) * 55}>
              <SkillCard {...skill} />
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={180}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {capabilities.map((capability) => (
              <span key={capability} className="bg-neutral-950 px-4 py-2 text-sm font-semibold text-white">
                {capability}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
