import { useEffect } from "react";

import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import EducationSection from "../components/sections/EducationSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";

const Home = () => {
  useEffect(() => {
    document.title = "Athaullah Mustafa Madjid | Backend Software Engineer";
  }, []);

  return (
    <div className="parallax-page min-h-screen text-neutral-950">
      <Navbar />
      <main id="main" tabIndex={-1}>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
