import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Expertise } from './components/Expertise';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Expertise />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
