import aboutIllustration from "../../assets/images/About me.png";
import { education, personalInfo } from "../../data/portfolio-data";
import SectionHeading from "../ui/SectionHeading";

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div>
          <img src={aboutIllustration} alt="Backend development workspace" className="w-full" loading="lazy" />
        </div>
        <div>
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
