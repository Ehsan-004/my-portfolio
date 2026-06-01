import React from 'react';
import styles from './Skills.module.css';
// از آیکون‌هایی که مطمئنی داری استفاده کن
import { Code2, Brain, Terminal, Cpu } from 'lucide-react'; 
import { Reveal } from '../../components/Reveal';

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Technical Expertise</h2>
        
        <Reveal>
          <div className={styles.bentoGrid}>
            {/* باکس بزرگ: AI & Computer Vision */}
            <div className={`${styles.bentoItem} ${styles.large}`}>
              <Brain className={styles.icon} size={32} />
              <h3>AI & Computer Vision</h3>
              <p>Specialized in object detection, image segmentation, and neural network optimization.</p>
              <div className={styles.skillTags}>
                <span>PyTorch</span> <span>OpenCV</span> <span>YOLO</span> <span>TensorFlow</span>
              </div>
            </div>

            {/* باکس متوسط: Frontend Development */}
            <div className={`${styles.bentoItem} ${styles.medium}`}>
              <Code2 className={styles.icon} size={32} />
              <h3>Frontend Dev</h3>
              <p>Building responsive, high-performance web apps with modern React.</p>
              <div className={styles.skillTags}>
                <span>React</span> <span>JavaScript</span> <span>Vite</span> <span>CSS Modules</span>
              </div>
            </div>

            {/* باکس کوچک: Tools */}
            <div className={`${styles.bentoItem} ${styles.small}`}>
              <Terminal className={styles.icon} size={28} />
              <h3>Tools</h3>
              <div className={styles.skillTags}>
                <span>Git</span> <span>Docker</span> <span>Linux</span>
              </div>
            </div>

            {/* باکس کوچک: Hardware/Edge */}
            <div className={`${styles.bentoItem} ${styles.small}`}>
              <Cpu className={styles.icon} size={28} />
              <h3>Edge AI</h3>
              <div className={styles.skillTags}>
                <span>NVIDIA Jetson</span> <span>ONNX</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;