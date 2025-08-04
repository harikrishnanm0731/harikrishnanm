import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I AM HUMAN
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I am a passionate computational biology scholar with a strong foundation in both 
              computer science and life sciences. My research focuses on developing innovative 
              computational approaches to solve complex biological problems.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Through my academic journey, I have gained expertise in bioinformatics, 
              data analysis, machine learning, and statistical modeling, with applications 
              in genomics, proteomics, and systems biology.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Current Education</h3>
                  <p className="text-gray-600">Masters in Computational Biology</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <Award className="text-teal-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Research Focus</h3>
                  <p className="text-gray-600">Bioinformatics & Machine Learning</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Calendar className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Expected Graduation</h3>
                  <p className="text-gray-600">2025</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="font-semibold text-gray-900">Masters in Computational Biology</h4>
                <p className="text-gray-600">University Name • 2023-2025</p>
                <p className="text-gray-500 text-sm mt-2">
                  Focus: Bioinformatics, Machine Learning, Systems Biology
                </p>
              </div>
              
              <div className="border-l-4 border-teal-600 pl-6">
                <h4 className="font-semibold text-gray-900">Bachelor of Science in Biology</h4>
                <p className="text-gray-600">University Name • 2019-2023</p>
                <p className="text-gray-500 text-sm mt-2">
                  Specialization: Molecular Biology and Genetics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;