import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const projectData = [
    {
        title: 'Modern Concepts Exports',
        stars: null,
        description: 'Developed a responsive export business website using ReactJS. The project is fully hosted on the internet using GitHub hosting with a custom domain. Through this, I gained hands on experience with DNS configuration, SSL certificates, and how HTTP works in real world deployment scenarios.',
        href: 'https://www.modernconceptsexports.com/',
        thumbnail: './image1.png',
    },
    {
        title: 'Wild-Horizons-RESTAPI',
        stars: null,
        description: 'A vanilla Node.js REST API built from scratch that showcases the worlds most fascinating travel destinations. This project demonstrates core REST API concepts including routing, request handling, data filtering, and HTTP response management using only the Node.js http module—no external frameworks required.',
        href: 'https://github.com/adityaapraveen/Wild-Horizons-RESTAPI',
        thumbnail: './image4.png',
    },
    {
        title: 'Adaptive Learning Management System',
        stars: null,
        description: 'The Adaptive Learning Management System is a comprehensive educational platform that connects teachers and students through a secure and efficient interface. Built using a microservices architecture, it provides a scalable and maintainable solution for educational institutions.',
        href: 'https://github.com/adityaapraveen/AdaptiveLearningMS',
        thumbnail: './image2.png',
    },
    {
        title: 'Express REST-API From Scratch',
        stars: null,
        description: "A RESTful API that provides comprehensive data about the world's most promising startups. Built with Node.js and Express, this API allows you to filter and search startup information across various industries, countries, and continents.",
        href: 'https://github.com/adityaapraveen/Express-RESTAPI',
        thumbnail: './image5.png',
    },
    {
        title: 'Vakeel AI',
        stars: null,
        description: 'This project is a legal chatbot that provides legal advice and helps users with various legal queries. The chatbot uses a combination of advanced technologies such as Retrieval-Augmented Generation (RAG), semantic search, vector databases, and large language models (LLMs) to provide precise and relevant answers. It utilizes Milvus as a vector database for indexing legal documents, and Ollama (Llama 3.2 1B parameters) as the underlying large language model to interpret user queries.',
        href: 'https://github.com/adityaapraveen/Vakeel-AI',
        thumbnail: './image3.png',
    },

];

const Projects = () => {
    return (
        <section id="projects" style={{ padding: '2.5rem 0' }}>
            <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.95rem',
                marginBottom: '1.5rem',
            }}>
                Check out my <strong style={{ color: '#fff' }}>Projects</strong>
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.25rem',
            }}>
                {projectData.map((project, index) => (
                    <motion.a
                        key={project.title}
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                    >
                        <div className="dashed-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            {/* Thumbnail */}
                            <div className="project-thumb">
                                {project.thumbnail ? (
                                    <img src={project.thumbnail} alt={project.title} />
                                ) : (
                                    <div style={{
                                        width: '100%',
                                        height: '100%',
                                        background: 'linear-gradient(145deg, #0c0c0c, #111)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <span className="mono" style={{ color: 'var(--text-dim)', fontSize: '0.75rem' }}>
                                            {project.title}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Info */}
                            <div style={{ padding: '1.25rem' }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '0.5rem',
                                }}>
                                    <h3 style={{
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        color: '#fff',
                                        fontFamily: 'var(--font-sans)',
                                    }}>
                                        {project.title}
                                    </h3>
                                    <span style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.3rem',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.8rem',
                                        color: '#facc15',
                                    }}>
                                        <Star size={14} fill="#facc15" stroke="#facc15" />
                                        {project.stars}
                                    </span>
                                </div>
                                <p className="mono" style={{
                                    color: 'var(--text-muted)',
                                    fontSize: '0.78rem',
                                    lineHeight: 1.6,
                                }}>
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Projects;
