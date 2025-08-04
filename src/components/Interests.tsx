import React from 'react';
import { Dna as Dna2, Brain, TreePine, Microscope, Globe, BookOpen } from 'lucide-react';

const Interests = () => {
  const interests = [
    {
      icon: <Dna2 className="text-blue-600" size={32} />,
      title: "Genomics & Epigenomics",
      description: "Exploring genetic variations and epigenetic modifications that influence disease susceptibility and treatment responses."
    },
    {
      icon: <Brain className="text-purple-600" size={32} />,
      title: "Systems Biology",
      description: "Understanding complex biological networks and their emergent properties through computational modeling and simulation."
    },
    {
      icon: <Microscope className="text-green-600" size={32} />,
      title: "Structural Bioinformatics",
      description: "Analyzing protein structures and their relationships to function using computational methods and molecular dynamics."
    },
    {
      icon: <TreePine className="text-orange-600" size={32} />,
      title: "Evolutionary Biology",
      description: "Investigating evolutionary relationships and processes through phylogenetic analysis and comparative genomics."
    },
    {
      icon: <Globe className="text-teal-600" size={32} />,
      title: "Ecology & Environment",
      description: "Applying computational approaches to understand ecosystem dynamics and environmental impacts on biodiversity."
    },
    {
      icon: <BookOpen className="text-red-600" size={32} />,
      title: "Science Communication",
      description: "Passionate about making complex scientific concepts accessible through clear communication and visualization."
    }
  ];

  return (
    <section id="interests" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Interests</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Areas of scientific curiosity that drive my research and academic pursuits
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {interest.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{interest.title}</h3>
              <p className="text-gray-600 leading-relaxed">{interest.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Current Research Focus</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Thesis Project</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                My current research focuses on developing machine learning approaches for predicting 
                drug-target interactions using multi-omics data integration. This work has implications 
                for personalized medicine and drug discovery.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Machine Learning</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Drug Discovery</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Multi-omics</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Future Directions</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  AI-driven drug repurposing strategies
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Network medicine approaches
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Precision medicine applications
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;