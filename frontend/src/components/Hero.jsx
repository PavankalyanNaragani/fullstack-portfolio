import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="bg-gray-50 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Optional: Background decoration circle */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="text-center px-6 z-10 max-w-4xl mx-auto">
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Hi, I'm <span className="text-blue-600">Pavan Kalyan</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          I am a Full Stack Developer specializing in <span className="font-semibold text-gray-800">Python, Django, and React</span>. 
          I build scalable web applications and AI-powered solutions that solve real-world problems.
        </p>

        {/* Action Buttons Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          
          {/* Resume Download Button */}
          <a 
            href="\public\PavanKalyan_Naragani_Resume_1side.pdf" 
            download="PavanKalyan_Naragani.pdf"
            className="group flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <FaFileDownload className="group-hover:animate-bounce" />
            Download Resume
          </a>

          {/* Social Links Container */}
          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/pavankalyannaragani/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-700 text-3xl transition duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            
            <a 
              href="https://github.com/PavankalyanNaragani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 text-3xl transition duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            
            <a 
              href="mailto:pavankalyannaragani@gmail.com/" 
              className="text-gray-500 hover:text-red-600 text-3xl transition duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;