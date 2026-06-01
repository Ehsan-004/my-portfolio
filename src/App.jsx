import React from 'react';
import './styles/variables.css';
import './styles/global.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Experience from './sections/Experience/Experience';
import Footer from './layout/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;