import aboutIllustration from "../../assets/images/About me.png";
import { education, personalInfo } from "../../data/portfolio-data";
import Parallax from "../ui/Parallax";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="section-parallax-grid relative isolate scroll-mt-24 px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <Parallax speed={-0.12} maxOffset={95} className="relative">
          <div className="absolute -left-4 top-10 h-28 w-28 border-2 border-neutral-950 bg-white" aria-hidden="true" />
          <img
            src={aboutIllustration}
            alt="Backend development workspace"
            className="relative w-full"
            loading="lazy"
          />
        </Parallax>
        <ScrollReveal delay={120}>
          <SectionHeading title="About" highlight="Me" align="left" />
          <div className="mt-8 space-y-5 text-base leading-8 text-neutral-600">
            <p>{personalInfo.about}</p>
            <p>
              Currently studying {education[0].degree} at {education[0].school}, I focus on backend development, database systems, and practical full-stack delivery.
            </p>
            <p>
              Outside implementation work, I have supported students as a practicum assistant, lecturer assistant, and education mentor, sharpening both my technical communication and team leadership.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
