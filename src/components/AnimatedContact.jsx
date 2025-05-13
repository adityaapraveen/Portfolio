import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedContact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // In a real app, you would send the form data to a server here
      console.log('Form submitted:', formState);
      setSubmitting(false);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
      backgroundColor: "#1db954",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 10
      }
    },
    tap: { scale: 0.95 },
    submitting: {
      backgroundColor: "#cccccc",
      color: "#666666",
      cursor: "not-allowed",
      transition: {
        duration: 0.2
      }
    },
    success: {
      backgroundColor: "#1db954",
      color: "#ffffff",
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    error: {
      backgroundColor: "#ff4d4f",
      color: "#ffffff",
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  // Social media links with animation
  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com/adityaapraveen' },
    { name: 'LinkedIn', icon: '🔗', url: 'https://www.linkedin.com/in/aditya-praveen-39263924a/' },
    { name: 'Twitter', icon: '🐦', url: 'https://x.com/AdityaaPraveen' },
    { name: 'Instagram', icon: '📷', url: 'https://www.instagram.com/aditya.praveen?igsh=cXBiODdhdHBhd2dy' }
  ];

  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const socialItemVariants = {
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
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 10
      }
    },
    tap: { scale: 0.9 }
  };

  return (
    <div className="contact-container">
      <motion.div 
        className="contact-form-container"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h3 
          variants={formItemVariants}
          className="contact-title"
        >
          Get In Touch
        </motion.h3>
        <motion.p 
          variants={formItemVariants}
          className="contact-description"
        >
          Have a question or want to work together? Feel free to reach out!
        </motion.p>
        
        <motion.form 
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <motion.div 
            className="form-group"
            variants={formItemVariants}
          >
            <motion.label 
              htmlFor="name"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Name
            </motion.label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(29, 185, 84, 0.3)" }}
            />
          </motion.div>
          
          <motion.div 
            className="form-group"
            variants={formItemVariants}
          >
            <motion.label 
              htmlFor="email"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Email
            </motion.label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(29, 185, 84, 0.3)" }}
            />
          </motion.div>
          
          <motion.div 
            className="form-group"
            variants={formItemVariants}
          >
            <motion.label 
              htmlFor="subject"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Subject
            </motion.label>
            <motion.input
              type="text"
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(29, 185, 84, 0.3)" }}
            />
          </motion.div>
          
          <motion.div 
            className="form-group"
            variants={formItemVariants}
          >
            <motion.label 
              htmlFor="message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Message
            </motion.label>
            <motion.textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={5}
              whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(29, 185, 84, 0.3)" }}
            />
          </motion.div>
          
          <motion.button
            type="submit"
            className="submit-button"
            variants={buttonVariants}
            whileHover={submitting ? {} : "hover"}
            whileTap={submitting ? {} : "tap"}
            animate={
              submitting ? "submitting" : 
              submitted ? "success" : 
              error ? "error" : "visible"
            }
            disabled={submitting}
          >
            {submitting ? "Sending..." : 
             submitted ? "Sent Successfully!" : 
             error ? "Error! Try Again" : "Send Message"}
          </motion.button>
        </motion.form>
      </motion.div>
      
      <motion.div 
        className="social-links"
        variants={socialVariants}
        initial="hidden"
        animate="visible"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            variants={socialItemVariants}
            whileHover="hover"
            whileTap="tap"
            custom={index}
          >
            <span className="social-icon">{link.icon}</span>
            <span className="social-name">{link.name}</span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedContact; 