import heroPhoto from "../../assets/images/Pas foto Non Bg.png";
import { personalInfo } from "../../data/portfolio-data";
import { DownloadIcon } from "../ui/Icons";
import Parallax from "../ui/Parallax";
import ScrollReveal from "../ui/ScrollReveal";
import SocialIcons from "../ui/SocialIcons";

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
          <p className="text-lg font-semibold text-neutral-700">Hello I'm</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            Athaullah Mustafa Madjid.
          </h1>
          <p className="mt-4 text-3xl font-light leading-tight text-neutral-950 sm:text-5xl">
            Backend{" "}
            <span className="inline-block bg-neutral-950 px-3 py-1 font-extrabold text-white">
              Developer
            </span>
          </p>
          <p className="mt-4 text-2xl font-light text-neutral-950 sm:text-4xl">
            Based in <span className="font-extrabold">Lampung, Indonesia.</span>
          </p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-600">
            {personalInfo.summary}
          </p>
          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 bg-neutral-950 px-6 py-4 font-bold text-white transition hover:bg-neutral-700"
            >
              Resume
              <DownloadIcon className="size-5" />
            </a>
            <SocialIcons />
          </div>
        </ScrollReveal>
        <div className="relative">
          <Parallax speed={0.18} maxOffset={130}>
            <img
              src={heroPhoto}
              alt="Athaullah Mustafa Madjid portrait"
              className="mx-auto w-full max-w-xl rounded-[150px] drop-shadow-[18px_18px_0_#000000]"
            />
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
