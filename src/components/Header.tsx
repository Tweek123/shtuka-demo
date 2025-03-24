'use client'

import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-0">
        <div className="flex justify-between items-center py-2">
          <Link href="/" className="text-xl font-bold">
            SHTUKA
          </Link>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-8`}>
            <Link href="/" className="block md:inline-block hover:text-gray-600">Главная</Link>
            <div className="relative">
              <button className="hover:text-gray-600">Услуги</button>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2">
                <Link href="/services/light-start" className="block px-4 py-2 hover:bg-gray-50">Лёгкий старт</Link>
                <Link href="/services/comfort" className="block px-4 py-2 hover:bg-gray-50">Комфорт</Link>
                <Link href="/services/premium" className="block px-4 py-2 hover:bg-gray-50">Премиум</Link>
              </div>
            </div>
            <Link href="/portfolio" className="block md:inline-block hover:text-gray-600">Портфолио</Link>
          </nav>
        </div>
    </header>
  );
};

export default Header;