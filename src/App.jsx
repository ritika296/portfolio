import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import WorkingWith from './sections/WorkingWith';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Pipeline from './sections/Pipeline';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Resume from './sections/Resume';
import GithubSection from './sections/GithubSection';
import Contact from './sections/Contact';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <WorkingWith />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Pipeline />
        <Education />
        <Certifications />
        <Resume />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
