import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Skills from './Skills/Skills'; 
import Projects from './Projects/Projects';
import About from './About/About';
import Certifications from './Certifications/Certifications';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import '../GlobalT1.css'
import '../T1.css'
function Tempalte1(card) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  return (
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <button className="mode-toggle" onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
        <Header />
        <Hero card={card} />
        <Skills />
        <Projects />
        <About />
        {/* <Certifications /> */}
        <Contact />
        <Footer />
      </div>
  );
}

export default Tempalte1;
