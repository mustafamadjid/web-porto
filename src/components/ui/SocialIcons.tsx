import { personalInfo } from "../../data/portfolio-data";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin-solid.svg";
import { MailIcon } from "./Icons";

const links = [
  { label: "GitHub", href: personalInfo.githubUrl, iconSrc: githubIcon },
  { label: "LinkedIn", href: personalInfo.linkedinUrl, iconSrc: linkedinIcon },
  { label: "Email", href: `mailto:${personalInfo.email}`, icon: MailIcon },
];

const SocialIcons = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map(({ label, href, icon: Icon, iconSrc }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="motion-safe:active:translate-y-px group grid size-11 place-items-center border border-neutral-950 bg-white text-neutral-950 transition duration-200 hover:bg-neutral-950 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
        >
          {iconSrc ? (
            <img src={iconSrc} alt="" className="size-5 transition group-hover:invert" aria-hidden="true" />
          ) : Icon ? (
            <Icon className="size-5" />
          ) : null}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
