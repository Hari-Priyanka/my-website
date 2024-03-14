import React, { useState } from 'react';
import './Header.css';
import { motion } from 'framer-motion';
import Navbar from '../navbar/Navbar';
import ThemeSwitcher from '../theme/ThemeSwitcher';
import { HiMenuAlt3 } from 'react-icons/hi';
import {FaTimes} from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}>
                <div className='logo'>
                    <a href='#home'>Priyanka</a>
                </div>
                <Navbar />
                <div className='header_icons'>
                    <ThemeSwitcher />
                    <div className={`hamburger_menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        {isOpen ? <FaTimes/> : <HiMenuAlt3/>}
                    </div>
                </div>
            </motion.header>
            <Navbar isOpen={isOpen} closeMenu={closeMenu}/>
        </>
    )
};

export default Header;