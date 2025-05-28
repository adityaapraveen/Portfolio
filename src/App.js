import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './App.css';
import './components/styles.css';
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';
import SplitText from './animations/SplitText';
import ScrollLinked from './animations/ScrollLinked';
import ContactMe from './animations/ContactMe';

import AnimatedNavbar from './components/AnimatedNavbar';
import ProjectsGrid from './components/ProjectsGrid';
import AnimatedGallery from './components/AnimatedGallery';
import AnimatedContact from './components/AnimatedContact';
import Resume from './components/Resume';
import ParticleBackground from './components/ParticleBackground';
import HomeSection from './components/HomeSection';

function App() {
  const items = [
    { id: 'home', icon: <VscHome /> },
    { id: 'whoami', icon: <VscAccount /> },
    { id: 'projects', icon: <VscArchive /> },
    { id: 'gallery', icon: <VscSettingsGear /> },
  ];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Scroll to section when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Handle initial load with hash
    if (window.location.hash) {
      setTimeout(handleHashChange, 500);
    }
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="App">
      {/* Background particle effect */}
      <ParticleBackground />
      
      {/* Progress bar */}
      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: "#1db954",
          zIndex: 1001,
        }}
      />
      
      {/* Navbar */}
      <AnimatedNavbar />
   
      

      {/* Home section */}
      <HomeSection />

      {/* About section */}
      <section id="whoami">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            <SplitText text="About Me" />
          </h2>
          <div className="about-container">
            <div className="about-text">
              <p className="whoamitext">
                Hi, I'm a college student studying computer science, spending most of my time coding and working on fun weekend projects. I'm into blockchain and web development and consider myself a generalist. 
              </p>
              <p className="whoamitext">
                When I'm not wrangling with code, you'll find me behind a camera exploring photography—or recently, videography, which has been an exciting new challenge. I also enjoy playing chess when I need a mental reset.
              </p>
              <p className="whoamitext">
                On top of all that, I'm a huge fan of movies and shows, so if I'm not building something or taking photos, I'm probably lost in the world of cinema.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience section */}
      <section id="experience">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            <SplitText text="Experience" />
          </h2>
          <div className="experience-section">
            <motion.div 
              className="experience-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0px 15px 30px rgba(29, 185, 84, 0.2)"
              }}
            >
              <div className="experience-card-header">
                <h3>Front-End Dev Intern</h3>
                <div className="company-badge">
                  <span>Shaale</span>
                </div>
              </div>
              <div className="experience-card-period">Feb 2024 - June 2024</div>
              <div className="experience-card-content">
                <p>Designed a dynamic user interface for artist profiles, increasing engagement. Developed secure backend integrations for artist-user interactions, leading to a rise in connections.</p>
              </div>
              <div className="experience-card-skills">
                <span className="skill-chip">UI Design</span>
                <span className="skill-chip">Frontend</span>
                <span className="skill-chip">Integration</span>
              </div>
            </motion.div>

            <motion.div 
              className="experience-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0px 15px 30px rgba(29, 185, 84, 0.2)"
              }}
            >
              <div className="experience-card-header">
                <h3>Research Assistant</h3>
                <div className="company-badge">
                  <span>Center of Blockchain, RV University</span>
                </div>
              </div>
              <div className="experience-card-period">July 2024 - Present</div>
              <div className="experience-card-content">
                <p>Conducting research on preventing deepfakes in blockchain systems by focusing on detection and mitigation techniques before immutability.</p>
              </div>
              <div className="experience-card-skills">
                <span className="skill-chip">Blockchain</span>
                <span className="skill-chip">Research</span>
                <span className="skill-chip">Security</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects section */}
      <section id="projects">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            <SplitText text="Projects" />
          </h2>
          <ProjectsGrid />
        </motion.div>
      </section>

      {/* Resume section */}
      <section id="resume">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            <SplitText text="Resume" />
          </h2>
          <Resume />
        </motion.div>
      </section>

      {/* Gallery section */}
      <section id="gallery">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            <SplitText text="Gallery" />
          </h2>
          <AnimatedGallery />
        </motion.div>
      </section>

      {/* Contact section */}
      <section id="contact">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            <SplitText text="Contact" />
          </h2>
          <AnimatedContact />
        </motion.div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <p className="footer-text">Created by <span className="highlight">Aditya Praveen</span>. Powered by React.</p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            &copy; {new Date().getFullYear()} All Rights Reserved
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

export default App;