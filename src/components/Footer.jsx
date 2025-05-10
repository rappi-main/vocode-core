import React from 'react';
import { FiGithub, FiTwitter, FiSlack, FiMail } from 'react-icons/fi';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExternalLink = (url) => {
    window.location.href = url;
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Vocode</h3>
            <p className="text-gray-400 mb-4">
              Build voice-based LLM apps in minutes with our open source library.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/vocodedev/vocode-python" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FiGithub size={20} />
              </a>
              <a href="https://twitter.com/vocodehq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="https://discord.gg/NaU4mMgcnC" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FiSlack size={20} />
              </a>
              <a href="mailto:support@vocode.dev" className="text-gray-400 hover:text-white transition-colors">
                <FiMail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#features" 
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('features');
                  }}
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="https://vocode.dev/pricing" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleExternalLink('https://vocode.dev/pricing');
                  }}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#docs" 
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('docs');
                  }}
                >
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/vocodedev/vocode-python/blob/main/roadmap.md" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://vocode.dev/blog" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleExternalLink('https://vocode.dev/blog');
                  }}
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="https://docs.vocode.dev/tutorials" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleExternalLink('https://docs.vocode.dev/tutorials');
                  }}
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/vocodedev/vocode-python/tree/main/examples" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Examples
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.gg/NaU4mMgcnC" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://vocode.dev/about" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleExternalLink('https://vocode.dev/about');
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="https://vocode.dev/careers" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleExternalLink('https://vocode.dev/careers');
                  }}
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="mailto:support@vocode.dev" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="https://vocode.dev/legal" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleExternalLink('https://vocode.dev/legal');
                  }}
                >
                  Legal
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Vocode. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a 
              href="https://vocode.dev/privacy" 
              className="text-gray-400 hover:text-white text-sm mr-6 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleExternalLink('https://vocode.dev/privacy');
              }}
            >
              Privacy Policy
            </a>
            <a 
              href="https://vocode.dev/terms" 
              className="text-gray-400 hover:text-white text-sm transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleExternalLink('https://vocode.dev/terms');
              }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;