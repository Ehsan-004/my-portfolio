import React from 'react';
import { GitBranch, GitCommitHorizontalIcon, Link, Mail } from 'lucide-react'; // وارد کردن آیکون‌ها

import { SiGithub, SiLinkerd } from 'react-icons/si'; // از مجموعه SimpleIcons
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'; // از مجموعه HeroIcons

import styles from './Hero.module.css';
import { Reveal } from '../../components/Reveal';

const Hero = () => {
  return (
    <Reveal>
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Developing <span className={styles.highlight}>Intelligence</span> <br />
          Crafting <span className={styles.highlight}>Experiences</span>
        </h1>
        
        <p className={styles.description}>
          I'm a <strong>Computer Vision Engineer</strong> and <strong>Frontend Developer</strong> focused on bridging the gap between complex AI algorithms and intuitive user interfaces.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryBtn}>View Projects</a>
          <div className={styles.socials}>
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer" aria-label="GitHub">
              <SiGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/your-username" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:your-email@example.com" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
    </Reveal>
  );
};

export default Hero;