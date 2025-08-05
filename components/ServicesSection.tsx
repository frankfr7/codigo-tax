
'use client';

import { useState } from 'react';

const services = [
  {
    id: 1,
    title: "OUTSORSING CONTABLE",
    description: "Gestión integral de la contabilidad y procesamiento de transacciones financieras",
    icon: "ri-file-text-line",
    color: "blue",
    features: ["Elaboración y análisis de estados financieros bajo NIIF", "Cumplimiento de normativas contables y fiscales vigentes en Colombia", "Implementación de controles internos para la mitigación de riesgos", "Ley 1314 de 2009, Decreto 2420 de 2015"]
  },
  {
    id: 2,
    title: "AUDITORÍA Y ASEGURAMIENTO",
    description: "Auditoría de cumplimiento legal y financiero conforme a lo establecido en el Código de Comercio y la Ley 43 de 1990",
    icon: "ri-file-shield-line",
    color: "green",
    features: ["Evaluación de riesgos y control interno", "Verificación y certificación de estados financieros (NIAs)", "Cumplimiento de obligaciones tributarias y societarias", "Reportes a Superintendencia de Sociedades y DIAN"]
  },
  {
    id: 3,
    title: "AUDITORÍA EXTERNA",
    description: "Evaluación objetiva de la información financiera para garantizar la transparencia y confiabilidad",
    icon: "ri-search-line",
    color: "purple",
    features: ["Identificación de riesgos financieros y operacionales", "Implementación de estrategias para mejora continua", "Cumplimiento con estándares internacionales (NIAs)", "Análisis y revisión de procesos contables"]
  },
  {
    id: 4,
    title: "ASESORÍA",
    description: "Planeación tributaria estratégica para optimizar el pago de impuestos bajo el Estatuto Tributario Colombiano",
    icon: "ri-lightbulb-line",
    color: "orange",
    features: ["Declaraciones de impuestos nacionales y distritales", "Cumplimiento con normativas fiscales", "Preparación de información exógena según DIAN", "IVA, Renta e ICA"]
  }
];

const colorClasses = {
  blue: "bg-blue-500 text-white",
  green: "bg-green-500 text-white",
  purple: "bg-purple-500 text-white",
  orange: "bg-orange-500 text-white",
  teal: "bg-teal-500 text-white",
  rose: "bg-rose-500 text-white"
};

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 transform rotate-12 scale-150"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Servicios Especializados
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Soluciones Innovadoras
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada servicio está diseñado para impulsar el crecimiento de tu empresa 
            con metodologías probadas y tecnología de vanguardia.
          </p>
        </div>

        {/* Circular Layout Container */}
        <div className="relative flex items-center justify-center min-h-[800px]">
          {/* Central Element */}
          <div className="absolute z-10 w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
            <div className="text-white text-center">
              <i className="ri-building-line text-3xl mb-2 block"></i>
              <div className="text-xs font-semibold">Tax Filling</div>
            </div>
          </div>

          {/* Circular Services */}
          {services.map((service, index) => {
            // Calculate position for circular layout
            const angle = (index * 90) - 45; // 90 degrees apart, starting from top-right
            const radius = 280; // Distance from center
            const x = Math.cos(angle * Math.PI / 180) * radius;
            const y = Math.sin(angle * Math.PI / 180) * radius;

            return (
              <div
                key={service.id}
                className="absolute w-80 transition-all duration-500 transform hover:scale-110"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  transformOrigin: 'center'
                }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Connecting Line */}
                <div 
                  className="absolute w-1 bg-gradient-to-r from-blue-300 to-transparent opacity-30 z-0"
                  style={{
                    height: `${radius - 64}px`,
                    left: '50%',
                    top: '50%',
                    transformOrigin: 'top center',
                    transform: `translateX(-50%) translateY(-50%) rotate(${angle + 180}deg)`
                  }}
                ></div>

                {/* Service Card */}
                <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden relative z-10 cursor-pointer">
                  {/* Icon with color */}
                  <div className={`w-14 h-14 ${colorClasses[service.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                    <i className={`${service.icon} text-xl`}></i>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm text-center">
                    {service.description}
                  </p>
                  
                  {/* Features - Appear on hover */}
                  <div className={`transition-all duration-300 ${
                    activeService === service.id ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
                  } overflow-hidden`}>
                    <div className="border-t border-gray-200 pt-3">
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-gray-600">
                            <div className="w-3 h-3 flex items-center justify-center mr-2">
                              <i className="ri-check-line text-green-500 text-xs"></i>
                            </div>
                            {feature.length > 40 ? feature.substring(0, 40) + '...' : feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full transform translate-x-6 -translate-y-6 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ¿Necesitas una solución personalizada?
            </h3>
            <p className="text-gray-600 mb-6">
              Contacta con nuestro equipo para una consulta gratuita y descubre 
              cómo podemos optimizar la gestión financiera de tu empresa.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Solicitar Consulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
