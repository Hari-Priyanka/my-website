import React, { useState } from 'react';
import './About.css';
import { motion } from 'framer-motion';
import Typewriter from './Typewriter';
import Timeline from './Timeline';

const About = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const copyEmail = () => {
        const email = 'haripriyanka1999@gmail.com';
        navigator.clipboard.writeText(email);
    };

    return (
        <motion.section className='about' id='about'>
            <motion.div className='section_container'>
                <motion.div className='section_heading'>
                    <motion.h1
                        className='section_title'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}>
                        About Me
                    </motion.h1>
                    <motion.h2
                        className='section_subTitle'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}>
                        A little about myself
                    </motion.h2>
                </motion.div>
                <motion.div className='about_container'>
                    <motion.div className='about_content'>
                        <motion.div className='about_me_info'>
                            <div>
                                <motion.h1>
                                    Name: <span>Hari Priyanka</span>
                                </motion.h1>
                                <motion.p
                                    className='email'
                                    onClick={copyEmail}
                                    title='Click to Copy'>
                                    Email: <span>haripriyanka1999@gmail.com</span>
                                </motion.p>
                                <motion.h1
                                    className='about_me_title'>
                                    <span>Front End Developer</span>
                                </motion.h1>
                            </div>
                            <div className='buttons'>
                                <a href='github.com' target='_blank' rel='noopener noreferrer'>
                                    <button className='btn'>Github Profile</button>
                                </a>
                                <a href='resume.pdf' download>
                                    <button className='btn'>Download Resume</button>
                                </a>
                            </div>
                        </motion.div>
                        <motion.div className='about_me_description'>
                            <Typewriter
                                text={`Hello, I'm Hari Priyanka, passionate about web development. I believe that every line of code has the potential to create something amazing.
                            Even though I don't have formal work experience, I'm excited to showcase my skills and creativity through this portfolio website,
                            where you will find projects I've built from scratch using front-end technologies.
                            This website itself is a testament to my dedication and growth in the field.`}
                            />
                            {!showMore && (
                                <button className='btn' onClick={toggleShowMore}>
                                    Read More
                                </button>
                            )}
                        </motion.div>
                        {showMore && (
                            <motion.div className='education_timeline'>
                                <Timeline />
                                <button className='btn' onClick={toggleShowMore}>
                                    Read Less
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    )
};

export default About;