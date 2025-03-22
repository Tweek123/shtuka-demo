import Link from 'next/link';
import React from 'react';
import Container from './Container';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <Container>
        <div className="flex justify-between items-center py-6">
          <Link href="/" className="text-xl font-bold">
            SHTUKA
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-gray-600">Главная</Link>
            <div className="relative">
              <button className="hover:text-gray-600">Услуги</button>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2">
                <Link href="/services/light-start" className="block px-4 py-2 hover:bg-gray-50">Лёгкий старт</Link>
                <Link href="/services/comfort" className="block px-4 py-2 hover:bg-gray-50">Комфорт</Link>
                <Link href="/services/premium" className="block px-4 py-2 hover:bg-gray-50">Премиум</Link>
              </div>
            </div>
            <Link href="/portfolio" className="hover:text-gray-600">Портфолио</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
