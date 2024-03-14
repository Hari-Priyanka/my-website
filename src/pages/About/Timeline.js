import React from 'react';
import { motion } from 'framer-motion'
import { educationData, personalData } from '../../Data';

const Timeline = () => {
  return (
    <div className='timeline_container'>
      <ul className='time_line'>
        {educationData.map((edu, index) => (
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
            className='timeline_item' key={index}>
            <div className='timeline_content'>
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>
              <p>{edu.duration}</p>
            </div>
          </motion.li>
        ))}
      </ul>
      <ul className='timeline'>
        {personalData.map((category, index) => (
          <motion.li
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
            className='data' key={index}>
            <div className='data_content'>
              <h3>{category.category}</h3>
              {category.items.map((item, i) => (
                <div>
                <button className='data_btn' key={i}>{item}</button>
                </div>
              ))}
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default Timeline;
