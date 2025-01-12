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
        <p className='whoamitext'>Hi, I'm a college student studying computer science, spending most of my time coding and working on fun weekend projects. I'm into blockchain and web development and consider myself a generalist. When I’m not wrangling with code, you’ll find me behind a camera exploring photography—or recently, videography, which has been an exciting new challenge. I also enjoy playing chess when I need a mental reset. On top of all that, I’m a huge fan of movies and shows, so if I'm not building something or taking photos, I'm probably lost in the world of cinema.
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
        <div class="cards">
          <div class="card">
            <h3>Summify</h3>
            <div class="card__content">
              <p class="card__title">YouTube Video Summarizer Extension</p>
              <p class="card__description">Built a Flask web extension for YouTube video summaries using YouTube Transcript API and Google Gemini AI. Integrated Hugging Face for Q&A (interactive), translation, and summarization.</p>
              <button class="card__button">Live Demo</button>
              <button class="card__button secondary">Source Code</button>
            </div>
          </div>

          <div class="card">
            <h3>TradeBot</h3>
            <div class="card__content">
              <p class="card__title">Crypto EMA Strategy Trading Bot</p>
              <p class="card__description">Automated trading bot using Python and CCXT library, achieving an average monthly ROI of 12%.
- Handled over 500 trades with a win rate of 60%. </p>
              <button class="card__button">Live Demo</button>
              <button class="card__button secondary">Source Code</button>
            </div>
          </div>

          <div class="card">
            <h3>EmotionAI</h3>
            <div class="card__content">
              <p class="card__title">Speech Emotion Recognition</p>
              <p class="card__description">Developed an LSTM model with an accuracy of 85% on the TESS dataset for emotion classification.
- Processed over 1,200 audio samples with real-time emotion detection.</p>
              <button class="card__button">Live Demo</button>
              <button class="card__button secondary">Source Code</button>
            </div>
          </div>

          <div class="card">
            <h3>PlantScanAI</h3>
            <div class="card__content">
              <p class="card__title">Plant Recognition and Detection System</p>
              <p class="card__description">Built a machine learning model with an accuracy of 95.47% for identifying and detecting household plants.
Implemented reliable classification among 10 different plant classes.
Integrated the model into a React app for real-time camera-based recognition.</p>
              <button class="card__button">Live Demo</button>
              <button class="card__button secondary">Source Code</button>
            </div>
          </div>

          <div class="card">
            <h3>Tic-Tac-Toe with a TWIST</h3>
            <div class="card__content">
              <p class="card__title">Twist-Tac-Toe</p>
              <p class="card__description">This Tic-Tac-Toe game, built with React and Vite, features a twist mechanic with only three X’s
or O’s on the board, <b>eliminating draws.</b> It includes dynamic styling, player turn indicators, and animations using
Framer Motion.</p>
              <button class="card__button">Live Demo</button>
              <button class="card__button secondary">Source Code</button>
            </div>
          </div>

          <div class="card">
            <h3>EduCore</h3>
            <div class="card__content">
              <p class="card__title">Student Information System</p>
              <p class="card__description">The Student Information System smart contract on Sepolia manages student
records, enrollment, attendance, and grades, with updates controlled by the owner and payment. It uses mappings
for storage and event logging for transparency.</p>
              <button class="card__button">Live Demo</button>
              <button class="card__button secondary">Source Code</button>
            </div>
          </div>
        </div>
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
        <p>Email: <a href="mailto:adityapraveen18@gmail.com">adityapraveen18@gmail.com</a></p>
        
      </section>


      <footer>
        <p>Created by <span className="highlight">Aditya Praveen</span>. Powered by React.</p>
      </footer>
    </div>
    
  );
}

export default App;