import React, {useState, useEffect} from "react";
import './Skills.css';
import { motion } from 'framer-motion';
import { skillsData, additionalSkillsData } from '../../Data';

const Skills = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? 1 : 0));
      }, 6000);
      return () => clearInterval(interval);
    }, []);

    return (
        <motion.section className="skills" id="skills">
            <motion.div className="section_container">
                <motion.div className='section_heading'>
                    <motion.h1
                        className='section_title'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}>
                        My Skills
                    </motion.h1>
                    <motion.h2
                        className='section_subTitle'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}>
                        What i know?
                    </motion.h2>
                </motion.div>
                <motion.div className='slideshow_container'>
        <motion.div className='slideshow_content'>
          
          {/*Slide 1*/}

          <div className={currentSlide === 0 ? 'slide active' : 'slide'}>
            <div className='skills_progress'>
              <div className='progress_bar'>
                <div className='skills_grid'>
                  {skillsData.map((skill, index) => (
                    <div className='skill' key={index}>
                      <div className='name'>{skill.icon}{skill.name}</div>
                      <div className='bar'>
                        <motion.div
                          className='filler'
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.percentage}` }}
                          transition={{ duration: 3 }}
                        ></motion.div>
                        <motion.div
                          className='percentage'
                          initial={{ opacity: 0, left: `${skill.percentage}` }}
                          whileInView={{ opacity: 1, left: `${skill.percentage}` }}
                          transition={{ duration: 2 }}
                        >
                          {skill.percentage}
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/*Slide 2*/}

          <div className={currentSlide === 1 ? 'slide active' : 'slide'}>
            <div className='skills_progress'>
              <div className='progress_bar'>
                <div className='skills_grid'>
                  {additionalSkillsData.map((skill, index) => (
                    <div className='skill' key={index}>
                      <div className='name'>{skill.icon}{skill.name}</div>
                      <div className='bar'>
                        <motion.div
                          className='filler'
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}` }}
                          transition={{ duration: 3 }}
                        ></motion.div>
                        <motion.div
                          className='percentage'
                          initial={{ opacity: 0, left: `${skill.percentage}` }}
                          whileInView={{ opacity: 1, left: `${skill.percentage}` }}
                          transition={{ duration: 2 }}
                        >
                          {skill.percentage}
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/*Slide Indicators */}
          <div className="indicators">
        <span
          className={currentSlide === 0 ? 'indicator active' : 'indicator'}
          onClick={() => setCurrentSlide(0)}
        ></span>
        <span
          className={currentSlide === 1 ? 'indicator active' : 'indicator'}
          onClick={() => setCurrentSlide(1)}
        ></span>
      </div>
        </motion.div>
      </motion.div>
            </motion.div>
        </motion.section>
    )
};

export default Skills;