import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

// Sample project data
const projectsData = [
    {
        id: 1,
        title: "Adaptive LMS",
        description: "Comprehensive Learning Management System with microservices architecture using Docker, featuring user management, content delivery, quiz functionality, and an API gateway with JWT authentication.",
        tags: ["Python", "Flask", "React", "Docker", "MongoDB", "Redis"],
        // demo: "#",
        source: "https://github.com/adityaapraveen/AdaptiveLearningMS"
      },
      {
        id: 2,
        title: "Twist-Tac-Toe",
        description: "Tic-Tac-Toe game with a twist mechanic allowing only three X's or O's on the board, eliminating draws. Features dynamic styling and animations with Framer Motion.",
        tags: ["React", "Vite", "Framer Motion", "Game"],
        demo: "https://twist-tac-toe.vercel.app/",
        source: "https://github.com/adityaapraveen/Twist-Tac-Toe"
      },
      {
        id: 3,
        title: "Freelance Project for a Exports Company",
        description: "Built a website for a Exports Company using React, Tailwind CSS, TypeScript, and Framer Motion.",
        tags: ["React", "Vite", "Framer Motion", "Game"],
        demo: "https://modernconceptsexports.com/",
        // source: "#"
      },
  {
    id: 4,
    title: "Summify",
    description: "YouTube Video Summarizer Extension built with Flask, using YouTube Transcript API and Google Gemini AI. Integrated Hugging Face for Q&A, translation, and summarization.",
    tags: ["Flask", "Python", "AI", "Chrome Extension"],
    // demo: "#",
    source: "https://github.com/adityaapraveen/Youtube-Video-Summarizer"
  },
  {
    id: 5,
    title: "PlantScanAI",
    description: "Plant Recognition and Detection System with 95.47% accuracy for identifying household plants, implementing reliable classification among 10 different plant classes.",
    tags: ["AI", "Computer Vision", "React", "Classification"],
    // demo: "#",
    source: "https://github.com/adityaapraveen/PlantRecognition"
  },
  
  
];

// Predefined filter categories based on the user's image
const predefinedTags = [
  'All', 'Flask', 'Python', 'AI', 'Chrome Extension', 'Crypto', 'Trading', 
  'Automation', 'Machine Learning', 'LSTM', 'Audio Processing', 
  'Computer Vision', 'React', 'Classification', 'Vite', 'Framer Motion', 
  'Game', 'Blockchain', 'Smart Contract', 'Education', 'Docker', 'MongoDB', 'Redis'
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
  const [selectedTag, setSelectedTag] = useState('All');
  
  // Filter projects by selected tag
  const filteredProjects = selectedTag === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(selectedTag));

  // Animation for filter button
  const buttonVariants = {
    normal: { scale: 1 },
    active: { 
      scale: 1.1,
      backgroundColor: "#1db954",
      color: "#fff",
      transition: { type: "spring", stiffness: 500, damping: 10 }
    },
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 500, damping: 10 }
    },
    tap: { scale: 0.95 }
  };
  
  return (
    <div className="projects-section">
      <motion.div 
        className="filter-buttons"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {predefinedTags.map(tag => (
          <motion.button
            key={tag}
            className={`filter-button ${selectedTag === tag ? 'active' : ''}`}
            onClick={() => setSelectedTag(tag)}
            variants={buttonVariants}
            initial="normal"
            animate={selectedTag === tag ? "active" : "normal"}
            whileHover="hover"
            whileTap="tap"
          >
            {tag}
          </motion.button>
        ))}
      </motion.div>
      
      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProjectsGrid; 