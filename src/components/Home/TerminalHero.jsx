import { motion } from 'framer-motion';
import Davidetim from '/src/assets/davidetim.jpeg';

const TerminalHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-8">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-64 h-64 md:w-80 md:h-80 relative flex-shrink-0"
        >
          <img 
            src={Davidetim}
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-green-400 shadow-2xl"
          />
          <div className="absolute inset-0 rounded-full border-4 border-green-400 animate-pulse"></div>
        </motion.div>

        {/* Terminal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 text-gray-300">
              <div className="flex items-center text-green-400 mb-4">
                <span className="mr-2">davidetim $</span>
                <span className="text-white">cat aboutdavid</span>
              </div>
              
              <div className="text-gray-300 mb-6">
                <p className="mb-4">
                  Hello! I'm David Etim. A Full-Stack Developer skilled in
                  the MERN stack, with a passion for building dynamic, user-friendly web applications.
                </p>
                <p>
                  I thrive on solving problems with innovative solutions and am eager to collaborate on
                  projects that make a real-world impact.
                </p>
              </div>

              <div className="flex items-center text-green-400 mb-4">
                <span className="mr-2">davidetim $</span>
                <span className="text-white">cd skills/tools</span>
              </div>

              <div className="flex items-center text-green-400 mb-4">
                <span className="mr-2">skills/tools (main) $</span>
                <span className="text-white">ls</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
                <div>Javascript</div>
                <div>React</div>
                <div>Node.js</div>
                <div>Mongodb</div>
                <div>Express.js</div>
                <div>Git</div>
                <div>Html5</div>
                <div>Css</div>
                <div>Tailwind</div>
                <div>Next.js</div>
                <div>Typescript</div>
                <div>Cloudinary</div>
             </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalHero; 