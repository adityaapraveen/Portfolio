import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        company: 'Intervue.io (Shark Tank 2024)',
        role: 'Fullstack Engineer Intern',
        dates: 'Nov 2025 — Present',
        description: 'Built dynamic, DOM-based interfaces using JavaScript and integrated backend APIs to handle asynchronous data efficiently. Participated in code reviews to enhance performance, structure, and reliability of the application.',
        logo: './intervue.png',
        initials: 'Intervue',
    },
    {
        company: 'Shaale',
        role: 'Front End Intern',
        dates: 'Feb 2026 — April 2024',
        description:
            'Learned and applied React.js fundamentals to build reusable components and responsive pages. Worked on implementing UI features based on design requirements and collaborated with the team through code reviews to improve code quality and follow best practices.',
        logo: './shaale.png',
        initials: 'Shaale',
    },
    
];

const Experience = () => {
    return (
        <section id="experience" style={{ padding: '2.5rem 0' }}>
            <h2 style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#fafafa',
                marginBottom: '1.25rem',
            }}>
                Experience
            </h2>

            {/* Top divider */}
            <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', marginBottom: '2rem' }} />

            {experiences.map((exp, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{ marginBottom: '2rem' }}
                >
                    {/* Header row: logo + info + dates */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        marginBottom: '0.75rem',
                    }}>
                        {/* Logo circle */}
                        <div style={{
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            background: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            color: '#0b0d0e',
                            overflow: 'hidden',
                        }}>
                            {exp.logo ? (
                                <img src={exp.logo} alt={exp.company} style={{ width: '190%', height: '190%' }} />
                            ) : (
                                <span>{exp.initials}</span>
                            )}
                        </div>

                        {/* Company + role */}
                        <div style={{ flex: 1 }}>
                            <div style={{
                                fontSize: '1.4rem',
                                fontWeight: 600,
                                color: '#fafafa',
                            }}>
                                {exp.company}
                            </div>
                            <div style={{
                                fontSize: '1rem',
                                color: 'var(--text-muted)',
                            }}>
                                {exp.role}
                            </div>
                        </div>

                        {/* Dates */}
                        <div className="mono" style={{
                            fontSize: '0.9rem',
                            color: 'var(--text-muted)',
                            whiteSpace: 'nowrap',
                            paddingTop: '0.15rem',
                        }}>
                            {exp.dates}
                        </div>
                    </div>

                    {/* Description */}
                    <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        paddingLeft: 'calc(48px + 1rem)',
                    }}>
                        {exp.description}
                    </p>
                </motion.div>
            ))}

            {/* Bottom divider */}
            <div style={{ height: 1, background: 'rgba(255,255,255,0.1)' }} />
        </section>
    );
};

export default Experience;
