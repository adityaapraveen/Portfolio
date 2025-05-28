import React from 'react';
import { motion } from 'framer-motion';
import SplitText from '../animations/SplitText';
import DecryptedText from '../animations/DecryptText';
import BlurText from '../animations/BlurText';
import './HomeSection.css'
const HomeSection = () => {
  return (
    <section id="home">
      <div className="home-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="intro-text"
        >
          <h1 className="intro">
            <SplitText text="Hi, my name is" className="highlight" />
          </h1>
          <h1>
            <DecryptedText
              text="Aditya Praveen"
              speed={100}
              maxIterations={20}
              characters="ABCDEF1234!?"
              className="revealed"
              revealDirection="start"
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

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <motion.a
              href="#projects"
              className="primary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#resume"
              className="secondary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection; 