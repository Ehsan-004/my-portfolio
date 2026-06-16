import React from 'react';
import styles from './Footer.module.css';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <hr className={styles.divider} />
        <div className={styles.content}>
          <div className={styles.contactMethods}>
            <h2>Let's work together.</h2>
            <p>I'm currently open to new opportunities and collaborations.</p>
            <a href="mailto:ehsankholoosi@gmail.com" className={styles.contactLink}>
              <HiOutlineMail /> Get in touch
            </a>
            <a href="tel:+989900510245" className={styles.contactLink}>
               <FiPhone /> +98 990 0510 245
            </a>
          </div>

          <div className={styles.bottomBar}>
            <p>© {new Date().getFullYear()} Handcrafted by Me</p>
            <a href="https://github.com/Ehsan-004/my-portfolio" target="_blank" className={styles.sourceLink}>
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;