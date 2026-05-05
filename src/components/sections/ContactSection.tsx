import { personalInfo } from "../../data/portfolio-data";
import { MailIcon, MapPinIcon, PhoneIcon } from "../ui/Icons";
import Parallax from "../ui/Parallax";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import SocialIcons from "../ui/SocialIcons";

const contacts = [
  { label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: MailIcon },
  { label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}`, icon: PhoneIcon },
  { label: "Location", value: personalInfo.location, href: "#home", icon: MapPinIcon },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-parallax-grid relative isolate overflow-hidden scroll-mt-24 px-5 py-16 sm:px-8 lg:py-24">
      <Parallax
        speed={0.11}
        maxOffset={90}
        className="pointer-events-none absolute bottom-8 right-[12%] hidden h-28 w-28 border-2 border-neutral-950 bg-white md:block"
      >
        <span className="block h-full w-full translate-x-3 translate-y-3 bg-neutral-950" />
      </Parallax>
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <ScrollReveal>
          <SectionHeading title="Contact" highlight="Me" align="left" />
          <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600">
            Open to backend development, full-stack collaboration, internship opportunities, and student-focused technical initiatives.
          </p>
          <div className="mt-8">
            <SocialIcons />
          </div>
        </ScrollReveal>
        <div className="grid gap-4">
          {contacts.map(({ label, value, href, icon: Icon }, index) => (
            <ScrollReveal key={label} delay={index * 80}>
              <a href={href} className="flex items-center gap-5 border-2 border-neutral-950 bg-white p-5 transition hover:bg-neutral-950 hover:text-white">
                <span className="grid size-12 shrink-0 place-items-center border border-current">
                  <Icon className="size-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-neutral-500">{label}</span>
                  <span className="mt-1 block break-all text-base font-bold">{value}</span>
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
