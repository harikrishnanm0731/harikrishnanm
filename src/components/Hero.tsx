import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Your Name
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
            Computational Biology Masters Scholar
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Passionate about leveraging computational methods to unravel biological complexities. 
            Specialized in bioinformatics, data analysis, and machine learning applications in life sciences.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            View My Work
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium">
            Download CV
          </button>
        </div>
        
        <div className="animate-bounce">
          <ChevronDown size={32} className="text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;