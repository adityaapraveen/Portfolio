import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Mail, Palette, Lightbulb, Truck, RefreshCw, PenTool, PencilRuler } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" style={{ paddingTop: '5rem', paddingBottom: '2rem' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                {/* Greeting */}
                <p className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>

                </p>

                {/* Name + Handle */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                    <h1 className="pixel-heading">ADITYA PRAVEEN</h1>

                    {/* GitHub Tooltip */}
                    <div className="tooltip-container">
                        <div className="tooltip">
                            <div className="profile">
                                <div className="user">
                                    <div className="img"><img src="https://github.com/adityaapraveen.png" alt="" /></div>
                                    <div className="details">
                                        <div className="name">Aditya Praveen</div>
                                        <div className="username">@adityaapraveen</div>
                                    </div>
                                </div>
                                <div className="about">A Fullstack Developer</div>
                            </div>
                        </div>
                        <div className="text">
                            <a className="icon" href="https://github.com/adityaapraveen" target="_blank" rel="noreferrer">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="github-icon">
                                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="text">GitHub</div>
                            </a>
                        </div>
                    </div>

                    <span style={{ color: 'var(--text-dim)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                        / @adityaapraveen
                    </span>
                </div>

                {/* Bio */}
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 400px' }}>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.75, marginBottom: '1rem' }}>
                            I am a curious <strong style={{ color: '#fff' }}>Developer</strong> who enjoys understanding how systems work beneath the surface.
                            I build responsive web applications using <strong style={{ color: '#fff' }}>JavaScript and React</strong>, with a strong focus on 
                            clean architecture, performance, and maintainable code.




                            {/* Yup! I'm a <strong style={{ color: '#fff' }}></strong>. Big deal, right? But wait — there's more! I'm not just any developer,
                            I'm a <strong style={{ color: '#fff' }}>Design Engineer</strong>. And if that wasn't enough, guess what?
                            maybe <strong style={{ color: '#fff' }}>Freelancer?</strong> Oh yeah, I've got that badge too! */}
                        </p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                            Through internships and personal projects, I have gained experience integrating APIs, optimizing frontend behavior, and 
                            collaborating through structured code reviews. I am actively strengthening my <strong style={{ color: '#fff' }}>backend skills</strong> by learning how servers, 
                            databases, and APIs work under the hood, and I continuously push myself toward becoming a strong <strong style={{ color: '#fff' }}>full stack engineer</strong>.
                        </p>

                        {/* CTA Buttons */}
                        <div className="cta-buttons" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                            <div className="dm-tooltip-wrap">
                                <span className="dm-tip">Hey There!</span>
                                <a href="https://twitter.com/messages/compose?recipient_id=adityaapraveen" className="shadow-btn" target="_blank" rel="noreferrer">
                                    <span className="dm-btn-text">
                                        <Bookmark size={14} />
                                        Twitter DM
                                    </span>
                                </a>
                            </div>
                            <span style={{ color: 'var(--text-dim)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>OR</span>
                            <div className="dm-tooltip-wrap dm-tooltip-bottom">
                                <span className="dm-tip">Hey There!</span>
                                <a href="mailto:adityaapraveen18@gmail.com" className="shadow-btn">
                                    <span className="dm-btn-text">
                                        <Mail size={14} />
                                        Email Me
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Process Diagram */}
                    {/* <div style={{ flex: '0 0 auto' }}>
                        <div className="process-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                            {[
                                { icon: <Palette size={20} />, label: 'Canvas', rotate: '-3deg' },
                                { icon: <Lightbulb size={20} />, label: 'Concept', rotate: '2deg' },
                                { icon: <Truck size={20} />, label: 'Delivery', rotate: '1deg' },
                                { icon: <RefreshCw size={20} />, label: 'Refinement', rotate: '-2deg' },
                                { icon: <PenTool size={20} />, label: 'Styling', rotate: '3deg' },
                                { icon: <PencilRuler size={20} />, label: 'Design\nDrafting', rotate: '-1deg' },
                            ].map((node, i) => (
                                <motion.div
                                    key={i}
                                    className="process-node"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    style={{ transform: `rotate(${node.rotate})` }}
                                >
                                    <div className="process-box">
                                        {node.icon}
                                    </div>
                                    <span className="process-label">{node.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div> */}
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
