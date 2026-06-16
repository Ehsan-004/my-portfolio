import React from 'react';
import styles from './Experience.module.css';
import { Reveal } from '../../components/Reveal';

const EXPERIENCE_DATA = [
  {
    company: "INDEPENDENT SOFTWARE DEVELOPER (FREELANCE)",
    role: "Freelance Developer",
    duration: "DEC 2025 – PRESENT",
    description: "· Developing and maintaining 'Sangestan', a production-level desktop application for the stone industry using Flutter. \n· Implementing UI components and managing application state for offline-first workflows. \n· Continuously iterating features, fixing bugs, and improving system stability based on direct feedback from real users."
  },
  {
    company: "Qom Uni",
    role: "Computer Vision Intern",
    duration: "JUN 2025 – FEB 2026",
    description: "· Contributed to the development and deployment of real-time computer vision pipelines on edge devices (NVIDIA Jetson).\n· Focused on system optimization, integrating complex modules into a unified system, and solving algorithmic challenges."
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
                <p style={{ whiteSpace: "pre-line" }} className={styles.desc}>{exp.description}</p>
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