import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <motion.section className='contact' id='contact'>
            <motion.div className='section_container'>
                <motion.div className='section_heading'>
                    <motion.h1
                        className='section_title'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}>
                        Contact Me
                    </motion.h1>
                    <motion.h2
                        className='section_subTitle'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}>
                        Get in Touch
                    </motion.h2>
                </motion.div>
                <motion.div className='contact_container'>
                    <motion.div className='contact_content'>
                        <h1>Say Hello!</h1>
                        <form className='contact_form' action='#' method='post'>
                            <input type='email' id='email' name='email' placeholder='Your Email' required />
                            <textarea id='message' name='message' placeholder='Message' rows={4} required></textarea>
                            <motion.button
                                type='submit'
                                className='btn'
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 2 }}>
                                <span>Send Message</span>
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    )
};

export default Contact;