
'use client';

import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://static.readdy.ai/image/748d978aaeb463b0845dc645309098ce/0ca3004d155043e3636bc60a1fb65439.jfif" 
                alt="Tax Filing Consulting" 
                className="h-10 w-10 object-contain"
              />
              <div className="text-xl font-bold">
                Tax Filing <span className="text-blue-400">Consulting</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Soluciones contables profesionales con más de 15 años de experiencia 
              en el sector empresarial.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-facebook-fill text-xl"></i>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-linkedin-fill text-xl"></i>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-twitter-fill text-xl"></i>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-instagram-fill text-xl"></i>
                </div>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><Link href="#servicios" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Contabilidad General</Link></li>
              <li><Link href="#servicios" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Declaraciones Tributarias</Link></li>
              <li><Link href="#servicios" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Nómina y Seguridad Social</Link></li>
              <li><Link href="#servicios" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Asesoría Fiscal</Link></li>
              <li><Link href="#servicios" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Constitución de Empresas</Link></li>
              <li><Link href="#servicios" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Revisoría Fiscal</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><Link href="#nosotros" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Sobre Nosotros</Link></li>
              <li><Link href="#contacto" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Contacto</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Política de Privacidad</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Términos de Servicio</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Preguntas Frecuentes</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 flex items-center justify-center mt-1">
                  <i className="ri-map-pin-line"></i>
                </div>
                <div>
                  <p>Carrera 49 N° 50 - 22</p>
                  <p>Medellín, Antioquia</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-line"></i>
                </div>
                <p>302 105 3609</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-line"></i>
                </div>
                <p>taxfillingconsulting@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Tax Filing Consulting S.A.S. Todos los derechos reservados.
          </p>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors transform hover:scale-105 cursor-pointer"
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <i className="ri-arrow-up-line text-xl"></i>
        </div>
      </button>
    </footer>
  );
}