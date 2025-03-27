import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-2xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          RN 🕸🕷~𝓢𝓹𝓲𝓭𝓮𝓻𝓶𝓪𝓷~
        </motion.a>

        <div className="flex items-center gap-8">
          <a href="#about" className="text-gray-300 hover:text-primary transition-colors">About</a>
          <a href="#projects" className="text-gray-300 hover:text-primary transition-colors">Projects</a>
          <a href="#experience" className="text-gray-300 hover:text-primary transition-colors">Experience</a>
          <a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a>
          <motion.a
            href="https://rohit-neelam-resume.my.canva.site/"
            target="https://rohit-neelam-resume.my.canva.site/"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <FileText size={18} />
            <span>Resume</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;