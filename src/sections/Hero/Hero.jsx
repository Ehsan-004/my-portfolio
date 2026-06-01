import React from 'react';
import { SiGithub, SiTelegram } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import styles from './Hero.module.css';
import { Reveal } from '../../components/Reveal'; // اضافه کردن انیمیشن

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* بخش چپ: متن‌ها */}
        <div className={styles.textContent}>
          <Reveal>
            <h1 className={styles.title}>
              Developing <span className={styles.highlight}>Intelligence</span> <br />
              Crafting <span className={styles.highlight}>Experiences</span>
            </h1>
          </Reveal>
          
          <Reveal>
            <p className={styles.description}>
              I'm a <strong>Computer Vision Engineer</strong> and <strong>Frontend Developer</strong> focused on bridging the gap between complex AI algorithms and intuitive user interfaces.
            </p>
          </Reveal>

          <Reveal>
            <div className={styles.actions}>
              <a href="#projects" className={styles.primaryBtn}>View Projects</a>
              <a href="/resume.pdf" download className={styles.secondaryBtn}>Download CV</a>
              <div className={styles.socials}>
                <a href="#"><SiGithub size={24} /></a>
                <a href="#"><FaLinkedin size={24} /></a>
                <a href="#"><SiTelegram size={24} /></a>
                <a href="#"><HiOutlineMail size={24} /></a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* بخش راست: المان بصری (فقط در دسکتاپ نمایش داده می‌شود) */}
        <div className={styles.visualContent}>
          <Reveal>
            <div className={styles.codeCard}>
              <pre>
                <code>
{`import cv2
model = load("yolov8")
img = read("frame.jpg")
res = model.predict(img)
# AI Processed!`}
                </code>
              </pre>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;