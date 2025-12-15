import React, { useState, useEffect } from 'react';
import { fetchEducation, fetchExperience } from '../api';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const eduData = await fetchEducation();
      const expData = await fetchExperience();
      setEducation(eduData);
      setExperience(expData);
    };
    getData();
  }, []);

  // Helper to format dates (e.g., "2023-01-01" -> "Jan 2023")
  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const options = { year: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section id="experience" className="py-20 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Experience Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-800">
              <FaBriefcase className="text-blue-600" /> Experience
            </h2>
            <div className="space-y-8 border-l-2 border-blue-200 pl-8 ml-4">
              {experience.map((job) => (
                <div key={job.id} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] top-0 bg-white border-4 border-blue-600 w-6 h-6 rounded-full"></div>
                  
                  <h3 className="text-xl font-bold text-gray-800">{job.role}</h3>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">{job.company}</h4>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <FaCalendarAlt className="mr-2" />
                    {formatDate(job.start_date)} - {job.is_current ? 'Present' : formatDate(job.end_date)}
                  </div>
                  
                  <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-800">
              <FaGraduationCap className="text-green-600" /> Education
            </h2>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                      <p className="text-blue-600 font-medium">{edu.institution}</p>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {new Date(edu.start_date).getFullYear()} - {edu.end_date ? new Date(edu.end_date).getFullYear() : 'Present'}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;