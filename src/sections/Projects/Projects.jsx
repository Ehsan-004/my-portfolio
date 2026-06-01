import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';

const PROJECTS_DATA = [
  {
    id: 1,
    title: "AI Object Detector",
    description: "A real-time object detection system using YOLOv8 and React for the dashboard.",
    tags: ["Python", "PyTorch", "React"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A minimalist portfolio designed with React and CSS Modules, focusing on performance.",
    tags: ["React", "Vite", "CSS Modules"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Medical Image Analysis",
    description: "An AI tool to classify medical X-ray images with high accuracy using CNNs.",
    tags: ["Computer Vision", "TensorFlow", "FastAPI"],
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Medical Image Analysis",
    description: "An AI tool to classify medical X-ray images with high accuracy using CNNs.",
    tags: ["Computer Vision", "TensorFlow", "FastAPI"],
    link: "#",
    github: "#"
  },
  //
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <div className={styles.grid}>
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;