import React from 'react';
import { Code, Database, BarChart3, Brain, Dna, Microscope } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-600" size={24} />,
      skills: ["Python", "R", "Java", "C++", "JavaScript", "MATLAB"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Bioinformatics Tools",
      icon: <Dna className="text-green-600" size={24} />,
      skills: ["BLAST", "BioPython", "Bioconductor", "GATK", "SAMtools", "BEDTOOLS"],
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Data Analysis",
      icon: <BarChart3 className="text-purple-600" size={24} />,
      skills: ["Pandas", "NumPy", "SciPy", "Matplotlib", "Seaborn", "ggplot2"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Machine Learning",
      icon: <Brain className="text-orange-600" size={24} />,
      skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras", "Random Forest", "SVM"],
      color: "bg-orange-50 border-orange-200"
    },
    {
      title: "Databases",
      icon: <Database className="text-teal-600" size={24} />,
      skills: ["SQL", "MongoDB", "PostgreSQL", "NCBI", "UniProt", "PDB"],
      color: "bg-teal-50 border-teal-200"
    },
    {
      title: "Laboratory Skills",
      icon: <Microscope className="text-red-600" size={24} />,
      skills: ["PCR", "DNA Sequencing", "Gel Electrophoresis", "Cell Culture", "Microscopy", "Spectroscopy"],
      color: "bg-red-50 border-red-200"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit spanning computational methods and biological techniques
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`${category.color} border-2 rounded-xl p-6 hover:shadow-lg transition-shadow`}>
              <div className="flex items-center mb-4">
                <div className="bg-white p-2 rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;