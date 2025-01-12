import React from 'react';
import './App.css';
import SplitText from './animations/SplitText'; // Import SplitText component
import DecryptedText from './animations/DecryptText'
import BlurText from './animations/BlurText'
import Hyperspeed from './animations/Hyperspeed';
import Squares from './animations/Squares';
import ScrollLinked from './animations/ScrollLinked';
import Timeline from './animations/Timeline';
import { useState } from 'react';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      
      {/* Render the Squares background */}
      {/* <Squares 
        speed={0.5} 
        squareSize={40}
        direction='diagonal' // Can be up, down, left, right, diagonal
        borderColor='#fff'
        hoverFillColor='#222'
      /> */}
      <header className="App-header">
        <nav>
          {/* Hamburger icon */}
          <button className="navbar-toggle" onClick={toggleNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={isOpen ? 'show' : ''}>
            <li><a href="#home">Home</a></li>
            <li><a href="#whoami">Whoami</a></li>
            <li><a href="#experience">XP</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <ScrollLinked />
      <section id="home">
        <h1 className='intro'>
          <SplitText text="Hi, my name is" className="highlight" />
        </h1>
        <h1>
          <DecryptedText
            text="Aditya Praveen"
            speed={100}
            maxIterations={20}
            characters="ABCDEF1234!?"
            className="revealed"
            revealDirection='start'
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
        </h1>
        <h3>
          <BlurText
            text="Welcome To My Portfolio!"
            delay={200}
            animateBy="words"
            direction="bottom"
            className="text-2xl mb-8"
          />
        </h3>
      </section>

      <section id="whoami">
        <h2>
          <SplitText text="About Me" />
        </h2>
        <p>Hi, I'm a college student studying computer science, spending most of my time coding and working on fun weekend projects. When I’m not wrangling with code, you’ll find me behind a camera exploring photography—or recently, videography, which has been an exciting new challenge. I also enjoy playing chess when I need a mental reset. On top of all that, I’m a huge fan of movies and shows, so if I’m not building something or taking photos, I’m probably lost in the world of cinema.
</p>
      </section>
      <section id="experience">
        <h2>
          <SplitText text="Experience" />
        </h2>
        <p></p>
        {/* <Timeline /> */}
        <div className="experience-section">
      <div className="book">
        <p>Designed a dynamic user interface for artist profiles, increasing engagement.
Developed secure backend integrations for artist-user interactions, leading to a rise in connections.</p>
        <div className="cover">
          <p>Shaale</p>
          <p>Front-End Dev Intern</p>
          <p className="dates">Feb 2024 - June 2024</p> {/* Dates on a new line */}
        </div>
      </div>
      <div className="book">
        <p>Conducted research on preventing deepfakes in blockchain systems by focusing on detection and
mitigation techniques before immutability</p>
        <div className="cover">
          <p>Center of Blockchain, RV University</p>
          <p className="dates">July 2024 - Present</p> {/* Dates on a new line */}
        </div>
      </div>
    </div>
      </section>

      <section id="projects">
        <h2>
          <SplitText text="Projects" />
        </h2>
        <p>[Project descriptions]</p>
      </section>

      <section id="gallery">
        <h2>
          <SplitText text="Gallery" />
        </h2>
        <p>[Image placeholders]</p>
      </section>

      <section id="contact">
        <h2>
          <SplitText text="Contact" />
        </h2>
        <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <p>[Social media links]</p>
      </section>

      <footer>
        <p>Created by <span className="highlight">[Your Name]</span>. Powered by React.</p>
      </footer>
    </div>
    
  );
}

export default App;