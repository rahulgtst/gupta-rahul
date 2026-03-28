
import Intro from "../components/sections/intro/Intro.tsx";
import About from "../components/sections/about/About.tsx";
import Experience from "../components/sections/experience/Experience.tsx";
import Projects from "../components/sections/projects/Projects.tsx";
import Skills from "../components/sections/skills/Skills.tsx";
import CtaSection from "../components/sections/cta/CtaSection.tsx";
import Footer from "../components/common/footer/Footer.tsx";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop.tsx";

const Home = () => {
  return (
    <div className="min-h-screen bg-surface">
      <main>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <CtaSection />
        <Footer />
        <ScrollToTop />
      </main>
    </div>
  );
};

export default Home;
