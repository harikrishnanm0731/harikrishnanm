import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, FileText, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Interested in collaboration, research opportunities, or just want to connect? 
            I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-300">your.email@university.edu</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-green-600 p-3 rounded-lg mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-purple-600 p-3 rounded-lg mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-300">University City, State</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <FileText size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="Message Subject"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Your Name. All rights reserved. | Computational Biology Portfolio
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;