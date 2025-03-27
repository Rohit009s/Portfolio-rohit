import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-dark relative overflow-hidden">
      <div className="stars" />
      <div className="nebula" />
      <div className="sun" />
      <div className="planet planet-mars" />
      <div className="planet planet-saturn">
        <div className="saturn-rings" />
      </div>
      <div className="moon" />
      <div className="rocket rocket-1" />
      <div className="rocket rocket-2" />
      
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 py-16 space-y-32">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        
        <footer className="glass-card mt-32 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg font-medium gradient-text">
              Innovating the Future, One Project at a Time
            </p>
            <div className="flex justify-center gap-6 mt-6">
              <a href="https://github.com/rohitneelam" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/rohitneelam" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:rohit.neelam@example.com"
                 className="text-gray-400 hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              © 2024 Rohit Neelam. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;