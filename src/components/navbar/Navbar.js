import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = ({isOpen, closeMenu}) => {
    const [activeNav, setActiveNav] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["#home", "#about", "#skills", "#projects", "#contact"];
            for (let section of sections) {
                const element = document.querySelector(section);
                if (element) {
                    const scrollPosition = window.scrollY + 200;
                    if (element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
                        setActiveNav(section);
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const handleNavClick = (navId) => {
        setActiveNav(navId);
    };

    return (
        <>
            {isOpen && <div className='overlay' onClick={closeMenu}></div>}
            <nav className={isOpen ? 'open' : ''}>
                <a href='#home' className={activeNav === "#home" ? "active" : ""} onClick={() => handleNavClick("#home")} aria-label="Home Page"><AiOutlineHome className='icon'/><span onClick={() => closeMenu("#home")}>Home</span></a>
                <a href='#about' className={activeNav === "#about" ? "active" : ""} onClick={() => handleNavClick("#about")} aria-label="About Me"><AiOutlineUser className='icon'/><span onClick={() => closeMenu("#about")}>About</span></a>
                <a href='#skills' className={activeNav === "#skills" ? "active" : ""} onClick={() => handleNavClick("#skills")} aria-label="My Skills"><BiBook className='icon'/><span onClick={() => closeMenu("#skills")}>Skills</span></a>
                <a href='#projects' className={activeNav === "#projects" ? "active" : ""} onClick={() => handleNavClick("#projects")} aria-label="My Projects"><RiServiceLine className='icon'/><span onClick={() => closeMenu("#projects")}>Projects</span></a>
                <a href='#contact' className={activeNav === "#contact" ? "active" : ""} onClick={() => handleNavClick("#contact")} aria-label="Contact Me"><BiMessageSquareDetail className='icon'/><span onClick={() => closeMenu("#contact")}>Contact</span></a>
                {isOpen && <div className='social_icons'>
                <a href='linkedin.com' aria-label="LinkedIn"><FaLinkedin/></a>
                <a href='github.com' aria-label="GitHub"><FaGithub/></a>
            </div>}
            </nav>
        </>
    )
};

export default Navbar;