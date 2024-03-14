import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Scroll from '../../components/scroll/Scroll';

const Home = () => {
    return (
        <>
            <motion.section className='home' id='home'>
                <motion.div className='section_container'>
                    <div className='home_content'>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 2 }}>
                            Hi, i am
                        </motion.h2>
                        <motion.h1
                            className='name'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 2 }}>
                            <Typewriter
                                loop
                                cursor
                                cursorColor='|'
                                typeSpeed={100}
                                deleteSpeed={70}
                                delaySpeed={1000}
                                words={["Hari Priyanka", "Front-End Developer"]}
                            />
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 2 }}>

                            I am Passionate Front-End Web Developer dedicated to crafting visually stunning and user-friendly experiences. Proficient in HTML, CSS, and JavaScript, with a keen eye for detail and a focus on delivering exceptional results.
                        </motion.p>
                        <motion.button
                            className='btn'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 2 }}>
                            <span>See my work</span>
                        </motion.button>
                    </div>
                </motion.div>
            </motion.section>
            <motion.section className='scroll_section'>
                <Scroll />
            </motion.section>
        </>
    )
};

export default Home;  