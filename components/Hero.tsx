
'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Diagonal Image Section */}
      <div className="absolute inset-0 transform rotate-3 scale-110 opacity-10">
        <img 
          src="https://readdy.ai/api/search-image?query=modern%20abstract%20financial%20data%20visualization%20with%20flowing%20lines%2C%20geometric%20patterns%2C%20blue%20and%20white%20gradient%20background%2C%20clean%20minimalist%20design%2C%20professional%20accounting%20symbols%20floating%20in%20space%2C%20futuristic%20business%20atmosphere&width=1920&height=1080&seq=hero-abstract&orientation=landscape"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen">
          {/* Left Content - Offset positioning */}
          <div className={`lg:col-span-7 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="mb-6">
                <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  ✨ Más de 15 años de experiencia
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                  Tax Filling
                  <span className="block text-blue-600 italic">Consulting S.A.S</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Transformamos la gestión financiera de tu empresa con soluciones innovadoras, 
                  tecnología avanzada y un enfoque completamente personalizado.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="group bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg whitespace-nowrap cursor-pointer"
                >
                  <span className="flex items-center justify-center">
                    Explorar Servicios
                    <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </span>
                </button>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
                >
                  Consulta Gratuita
                </button>
              </div>
            </div>
          </div>

          {/* Right Visual Elements */}
          <div className={`lg:col-span-5 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'}`}>
            <div className="relative">
              {/* Floating Cards */}
              <div className="absolute -top-8 -left-8 bg-white rounded-2xl p-4 shadow-xl transform rotate-6 hover:rotate-3 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-line-chart-line text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">Crecimiento</div>
                    <div className="text-2xl font-bold text-green-600">+25%</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-4 shadow-xl transform -rotate-6 hover:-rotate-3 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-shield-check-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">Cumplimiento</div>
                    <div className="text-2xl font-bold text-blue-600">100%</div>
                  </div>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://readdy.ai/api/search-image?query=modern%20professional%20calculator%20with%20financial%20documents%2C%20charts%20and%20graphs%20floating%20around%2C%20clean%20white%20background%20with%20blue%20accents%2C%203D%20isometric%20style%2C%20sophisticated%20business%20tools%20arrangement%2C%20minimalist%20professional%20design&width=600&height=600&seq=hero-main&orientation=squarish"
                  alt="Servicios Contables"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={() => scrollToSection('servicios')}
          className="flex flex-col items-center text-blue-600 hover:text-blue-800 transition-colors animate-bounce cursor-pointer"
        >
          <span className="text-sm font-medium mb-2">Descubre más</span>
          <div className="w-6 h-6 flex items-center justify-center">
            <i className="ri-arrow-down-line text-2xl"></i>
          </div>
        </button>
      </div>
    </section>
  );
}
