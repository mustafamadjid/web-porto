import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { navItems, personalInfo } from "../../data/portfolio-data";
import { CloseIcon, DownloadIcon, MenuIcon } from "../ui/Icons";

const Navbar = () => {
  const { hash, pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(hash.replace("#", "") || "home");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const visibleActiveSection = pathname === "/" ? activeSection : "";

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (pathname !== "/" || !("IntersectionObserver" in window)) {
      return;
    }

    const sections = navItems
      .map((item) => document.getElementById(item.href.split("#")[1]))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    firstMenuLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="/#home" className="flex items-center gap-3 font-extrabold text-neutral-950" onClick={closeMenu}>
          <span className="grid size-10 place-items-center bg-neutral-950 text-white">M</span>
          <span className="hidden sm:inline">{personalInfo.shortName}</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const sectionId = item.href.split("#")[1];
            const isActive = visibleActiveSection === sectionId;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={`text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-950 focus-visible:ring-offset-4 ${isActive ? "text-neutral-950 underline decoration-2 underline-offset-8" : "text-neutral-700 hover:text-neutral-950"}`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <a
          href={personalInfo.resumeUrl}
          download
          className="motion-safe:active:translate-y-px hidden items-center gap-2 bg-neutral-950 px-5 py-3 text-sm font-bold text-white transition duration-200 hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-950 focus-visible:ring-offset-4 lg:flex"
        >
          Resume
          <DownloadIcon className="size-4" />
        </a>

        <button
          type="button"
          ref={menuButtonRef}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          className="grid size-11 place-items-center border border-neutral-950 text-neutral-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-950 focus-visible:ring-offset-4 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-neutral-200 bg-white px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                ref={index === 0 ? firstMenuLinkRef : undefined}
                href={item.href}
                aria-current={visibleActiveSection === item.href.split("#")[1] ? "location" : undefined}
                className="py-2 text-base font-semibold text-neutral-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-950 focus-visible:ring-offset-4"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a href={personalInfo.resumeUrl} download className="motion-safe:active:translate-y-px mt-2 inline-flex items-center justify-center gap-2 bg-neutral-950 px-5 py-3 font-bold text-white transition duration-200 hover:bg-neutral-700" onClick={closeMenu}>
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
