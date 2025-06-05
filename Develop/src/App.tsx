import { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  // Section: 'about', 'portfolio', 'contact', 'resume'
  const [section, setSection] = useState<'about' | 'portfolio' | 'contact' | 'resume'>('about');

  return (
    <div className="app-container">
      <Header section={section} setSection={setSection} />
      <main>
        {section === 'about' && <AboutMe />}
        {section === 'portfolio' && <Portfolio />}
        {section === 'contact' && <Contact />}
        {section === 'resume' && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
