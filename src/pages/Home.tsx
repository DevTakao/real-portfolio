import ContactSection from "@/components/home/ContactSection";
import EducationSection from "@/components/home/EducationSection";
import ExpSection from "@/components/home/ExpSection";
import HeroSection from "@/components/home/HeroSection";
import QuoteSection from "@/components/home/QuoteSection";
import ProjectSection from "@/components/home/ProjectSection";
import SkillSection from "@/components/home/SkillSection";
import IntroSection from "@/components/home/IntroSection";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <QuoteSection />
      <IntroSection />
      <SkillSection />
      <ExpSection />
      <ProjectSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
};

export default Home;
