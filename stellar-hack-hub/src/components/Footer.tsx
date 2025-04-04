
import { Rocket, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-space-mid-blue border-t border-space-light-blue/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Rocket className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold space-gradient-text">Stellar Hack Hub</span>
            </Link>
            <p className="text-gray-300 mb-4">
              The premier platform for hackathon events and showcasing innovative projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Github">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/hackathons" className="text-gray-300 hover:text-white transition-colors">Hackathons</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/submit" className="text-gray-300 hover:text-white transition-colors">Submit Project</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">API</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Forums</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-4">Stay updated with new hackathons and featured projects</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-space-light-blue/10 border border-space-light-blue/30 rounded-l-md px-4 py-2 focus:outline-none focus:border-primary flex-grow"
              />
              <button className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-space-light-blue/20 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 Stellar Hack Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
