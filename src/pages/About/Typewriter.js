import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const Typewriter = ({ text }) => {
    return (
        <motion.p
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:2}}>
            {text.split('').map((char, index) => (
                <motion.span key={`${char}-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.08 }}
                >
                    {char}
                </motion.span>
                
            ))}
        </motion.p>
    )
}

export default Typewriter;
