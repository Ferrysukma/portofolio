import AboutView from "../components/views/Home/About";
import CareerView from "../components/views/Home/Career";
import HeroView from "../components/views/Home/Hero";
import ProjectView from "../components/views/Home/Project";
import SkillsView from "../components/views/Home/Skills";

export default function Home() {
  return (
    <>
      <HeroView />
      <CareerView />
      <ProjectView />
      <SkillsView />
      <AboutView />
    </>
  );
}
