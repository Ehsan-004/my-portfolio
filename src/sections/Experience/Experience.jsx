import React from 'react';
import styles from './Experience.module.css';
import { Reveal } from '../../components/Reveal';

const EXPERIENCE_DATA = [
  {
    company: "Freelance",
    role: "AI & Frontend Developer",
    duration: "2023 - Present",
    description: "Developing custom Computer Vision solutions and modern web applications for various clients."
  },
  {
    company: "AI Startup / Tech Lab",
    role: "Computer Vision Intern",
    duration: "2022 - 2023",
    description: "Assisted in training object detection models and optimizing image processing pipelines."
  }
];

const Experience = () => {
  return (
    <Reveal>
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.timeline}>
          {EXPERIENCE_DATA.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.content}>
                <div className={styles.header}>
                  <h3>{exp.role}</h3>
                  <span className={styles.duration}>{exp.duration}</span>
                </div>
                <h4 className={styles.company}>{exp.company}</h4>
                <p className={styles.desc}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Reveal>
  );
};

export default Experience;