import React from 'react';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gray-50">  
      <div >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image / Visual */}
          <div className="relative">
            {/* Image Container */}
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl  border border-slate-700 group">
              {/* Replace src with your actual photo path */}
              <img 
                src="PhotoWithSuite.jpeg" 
                alt="Profile" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale hover:grayscale-0"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
            </div>

          </div>

          {/* Right Side: Text Content */}
          <div>
            <h2 className="text-blue-500 font-semibold tracking-wide uppercase mb-3">Who I Am</h2>
            <h3 className="text-3xl md:text-4xl font-bold  mb-6 leading-tight">
              Passionate about building <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                scalable web solutions
              </span>.
            </h3>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              I am a dedicated **Full Stack Developer** with a deep interest in Python, Django, and React. My journey involves not just writing code, but solving complex problems and creating intuitive digital experiences.
            </p>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Currently, I focus on building responsive web applications and integrating AI-driven features. I believe in clean architecture, performance optimization, and continuous learning.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;