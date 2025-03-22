import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Shtuka
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
              About
            </Link>
            <Link href="#services" className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
              Services
            </Link>
            <Link href="#portfolio" className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
              Portfolio
            </Link>
            <Link href="#contact" className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
