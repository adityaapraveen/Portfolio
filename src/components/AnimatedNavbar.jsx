import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#whoami' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '#resume' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' }
];

const AnimatedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = (name) => {
    setActiveItem(name);
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  // Variants for the menu items
  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 24
      } 
    })
  };

  // Variants for the hamburger button
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  };

  // Variants for the navbar background
  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
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

  return (
    <motion.nav 
      className="navbar"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar-container">
        <motion.div 
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#home">
            <span className="logo-text">AP</span>
          </a>
        </motion.div>

        <motion.button 
          className={`navbar-toggle ${isOpen ? 'open' : ''}`}
          onClick={toggleNavbar}
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.button>

        <AnimatePresence>
          <motion.ul 
            className={`navbar-menu ${isOpen ? 'show' : ''}`}
            initial="closed"
            animate={isOpen || window.innerWidth > 768 ? "open" : "closed"}
          >
            {navItems.map((item, i) => (
              <motion.li 
                key={item.name} 
                custom={i}
                variants={itemVariants}
              >
                <motion.a 
                  href={item.href}
                  className={activeItem === item.name ? 'active' : ''}
                  onClick={() => handleNavItemClick(item.name)}
                  whileHover={{ color: "#1db954", scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {activeItem === item.name && (
                    <motion.div 
                      className="active-indicator"
                      layoutId="activeIndicator"
                      transition={{ 
                        type: "spring", 
                        stiffness: 500, 
                        damping: 30 
                      }}
                    />
                  )}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default AnimatedNavbar; 