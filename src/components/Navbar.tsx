import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onBookingClick: () => void;
}

const WaveformLogo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-purple-500"
  >
    <path
      d="M4 16C4 16 6 10 8 10C10 10 12 22 14 22C16 22 18 6 20 6C22 6 24 18 26 18C28 18 30 16 30 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animate-pulse"
    />
  </svg>
);

const Navbar: React.FC<NavbarProps> = ({ onBookingClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    onBookingClick();
  };

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <WaveformLogo />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              MixMasterMilani
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-purple-500 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-purple-500 transition-colors">About</Link>
            <Link to="/blog" className="hover:text-purple-500 transition-colors">Blog</Link>
            <button
              onClick={handleBookClick}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-opacity"
            >
              Book Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-500 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md hover:bg-purple-500/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md hover:bg-purple-500/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 rounded-md hover:bg-purple-500/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <button
                onClick={handleBookClick}
                className="w-full px-3 py-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-center"
              >
                Book Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;