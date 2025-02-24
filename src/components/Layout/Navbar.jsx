import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-green-400 font-bold">
            <span className="mr-2">$</span>
            <span className="text-gray-300">cd</span>
            <span className="text-yellow-400">/davidetim</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-gray-300 hover:text-green-400">
                <span className="text-green-400">~</span>/home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-green-400">
                <span className="text-green-400">~</span>/about
              </Link>
              <Link to="/projects" className="text-gray-300 hover:text-green-400">
                <span className="text-green-400">~</span>/projects
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-green-400">
                <span className="text-green-400">~</span>/contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open menu</span>
            <div className="space-y-2">
              <div className="w-8 h-0.5 bg-gray-300"></div>
              <div className="w-8 h-0.5 bg-gray-300"></div>
              <div className="w-8 h-0.5 bg-gray-300"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block text-gray-300 hover:text-green-400 px-3 py-2">
              <span className="text-green-400">~</span>/home
            </Link>
            <Link to="/about" className="block text-gray-300 hover:text-green-400 px-3 py-2">
              <span className="text-green-400">~</span>/about
            </Link>
            <Link to="/projects" className="block text-gray-300 hover:text-green-400 px-3 py-2">
              <span className="text-green-400">~</span>/projects
            </Link>
            <Link to="/contact" className="block text-gray-300 hover:text-green-400 px-3 py-2">
              <span className="text-green-400">~</span>/contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 