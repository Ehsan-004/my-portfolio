import React from 'react';
import styles from './Footer.module.css';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <hr className={styles.divider} />
        <div className={styles.content}>
          <div className={styles.cta}>
            <h2>Let's work together.</h2>
            <p>I'm currently open to new opportunities and collaborations.</p>
            <a href="mailto:your-email@example.com" className={styles.emailLink}>
              Get in touch <HiOutlineMail />
            </a>
          </div>
          
          <div className={styles.bottomBar}>
            <p>© {new Date().getFullYear()} Handcrafted by Me</p>
            <a href="لینک_گیت‌هاب_پروژه" target="_blank" className={styles.sourceLink}>
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;