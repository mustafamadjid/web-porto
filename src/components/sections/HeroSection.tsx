import heroPhoto from "../../assets/images/hero-portrait.png";
import { personalInfo, trustIndicators } from "../../data/portfolio-data";
import { DownloadIcon, ExternalLinkIcon } from "../ui/Icons";
import Parallax from "../ui/Parallax";
import ScrollReveal from "../ui/ScrollReveal";

const HeroSection = () => {
  return (
    <section id="home" className="relative isolate overflow-hidden scroll-mt-24 px-5 py-16 sm:px-8 lg:py-24">
      <Parallax
        speed={-0.08}
        maxOffset={80}
        className="pointer-events-none absolute left-[6%] top-20 hidden h-24 w-24 border-2 border-neutral-950 bg-white/80 md:block"
      >
        <span className="block h-full w-full translate-x-3 translate-y-3 border-2 border-neutral-950" />
      </Parallax>
      <Parallax
        speed={0.12}
        maxOffset={110}
        className="pointer-events-none absolute bottom-12 right-[9%] hidden h-36 w-36 bg-neutral-950/95 md:block"
      >
        <span className="block h-full w-full -translate-x-3 -translate-y-3 border-2 border-neutral-950 bg-white" />
      </Parallax>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.92fr]">
        <ScrollReveal>
          <p className="text-lg font-semibold text-neutral-700">
            Athaullah Mustafa Madjid
          </p>
          <h1 className="mt-3 inline-block bg-neutral-950 px-4 py-2 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {personalInfo.heroHeadline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600">
            {personalInfo.heroCopy}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-500">
            {personalInfo.heroProof}
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {trustIndicators.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="bg-neutral-950 px-2 py-1 text-xs font-extrabold text-white">
                  {item.value}
                </span>
                <span className="text-sm font-semibold text-neutral-600">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="/#projects"
              className="motion-safe:active:translate-y-px inline-flex items-center gap-2 bg-neutral-950 px-6 py-4 font-bold text-white transition duration-200 hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-950 focus-visible:ring-offset-4"
            >
              View Selected Projects
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 text-sm font-extrabold text-neutral-950 underline decoration-2 underline-offset-4 transition duration-200 hover:text-neutral-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-950 focus-visible:ring-offset-4"
            >
              Download Resume
              <DownloadIcon className="size-4" />
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-neutral-950 underline decoration-2 underline-offset-4 transition duration-200 hover:text-neutral-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-950 focus-visible:ring-offset-4"
            >
              View GitHub
              <ExternalLinkIcon className="size-4" />
            </a>
          </div>
        </ScrollReveal>
        <div className="relative">
          <Parallax speed={0.18} maxOffset={130}>
            <img
              src={heroPhoto}
              alt="Athaullah Mustafa Madjid portrait"
              width={1200}
              height={1155}
              decoding="async"
              className="mx-auto aspect-[1200/1155] w-full max-w-xl rounded-[150px] object-contain drop-shadow-[18px_18px_0_#000000]"
              fetchPriority="high"
            />
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
