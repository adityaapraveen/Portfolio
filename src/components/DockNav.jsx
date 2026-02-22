import React from 'react';
import { Home, GraduationCap, Brush, Wrench, BookOpen } from 'lucide-react';

const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: GraduationCap, label: 'Work', href: '#experience' },
    { icon: Brush, label: 'Arts', href: '#projects' },
    { icon: Wrench, label: 'Skills', href: '#links' },
    { icon: BookOpen, label: 'Blog', href: '#contributions' },
];

const DockNav = () => {
    const handleClick = (e, href) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="dock-nav">
            {navItems.map((item, index) => {
                const Icon = item.icon;
                const isFirst = index === 0;
                return (
                    <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => handleClick(e, item.href)}
                        className={`dock-item${isFirst ? ' active' : ''}`}
                    >
                        <Icon size={20} strokeWidth={isFirst ? 2 : 1.5} />
                        <span>{item.label}</span>
                    </a>
                );
            })}
        </nav>
    );
};

export default DockNav;
