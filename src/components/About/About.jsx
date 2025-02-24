import { motion } from 'framer-motion';
import Davidetim from '/src/assets/davidetim.jpeg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const About = () => {
  const navigate = useNavigate();
  const [showThankYou, setShowThankYou] = useState(false);

  const skills = [
    "JavaScript (ES6+)", "HTML5", "React.js", "Tailwind CSS",
    "Node.js", "Express.js", "Restful APIs", "MongoDB",
    "SQL", "GIT & Github", "collaboration and teamwork",
    "Effective communication"
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/David-Etim-Edwin(basiccv).pdf';
    link.download = 'David-Etim-Edwin-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setShowThankYou(true);
    setTimeout(() => {
      navigate('/projects');
    }, 3000);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-48 h-48 flex-shrink-0"
            >
              <img 
                src={Davidetim}
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-yellow-400 shadow-lg"
              />
            </motion.div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
              <p className="text-gray-400 mb-8 max-w-3xl">
                I'm an aspiring Full-Stack Developer skilled in the MERN stack, with a passion for building 
                dynamic, user-friendly web applications. I thrive on solving problems with innovative 
                solutions and am eager to collaborate on projects that make a real-world impact.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-yellow-400">Full Stack Web Developer Training</h4>
                <p className="text-gray-400">Digital Career institute • 12/2024 - Present</p>
                <p className="text-gray-500">Berlin, Germany</p>
              </div>
              <div>
                <h4 className="text-yellow-400">Instrumentation and Control Engineering</h4>
                <p className="text-gray-400">Heritage polytechnic • 06/2012 - 06/2016</p>
                <p className="text-gray-500">EKET, Nigeria</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-4">Work Experience</h3>
            <div>
              <h4 className="text-yellow-400">Productive Associate</h4>
              <p className="text-gray-400">AutoProduction/Tesla • 11/2022 - 02/2024</p>
              <p className="text-gray-500">Berlin, Germany</p>
              <ul className="list-disc list-inside text-gray-400 mt-2">
                <li>Played a key role in ensuring product quality through rigorous inspections</li>
                <li>Collaborated with cross-functional teams, exceeding targets by 50%</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Skills</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-gray-800 text-yellow-400 px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <motion.button
              onClick={handleDownloadCV}
              className="bg-yellow-400 text-black px-6 py-3 rounded-full 
                       flex items-center gap-2 hover:bg-yellow-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download CV
            </motion.button>
          </div>
        </motion.div>
      </div>

      {showThankYou && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
        >
          <div className="bg-gray-900 p-8 rounded-lg border border-yellow-400 max-w-md">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="text-center"
            >
              <h3 className="text-2xl text-yellow-400 font-bold mb-4">Thank You!</h3>
              <p className="text-gray-300 mb-6">
                Thanks for downloading my resume! Looking forward to working with you.
              </p>
              <div className="flex justify-center items-center gap-3 text-gray-300">
                <span>Redirecting to projects</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6"
                >
                  <svg 
                    className="w-full h-full" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default About; 