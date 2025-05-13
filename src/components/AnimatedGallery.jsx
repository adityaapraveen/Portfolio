import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images from assets
import flowerMarket1 from '../assets/flowermarket1.jpg';
import flowerMarket2 from '../assets/flowermarket2.jpg';
import flowerMarket3 from '../assets/flowermarket3.jpg';
import cat from '../assets/cat.jpg';
import cat1 from '../assets/cat1.jpg';
import mycat from '../assets/mycat.jpg';
import goldenflower from '../assets/goldenflower.jpg';
import jhumka from '../assets/jhumka.jpg';
import grungecake from '../assets/grungecake.jpg';

const galleryImages = [
  { id: 1, src: flowerMarket1, alt: 'Flower Market 1', category: 'Nature' },
  { id: 2, src: flowerMarket2, alt: 'Flower Market 2', category: 'Nature' },
  { id: 3, src: flowerMarket3, alt: 'Flower Market 3', category: 'Nature' },
  { id: 4, src: cat, alt: 'Cat', category: 'Animal' },
  { id: 5, src: cat1, alt: 'Cat 1', category: 'Animal' },
  { id: 6, src: mycat, alt: 'My Cat', category: 'Animal' },
  { id: 7, src: goldenflower, alt: 'Golden Flower', category: 'Nature' },
  { id: 8, src: jhumka, alt: 'Jhumka', category: 'Art' },
  { id: 9, src: grungecake, alt: 'Grunge Cake', category: 'Food' }
];

// Gallery component with animations
const AnimatedGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];

  // Filter images by category
  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  // Open lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.3)",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    active: { 
      backgroundColor: "#1db954", 
      color: "white",
      scale: 1.05
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="gallery-container">
      {/* Filter buttons */}
      <motion.div 
        className="gallery-filters"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={index}
            className={`gallery-filter-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
            variants={buttonVariants}
            initial="initial"
            animate={selectedCategory === category ? "active" : "initial"}
            whileHover="hover"
            whileTap="tap"
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Gallery grid */}
      <motion.div 
        className="gallery-grid"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              className="gallery-item"
              layoutId={`gallery-item-${image.id}`}
              variants={imageVariants}
              whileHover="hover"
              onClick={() => openLightbox(image)}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="gallery-image"
                layoutId={`gallery-image-${image.id}`}
              />
              <motion.div 
                className="image-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.p>{image.alt}</motion.p>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div 
              className="lightbox-content"
              layoutId={`gallery-item-${selectedImage.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.alt}
                layoutId={`gallery-image-${selectedImage.id}`}
              />
              <motion.div 
                className="lightbox-caption"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3>{selectedImage.alt}</h3>
                <p>{selectedImage.category}</p>
              </motion.div>
              <motion.button 
                className="lightbox-close"
                onClick={closeLightbox}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                &times;
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedGallery; 