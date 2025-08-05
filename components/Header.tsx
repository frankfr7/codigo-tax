
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="https://static.readdy.ai/image/748d978aaeb463b0845dc645309098ce/0ca3004d155043e3636bc60a1fb65439.jfif" 
              alt="Tax Filing Consulting" 
              className="h-12 w-12 object-contain"
            />
            <div className="text-2xl font-bold text-gray-800">
              Tax Filing <span className="text-blue-600">Consulting</span>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Inicio
            </Link>
            <Link href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Servicios
            </Link>
            <Link href="#nosotros" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Nosotros
            </Link>
            <Link href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Contacto
            </Link>
          </nav>

          <button 
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-menu-line text-xl"></i>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-2">
              <Link href="#inicio" className="py-2 text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
                Inicio
              </Link>
              <Link href="#servicios" className="py-2 text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
                Servicios
              </Link>
              <Link href="#nosotros" className="py-2 text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
                Nosotros
              </Link>
              <Link href="#contacto" className="py-2 text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
