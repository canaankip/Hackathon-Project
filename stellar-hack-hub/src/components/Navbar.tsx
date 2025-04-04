
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-space-dark-blue/80 backdrop-blur-md border-b border-space-light-blue/20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold space-gradient-text">John Doe</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="text-white/80 hover:text-white transition-colors">About Me</Link>
          <Link to="/education" className="text-white/80 hover:text-white transition-colors">Education</Link>
          <Link to="/interests" className="text-white/80 hover:text-white transition-colors">Interests</Link>
          <Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
          <Button className="bg-gradient-to-r from-space-purple to-space-indigo button-shine">
            Download CV
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-space-mid-blue border-b border-space-light-blue/20">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </Link>
            <Link 
              to="/education" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Education
            </Link>
            <Link 
              to="/interests" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Interests
            </Link>
            <Link 
              to="/contact" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-gradient-to-r from-space-purple to-space-indigo w-full button-shine">
              Download CV
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
