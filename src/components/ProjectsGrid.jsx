import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

// Sample project data
const projectsData = [
    {
        id: 1,
        title: "Adaptive LMS",
        description: "Comprehensive Learning Management System with microservices architecture using Docker, featuring user management, content delivery, quiz functionality, and an API gateway with JWT authentication.",
        // demo: "#",
        source: "https://github.com/adityaapraveen/AdaptiveLearningMS"
      },
      {
        id: 2,
        title: "Twist-Tac-Toe",
        description: "Tic-Tac-Toe game with a twist mechanic allowing only three X's or O's on the board, eliminating draws. Features dynamic styling and animations with Framer Motion.",
        demo: "https://twist-tac-toe.vercel.app/",
        source: "https://github.com/adityaapraveen/Twist-Tac-Toe"
      },
      {
        id: 3,
        title: "Freelance Project for a Exports Company",
        description: "Built a website for a Exports Company using React, Tailwind CSS, TypeScript, and Framer Motion.",
        demo: "https://modernconceptsexports.com/",
        
      },
  {
    id: 4,
    title: "Summify",
    description: "YouTube Video Summarizer Extension built with Flask, using YouTube Transcript API and Google Gemini AI. Integrated Hugging Face for Q&A, translation, and summarization.",
    // demo: "#",
    source: "https://github.com/adityaapraveen/Youtube-Video-Summarizer"
  },
  {
    id: 5,
    title: "PlantScanAI",
    description: "Plant Recognition and Detection System with 95.47% accuracy for identifying household plants, implementing reliable classification among 10 different plant classes.",
    // demo: "#",
    source: "https://github.com/adityaapraveen/PlantRecognition"
  },
  
  
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ProjectsGrid = () => {
  return (
    <div className="projects-section">
      
      
      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProjectsGrid; 