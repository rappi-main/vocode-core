import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-primary-500">Vocode</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-primary-500 transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('features');
              }}
            >
              Features
            </a>
            <a 
              href="#docs" 
              className="text-gray-700 hover:text-primary-500 transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('docs');
              }}
            >
              Documentation
            </a>
            <a href="https://vocode.dev/pricing" className="text-gray-700 hover:text-primary-500 transition-colors">Pricing</a>
            <a href="https://vocode.dev/blog" className="text-gray-700 hover:text-primary-500 transition-colors">Blog</a>
            <a href="https://github.com/vocodedev/vocode-python" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-500 transition-colors">GitHub</a>
            <a href="https://app.vocode.dev" className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors">Dashboard</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-primary-500 transition-colors py-2 cursor-pointer" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('features');
              }}
            >
              Features
            </a>
            <a 
              href="#docs" 
              className="text-gray-700 hover:text-primary-500 transition-colors py-2 cursor-pointer" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('docs');
              }}
            >
              Documentation
            </a>
            <a href="https://vocode.dev/pricing" className="text-gray-700 hover:text-primary-500 transition-colors py-2">Pricing</a>
            <a href="https://vocode.dev/blog" className="text-gray-700 hover:text-primary-500 transition-colors py-2">Blog</a>
            <a href="https://github.com/vocodedev/vocode-python" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-500 transition-colors py-2">GitHub</a>
            <a href="https://app.vocode.dev" className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors text-center">Dashboard</a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;