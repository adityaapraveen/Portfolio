import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  },
  hover: {
    y: -10,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30
    }
  }
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30
    }
  },
  hover: {
    scale: 1.05,
    backgroundColor: "#0ca745",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 10
    }
  },
  tap: { scale: 0.95 }
};

// Microservices for Adaptive LMS project
const microservices = [
  { name: "API Gateway", description: "Handles requests, auth, and routing", color: "#1db954" },
  { name: "User Service", description: "Manages user registration and profiles", color: "#4285F4" },
  { name: "Content Service", description: "Manages learning content", color: "#FBBC05" },
  { name: "Quiz Service", description: "Manages quizzes and submissions", color: "#EA4335" },
  { name: "Quiz Worker", description: "Background grading tasks", color: "#34A853" }
];

const microServiceVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  }),
  hover: {
    y: -5,
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30
    }
  }
};

const ProjectCard = ({ project }) => {
  const [showMicroservices, setShowMicroservices] = useState(false);
  const isAdaptiveLMS = project.id === 7;

  return (
    <motion.div
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      layoutId={`project-card-${project.id}`}
    >
      {project.image && (
        <motion.div 
          className="project-image-container"
          layoutId={`project-image-${project.id}`}
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="project-image"
          />
        </motion.div>
      )}
      
      <motion.div 
        className="project-content"
        variants={contentVariants}
        layoutId={`project-content-${project.id}`}
      >
        <motion.h3 
          className="project-title"
          layoutId={`project-title-${project.id}`}
        >
          {project.title}
        </motion.h3>
        
        <motion.div 
          className="project-tags"
          layoutId={`project-tags-${project.id}`}
        >
          {project.tags && project.tags.map((tag, index) => (
            <motion.span 
              key={index} 
              className="project-tag"
              whileHover={{ scale: 1.1, backgroundColor: "#1db954" }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.p 
          className="project-description"
          layoutId={`project-description-${project.id}`}
        >
          {project.description}
        </motion.p>
        
        {isAdaptiveLMS && (
          <motion.div 
            className="architecture-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className="architecture-toggle"
              onClick={() => setShowMicroservices(!showMicroservices)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showMicroservices ? "Hide Architecture" : "View Microservices"}
            </motion.button>
            
            <AnimatePresence>
              {showMicroservices && (
                <motion.div 
                  className="microservices-container"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {microservices.map((service, i) => (
                    <motion.div
                      key={service.name}
                      className="microservice-item"
                      custom={i}
                      variants={microServiceVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      style={{ borderLeftColor: service.color }}
                    >
                      <span className="microservice-name">{service.name}</span>
                      <span className="microservice-description">{service.description}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
        
        <motion.div 
          className="project-buttons"
          layoutId={`project-buttons-${project.id}`}
        >
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button demo-button"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Live Demo
            </motion.a>
          )}
          
          {project.source && (
            <motion.a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button source-button"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Source Code
            </motion.a>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard; 