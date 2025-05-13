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
    link.href = '/David Etim (ENG) CV.pdf';
    link.download = 'David-Etim-CV.pdf';
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
            <h3 className="text-xl font-semibold text-white mb-4">EDUCATION</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-yellow-400 font-bold text-lg">Full Stack Web Developer Training</h4>
                <span className="font-semibold text-white">Digital Career institute GmbH</span>
                <div className="text-gray-400 text-sm mt-1">12/2024 &bull; Berlin, Germany</div>
                <ul className="list-disc list-inside text-gray-400 mt-2 ml-4">
                  <li>Developed full-stack web applications Using MongoDB, Express.js, React, and Node.js, With expertise in RESTful API Integration, Real-Time Applications, And AI-Driven Solutions.</li>
                  <li>Completed German language training Up To B1 Level Through Lingoda While Attending A One-Year Full-Stack Development Course At DCI.</li>
                  <li>Implemented responsive front-end designs Using HTML, CSS, JavaScript, React, and Tailwind CSS, Ensuring Seamless User Experiences Across Devices.</li>
                  <li>Utilized version control and testing tools Like Git, GitHub, Postman, And Unit Testing Frameworks To Debug, Deploy, And Maintain High-Quality Software Solutions.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-yellow-400 font-bold text-lg">Higher National Diploma</h4>
                <span className="font-semibold text-white">Heritage Polytechnic</span>
                <div className="text-gray-400 text-sm mt-1">04/2011 – 10/2015 &bull; Eket, Akwa Ibom, Nigeria</div>
                <ul className="list-disc list-inside text-gray-400 mt-2 ml-4">
                  <li>Designed and developed a functional speaker system, integrating acoustic principles and electrical engineering concepts, as part of a hands-on course/thesis project.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-4">WORK EXPERIENCE</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-yellow-400 font-bold text-lg">Production Associate</h4>
                <span className="font-semibold text-white">Gigafactory Berlin-Brandenburg</span>
                <div className="text-gray-400 text-sm mt-1">11/2022 – 02/2024 &bull; Berlin, Germany</div>
                <ul className="list-disc list-inside text-gray-400 mt-2 ml-4">
                  <li>Manufactures Batteries, Powertrains, Seats, And Model Y Components, Including Casting, Stamping, Painting, Drivetrain, And Final Assembly.</li>
                  <li>Facilitated seamless communication and reporting Across Cross-Functional Teams, Ensuring Efficient Collaboration Between Software Development And Production Operations</li>
                  <li>Executed rigorous testing and troubleshooting Processes For Web Applications, Identifying And Resolving Critical Bugs To Uphold High-Quality Standards In Manufacturing Technologies.</li>
                  <li>Collaborated effectively with diverse teams To Implement Quality Assurance Practices, Enhancing System Reliability And Alignment With Gigafactory Production Goals.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-yellow-400 font-bold text-lg">Technical Support & Customer Service</h4>
                <span className="font-semibold text-white">Hase</span>
                <div className="text-gray-400 text-sm mt-1">02/2022 – 11/2025 &bull; Berlin, Germany</div>
                <ul className="list-disc list-inside text-gray-400 mt-2 ml-4">
                  <li>Provided technical support for daily operations, which included managing manual data entry and maintaining office organization to ensure a smooth workflow.</li>
                  <li>Welcomed guests and efficiently assisted with skateboard rentals and sales, helping to create a friendly atmosphere that enhanced customer experience.</li>
                  <li>Produced and edited engaging photo and video content for social media and marketing, which helped boost event documentation and increased visibility.</li>
                  <li>Participated in local art exhibitions and cultural events like "48 Stunden Neukölln," promoting community engagement and showcasing our commitment to local culture.</li>
                  <li>Contributed to neighborhood initiatives by supporting artistic collaborations, which helped strengthen local outreach and foster community connections.</li>
                </ul>
              </div>
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