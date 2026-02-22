import React from 'react';
import MainLayout from './components/MainLayout';
import Hero from './components/Hero';
import Contributions from './components/Contributions';
import Experience from './components/Experience';
import SocialLinks from './components/SocialLinks';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <MainLayout>
      <Hero />
      <Contributions />
      <Experience />
      {/* <SocialLinks /> */}
      <Projects />
      <Footer />
    </MainLayout>
  );
}

export default App;
