
'use client';

import { useState, useEffect } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('historia');

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('nosotros');
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = elementTop < window.innerHeight - 100;
        setIsVisible(elementVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = {
    historia: {
      title: "Historia",
      content: "De la unión de un grupo de profesionales nace Tax Filling Consulting S.A.S, bajo el marco de la normatividad actual y las herramientas que nos suministran las nuevas tecnologías, buscamos cambiar la atención en la prestación de los servicios contables en la actualidad, ofreciendo un amplio portafolio integral y personalizado para un sector empresarial nacional, brindando acompañamiento en los procesos productivos de nuestras empresas clientes, con el fin de mejorar los procedimientos en las organizaciones."
    },
    mision: {
      title: "Misión",
      content: "Somos el mejor aliado para contribuir al desarrollo eficaz y oportuno de su organización en materia contable, tributaria y administrativa, contamos con profesionales idóneos y comprometidos, que trabajan de manera continual con eficiencia y calidez humana, nuestros servicios son prestados por profesionales capacitados que cumplen con todos los estándares de calidad, ofreciendo así un alto sentido de responsabilidad social y económica."
    },
    vision: {
      title: "Visión",
      content: "Ser en el 2030 reconocidos en Antioquia como la empresa líder en la prestación de servicios contables, tributarios y administrativos, reconocidos por nuestros altos estándares de calidad, excelencia en atención y profesionalismo en el trabajo en equipo, para la optimización de procesos."
    },
    valores: {
      title: "Valores",
      content: "Nuestros valores corporativos son los pilares fundamentales que guían cada una de nuestras acciones y decisiones, reflejando nuestro compromiso con la excelencia, la integridad y el servicio de calidad hacia nuestros clientes y la comunidad empresarial."
    }
  };

  return (
    <section id="nosotros" className="py-20 bg-white relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Visual Elements */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'}`}>
            <div className="relative">
              {/* Main Image with Creative Frame */}
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-500">
                <img 
                  src="https://static.readdy.ai/image/748d978aaeb463b0845dc645309098ce/7e79a9574e68a8d07704a2ab5c297f79.jfif"
                  alt="Oficina Tax Filling Consulting S.A.S"
                  className="w-full h-80 object-cover rounded-2xl object-top"
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-8 -left-8 bg-white rounded-2xl p-4 shadow-xl transform -rotate-6 hover:-rotate-3 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2030</div>
                  <div className="text-sm text-gray-600">Meta</div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-4 shadow-xl transform rotate-6 hover:rotate-3 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Calidad</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'}`}>
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="mb-8">
                <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  💼 Nuestra Empresa
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Tax Filling <span className="text-blue-600">Consulting</span>
                  <br />
                  <span className="text-2xl font-normal text-gray-600">S.A.S</span>
                </h2>
              </div>

              {/* Interactive Tabs */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {Object.entries(tabs).map(([key, tab]) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                        activeTab === key
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 min-h-[160px]">
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {tabs[activeTab as keyof typeof tabs].content}
                  </p>
                </div>
              </div>

              {/* Key Numbers */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">S.A.S</div>
                  <div className="text-sm text-gray-600">Empresa</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">Antioquia</div>
                  <div className="text-sm text-gray-600">Ubicación</div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 text-center">
                <button 
                  onClick={() => {
                    const element = document.getElementById('contacto');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
                >
                  Contáctanos Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
