'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b-2 border-vintage-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-vintage-primary font-vintage">
              SHTUKA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-vintage-text hover:text-vintage-primary transition-colors font-vintage">
              Главная
            </Link>
            <Link href="/portfolio" className="text-vintage-text hover:text-vintage-primary transition-colors font-vintage">
              Портфолио
            </Link>
            <Link href="/services" className="text-vintage-text hover:text-vintage-primary transition-colors font-vintage">
              Услуги
            </Link>
            <Link href="/about" className="text-vintage-text hover:text-vintage-primary transition-colors font-vintage">
              О нас
            </Link>
            <Link href="/contact" className="vintage-button">
              Контакты
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-vintage-primary hover:text-vintage-secondary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white border-b-2 border-vintage-secondary"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="block px-3 py-2 text-vintage-text hover:text-vintage-primary transition-colors font-vintage"
            onClick={() => setIsOpen(false)}
          >
            Главная
          </Link>
          <Link
            href="/portfolio"
            className="block px-3 py-2 text-vintage-text hover:text-vintage-primary transition-colors font-vintage"
            onClick={() => setIsOpen(false)}
          >
            Портфолио
          </Link>
          <Link
            href="/services"
            className="block px-3 py-2 text-vintage-text hover:text-vintage-primary transition-colors font-vintage"
            onClick={() => setIsOpen(false)}
          >
            Услуги
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 text-vintage-text hover:text-vintage-primary transition-colors font-vintage"
            onClick={() => setIsOpen(false)}
          >
            О нас
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 vintage-button"
            onClick={() => setIsOpen(false)}
          >
            Контакты
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 