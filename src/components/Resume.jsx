import React from 'react';
import { motion } from 'framer-motion';

// Sample resume data - you can replace with your actual content
const resumeData = {
  name: "Aditya Praveen",
  title: "Full Stack Developer",
  contact: {
    email: "adityaapraveen18@gmail.com",
    github: "github.com/adityaapraveen",
    linkedin: "linkedin.com/in/adityaapraveen"
  },
  education: [
    {
      degree: "Computer Science",
      institution: "RV University",
      year: "2022-2026"
    }
  ],
  skills: [
    "React", "JavaScript", "Python", "Blockchain",
    "Typescript", "Next.js", "Tailwind CSS", "Node.js", "Go", 
    "Express.js", "MongoDB", "SQL", "Git", "Docker", "AWS"
  ],
  experience: [
    {
      role: "Front-End Dev Intern",
      company: "Shaale",
      period: "Feb 2024 - June 2024",
      description: "Designed a dynamic user interface for artist profiles, increasing engagement. Developed secure backend integrations for artist-user interactions, leading to a rise in connections."
    },
    {
      role: "Research Assistant",
      company: "Center of Blockchain, RV University",
      period: "July 2024 - Present",
      description: "Conducted research on preventing deepfakes in blockchain systems by focusing on detection and mitigation techniques before immutability."
    }
  ]
};

// Animation variants for sections
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const Resume = () => {
  // Function to download resume as PDF
  const downloadResume = () => {
    // This is a placeholder - in a real implementation, you'd generate a PDF
    // For now, we'll create a simple text version of the resume as a download
    const resumeText = `
      ${resumeData.name}
      ${resumeData.title}
      
      Contact:
      Email: ${resumeData.contact.email}
      GitHub: ${resumeData.contact.github}
      LinkedIn: ${resumeData.contact.linkedin}
      
      Education:
      ${resumeData.education.map(edu => `${edu.degree} - ${edu.institution} (${edu.year})`).join('\n')}
      
      Skills:
      ${resumeData.skills.join(', ')}
      
      Experience:
      ${resumeData.experience.map(exp => 
        `${exp.role} at ${exp.company} (${exp.period})\n${exp.description}`
      ).join('\n\n')}
    `;
    
    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'ResumeN.pdf';
    link.href = url;
    link.click();
  };

  return (
    <div className="resume-container">
      <motion.div 
        className="resume-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>{resumeData.name}</h1>
        <h2>{resumeData.title}</h2>
        <motion.button 
          className="download-button"
          onClick={downloadResume}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.button>
      </motion.div>

      <motion.div 
        className="resume-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="resume-section" variants={itemVariants}>
          <h3>Contact</h3>
          <ul>
            <li>Email: {resumeData.contact.email}</li>
            <li>GitHub: {resumeData.contact.github}</li>
            <li>LinkedIn: {resumeData.contact.linkedin}</li>
          </ul>
        </motion.div>

        <motion.div className="resume-section" variants={itemVariants}>
          <h3>Education</h3>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="education-item">
              <h4>{edu.degree}</h4>
              <p>{edu.institution}, {edu.year}</p>
            </div>
          ))}
        </motion.div>

        <motion.div className="resume-section" variants={itemVariants}>
          <h3>Skills</h3>
          <div className="skills-container">
            {resumeData.skills.map((skill, index) => (
              <motion.span 
                key={index} 
                className="skill-tag"
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div className="resume-section" variants={itemVariants}>
          <h3>Experience</h3>
          {resumeData.experience.map((exp, index) => (
            <motion.div 
              key={index} 
              className="experience-item"
              whileHover={{ x: 5 }}
            >
              <h4>{exp.role}</h4>
              <h5>{exp.company} | {exp.period}</h5>
              <p>{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Resume; 