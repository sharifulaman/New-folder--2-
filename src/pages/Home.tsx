import Hero from "../components/home/Hero";
import StatsBar from "../components/home/StatsBar";
import About from "../components/home/About";
import ExpertiseGrid from "../components/home/ExpertiseGrid";
import FeaturedProjects from "../components/home/FeaturedProjects";
import CaseStudies from "../components/home/CaseStudies";
import ResultsMetrics from "../components/home/ResultsMetrics";
import Testimonials from "../components/home/Testimonials";
import SkillsExperience from "../components/home/SkillsExperience";
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
      <ResultsMetrics />
      <Testimonials />
      <SkillsExperience />
      <Contact />
      <FinalCTA />
    </>
  );
}
