import { useState } from "react";
import { navItems, personalInfo } from "../../data/portfolio-data";
import { CloseIcon, DownloadIcon, MenuIcon } from "../ui/Icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-3 font-extrabold text-neutral-950" onClick={closeMenu}>
          <span className="grid size-10 place-items-center bg-neutral-950 text-white">M</span>
          <span>{personalInfo.shortName}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-neutral-700 transition hover:text-neutral-950">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={personalInfo.resumeUrl}
          download
          className="hidden items-center gap-2 bg-neutral-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-neutral-700 md:flex"
        >
          Resume
          <DownloadIcon className="size-4" />
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          className="grid size-11 place-items-center border border-neutral-950 text-neutral-950 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-neutral-200 bg-white px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="py-2 text-base font-semibold text-neutral-800" onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a href={personalInfo.resumeUrl} download className="mt-2 inline-flex items-center justify-center gap-2 bg-neutral-950 px-5 py-3 font-bold text-white" onClick={closeMenu}>
              Resume
              <DownloadIcon className="size-4" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
