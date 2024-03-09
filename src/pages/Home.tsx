import ContactSection from "@/components/home/ContactSection";
import EducationSection from "@/components/home/EducationSection";
import ExpSection from "@/components/home/ExpSection";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import ProjectSection from "@/components/home/ProjectSection";
import SkillSection from "@/components/home/SkillSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <SkillSection />
      <ExpSection />
      <ProjectSection />
      <EducationSection />
      <ContactSection />
    </>
  );
};

export default Home;
