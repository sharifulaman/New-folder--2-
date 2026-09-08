import Hero from "../components/home/Hero";
import StatsBar from "../components/home/StatsBar";
import About from "../components/home/About";
import ExpertiseGrid from "../components/home/ExpertiseGrid";
import FeaturedProjects from "../components/home/FeaturedProjects";
import CaseStudies from "../components/home/CaseStudies";
import SkillsExperience from "../components/home/SkillsExperience";
import Qualifications from "../components/home/Qualifications";
import Contact from "../components/home/Contact";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <About />
      <ExpertiseGrid />
      <FeaturedProjects />
      <CaseStudies />
      <SkillsExperience />
      <Qualifications />
      <Contact />
      <FinalCTA />
    </>
  );
}
