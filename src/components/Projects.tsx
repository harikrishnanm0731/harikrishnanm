import React from 'react';
import { Github, ExternalLink, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Genomic Variant Analysis Pipeline",
      description: "Developed a comprehensive pipeline for analyzing genomic variants from whole-genome sequencing data. Implements quality control, variant calling, and annotation using industry-standard tools.",
      technologies: ["Python", "GATK", "BWA", "VCFtools", "Docker"],
      image: "https://images.pexels.com/photos/3825368/pexels-photo-3825368.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      demo: "#",
      date: "2024"
    },
    {
      title: "Protein Structure Prediction Model",
      description: "Implemented a machine learning model using deep neural networks to predict protein secondary structure from amino acid sequences. Achieved 85% accuracy on benchmark datasets.",
      technologies: ["Python", "TensorFlow", "BioPython", "Jupyter", "Pandas"],
      image: "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      demo: "#",
      date: "2024"
    },
    {
      title: "RNA-seq Data Analysis Workflow",
      description: "Created an automated workflow for RNA-seq data analysis including quality assessment, alignment, quantification, and differential expression analysis with statistical validation.",
      technologies: ["R", "Bioconductor", "DESeq2", "Salmon", "FastQC"],
      image: "https://images.pexels.com/photos/3825365/pexels-photo-3825365.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      demo: "#",
      date: "2023"
    },
    {
      title: "Phylogenetic Tree Constructor",
      description: "Built a web application for constructing and visualizing phylogenetic trees from multiple sequence alignments with interactive features and export capabilities.",
      technologies: ["JavaScript", "D3.js", "Python", "Flask", "MUSCLE"],
      image: "https://images.pexels.com/photos/3825371/pexels-photo-3825371.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      demo: "#",
      date: "2023"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Computational solutions addressing real-world biological challenges
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg text-sm font-medium text-gray-600 flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {project.date}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Tag size={16} className="text-gray-400 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Technologies</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;