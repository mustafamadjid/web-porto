import { navItems, personalInfo } from "../../data/portfolio-data";
import SocialIcons from "../ui/SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 px-5 py-10 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="/#home" className="flex items-center gap-3 font-extrabold">
            <span className="grid size-10 place-items-center bg-white text-neutral-950">
              M
            </span>
            <span>{personalInfo.shortName}</span>
          </a>
          <p className="mt-4 text-sm text-neutral-400">
            Copyright 2026 Athaullah Mustafa Madjid. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-neutral-300">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
        <div className="footer-social">
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
