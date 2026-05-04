import heroPhoto from "../../assets/images/Pas foto Non Bg.png";
import { personalInfo } from "../../data/portfolio-data";
import { DownloadIcon } from "../ui/Icons";
import SocialIcons from "../ui/SocialIcons";

const HeroSection = () => {
  return (
    <section id="home" className="scroll-mt-24 px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.92fr]">
        <div>
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
        </div>
        <div className="relative">
          <img
            src={heroPhoto}
            alt="Athaullah Mustafa Madjid portrait"
            className="mx-auto w-full max-w-xl rounded-[150px] drop-shadow-[18px_18px_0_#000000]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
