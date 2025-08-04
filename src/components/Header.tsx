import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-900">Your Name</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#interests" className="text-gray-700 hover:text-blue-600 transition-colors">Interests</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;