"use client";

import { motion } from "framer-motion";

const Timeline = () => {
  const timelineData = [
    { year: "2020", title: "Started Learning React", description: "Began my journey with front-end development." },
    { year: "2021", title: "Internship at XYZ", description: "Worked on developing scalable web applications." },
    { year: "2022", title: "Graduated University", description: "Earned my degree in Computer Science." },
    { year: "2023", title: "Joined ABC Corp", description: "Started as a front-end developer." },
  ];

  return (
    <div className="timeline">
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          className="timeline-item"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="timeline-marker" />
          <div className="timeline-content">
            <h3>{item.year}</h3>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
