import { useState, useEffect } from 'react';
import './App.css';

const surprises = ['👾', '🤖', '💻', '🚀', '🧠', '😝'];

function App() {
  const [surprise, setSurprise] = useState('');

  useEffect(() => {
    setSurprise(surprises[Math.floor(Math.random() * surprises.length)]);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="surprise">{surprise}</div>
      </header>
      <main>
        <section id="about">
          <h1>Hello, I'm devxiexie</h1>
          <p>Welcome to my corner of the internet. I'm a passionate developer interested in games, AI, security, and algorithms.</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <p>More to come soon!</p>
        </section>
        <section id="contact">
          <h2>Get In Touch</h2>
          <p>You can find me on <a href="https://github.com/devxiexie" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
