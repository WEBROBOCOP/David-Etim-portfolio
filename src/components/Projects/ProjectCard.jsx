import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700"
    >
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-400 text-sm">{project.title}.js</div>
      </div>
      
      {/* Project Image */}
      <div className="w-full h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="text-gray-300 mb-4">
          <span className="text-green-400">const</span>{" "}
          <span className="text-yellow-400">project</span>{" "}
          <span className="text-green-400">=</span>{" "}
          <span className="text-gray-400">{`{`}</span>
        </div>
        
        <div className="pl-4 mb-4">
          <div className="text-gray-300">
            <span className="text-purple-400">description:</span>{" "}
            <span className="text-green-300">"{project.description}"</span>,
          </div>
          
          <div className="text-gray-300">
            <span className="text-purple-400">technologies:</span>{" "}
            <span className="text-gray-400">[</span>
            {project.technologies.map((tech, index) => (
              <span key={index}>
                <span className="text-green-300">"{tech}"</span>
                {index < project.technologies.length - 1 && ", "}
              </span>
            ))}
            <span className="text-gray-400">]</span>,
          </div>
        </div>
        
        <div className="text-gray-300 mb-6">{`}`}</div>
        
        <div className="flex gap-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-400"
          >
            $ git clone
          </a>
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-400"
          >
            $ npm start
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 