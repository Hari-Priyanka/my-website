import React from 'react';
import './Footer.css';
import {motion} from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
    initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}className='footer'>
        <div className='footer_text'>
            <p>&copy; 2024 Hari Priyanka. All rights reserved.</p>
        </div>
    </motion.footer>
  )
}

export default Footer;