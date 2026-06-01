import React from 'react';
import './styles/variables.css';
import './styles/global.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}

export default App;