import About from "./About";
import Contact from "./Contact";
import HeroSection from "./HeroSection";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Skills />
      <Projects />
      <About text="MERN Stack Developer" />
      <Contact />
    </>
  );
};

export default Home;
