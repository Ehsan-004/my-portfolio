import React from 'react';
import styles from './Navbar.module.css';
import { useDarkMode } from '../../hooks/useDarkMode';
import { Sun, Moon } from 'lucide-react';


export default  function Navbar ()  {
    const [theme, toggleTheme] = useDarkMode();

    return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>Ehsan Kholoosi</div>
        <ul className={styles.navLinks}>
          <li><a href="#projects">Projects</a></li>

          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
          <button onClick={toggleTheme} className={styles.themeToggle}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </ul>
      </div>
    </nav>

  );
};
