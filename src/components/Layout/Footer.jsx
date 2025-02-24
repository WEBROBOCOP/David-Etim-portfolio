const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <span className="text-green-400">$</span> echo "© 2025 David Etim"
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com/in/davidedwinetim" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400"
            >
              $ open linkedin.url
            </a>
            <a 
              href="https://github.com/WEBROBOCOP" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400"
            >
              $ git remote
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 