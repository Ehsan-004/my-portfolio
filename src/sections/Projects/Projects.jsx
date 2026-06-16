import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';
import { Reveal } from '../../components/Reveal';
import { PROJECTS_DATA } from '../../data/projects';
import { CATEGORIES } from '../../data/projects';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <Reveal>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
        </Reveal>

        {CATEGORIES.map((cat) => (
          <div key={cat.id} className={styles.categorySection}>
            {/* عنوان هر دسته بندی */}
            <Reveal>
              <h3 className={styles.categoryTitle}>{cat.title}</h3>
            </Reveal>

            {/* گرید پروژه‌های مربوط به این دسته بندی */}
            <div className={styles.grid}>
              {PROJECTS_DATA.filter(project => project.category === cat.id).map((project) => (
                <Reveal key={project.id}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

  );
};

export default Projects;