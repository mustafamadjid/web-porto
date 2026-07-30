import { engineeringPractices, skillCategories, skills } from "../../data/portfolio-data";
import Parallax from "../ui/Parallax";
import ScrollReveal from "../ui/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import SkillCard from "../ui/SkillCard";

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
          <SectionHeading title="Technical" highlight="Focus" />
          <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-600">
            Backend engineering is the core. Tools are grouped by depth of use and proven delivery across projects.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={(index % 6) * 55}>
              <SkillCard {...skill} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 90}>
              <div className="h-full border-2 border-neutral-950 bg-white p-6 shadow-[10px_10px_0_#111111]">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-neutral-500">
                  {category.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="border border-neutral-950 bg-white px-3 py-1 text-sm font-semibold text-neutral-950"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-12 border-2 border-neutral-950 bg-white p-6">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-neutral-500">
              Engineering Practices
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {engineeringPractices.map((practice) => (
                <span
                  key={practice}
                  className="bg-neutral-950 px-4 py-2 text-sm font-semibold text-white"
                >
                  {practice}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;