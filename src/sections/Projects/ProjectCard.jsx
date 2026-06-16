import React from 'react';
import { GitBranch, ExternalLink } from 'lucide-react';
import styles from './Projects.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <a><h3 className={styles.projectTitle}>{project.title}</h3></a>
        <div className={styles.projectLinks}>
          {project.github && <a href={project.github} target="_blank" rel="noreferrer"><GitBranch size={18} /></a>}
          {project.link && <a href={project.link} target="_blank" rel="noreferrer"><ExternalLink size={18} /></a>}
        </div>
      </div>
      <p style={{ whiteSpace: "pre-line" }} className={styles.projectDesc}>{project.description}</p>
      <div className={styles.tags}>
        {project.tags.map((tag, index) => (
          <span key={index} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;