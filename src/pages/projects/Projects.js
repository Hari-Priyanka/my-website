import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import { projectsData } from '../../Data';

const Projects = () => {
    return (
        <motion.section className='projects' id='projects'>
            <motion.div className='section_container'>
                <motion.div className='section_heading'>
                    <motion.h1
                        className='section_title'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}>
                        Projects
                    </motion.h1>
                    <motion.h2
                        className='section_subTitle'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}>
                        Some of the works i have done
                    </motion.h2>
                </motion.div>
                <motion.div className='projects_container'>
                    {projectsData.map((project) => (
                        <motion.div key={project.id} className='projects_card'>
                            <div className='project_content'>
                                <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}>{project.id}</motion.span>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <div className='buttons'>
                                <a href='github.com' target='_blank' rel='noopener noreferrer'>
                                    <button className='btn'>Github</button>
                                </a>
                                <a href='resume.pdf' download>
                                    <button className='btn'>Demo</button>
                                </a>
                            </div>
                            </div>
                            <div className='project_image'>
                                <img src={project.image} alt={project.name}/>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>
    )
};

export default Projects;