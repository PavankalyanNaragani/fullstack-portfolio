import React, { useState, useEffect } from 'react';
import { fetchSkills } from '../api';
// 1. Import specific brand icons
import { 
  FaPython, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaDatabase 
} from 'react-icons/fa';
import { 
  SiDjango, SiJavascript, SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiRedis, SiLinux, SiMysql
} from 'react-icons/si';
import { BsCodeSlash } from 'react-icons/bs'; // Fallback icon

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getSkills = async () => {
      const data = await fetchSkills();
      const sortedData = data.sort((a, b) => b.proficiency - a.proficiency);
      setSkills(sortedData);
    };
    getSkills();
  }, []);

  // 2. The "Smart" Icon Mapper
  // This checks the skill name (case-insensitive) and returns the right icon component
  const getSkillIcon = (skillName) => {
    const name = skillName.toLowerCase();

    // Mapping logic
    if (name.includes('python')) return <FaPython className="text-blue-500" />;
    if (name.includes('django')) return <SiDjango className="text-green-900" />;
    if (name.includes('react')) return <FaReact className="text-blue-400" />;
    if (name.includes('javascript') || name.includes('js')) return <SiJavascript className="text-yellow-400" />;
    if (name.includes('html')) return <FaHtml5 className="text-orange-500" />;
    if (name.includes('css')) return <FaCss3Alt className="text-blue-600" />;
    if (name.includes('tailwind')) return <SiTailwindcss className="text-cyan-400" />;
    if (name.includes('typescript')) return <SiTypescript className="text-blue-600" />;
    if (name.includes('node')) return <FaNodeJs className="text-green-500" />;
    if (name.includes('docker')) return <FaDocker className="text-blue-500" />;
    if (name.includes('aws')) return <FaAws className="text-orange-400" />;
    if (name.includes('git')) return <FaGitAlt className="text-red-500" />;
    if (name.includes('sql') || name.includes('database')) return <FaDatabase className="text-gray-500" />;
    if (name.includes('postgres')) return <SiPostgresql className="text-blue-400" />;
    if (name.includes('mongo')) return <SiMongodb className="text-green-500" />;
    if (name.includes('linux')) return <SiLinux className="text-black" />;
    
    // 3. Fallback for unknown skills
    return <BsCodeSlash className="text-gray-400" />;
  };

  const getLevelLabel = (score) => {
    if (score >= 90) return 'Expert';
    if (score >= 75) return 'Advanced';
    if (score >= 50) return 'Intermediate';
    return 'Beginner';
  };

  const getLevelColor = (score) => {
    if (score >= 90) return 'bg-purple-100 text-purple-800';
    if (score >= 75) return 'bg-blue-100 text-blue-800';
    if (score >= 50) return 'bg-green-100 text-green-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Proficiency</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div 
              key={skill.id} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {getSkillIcon(skill.name)}
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2">{skill.name}</h3>
              
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getLevelColor(skill.proficiency)}`}>
                {getLevelLabel(skill.proficiency)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;