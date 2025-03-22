'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import '../../styles/theme.css'

interface ServiceType {
  icon: string;
  title: string;
  description: string;
  details: string;
}

const services: ServiceType[] = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'We create modern, responsive websites that drive results.',
    details: 'We develop custom web applications using the latest technologies and frameworks.'
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    details: 'We design and develop mobile apps that are fast, secure, and user-friendly.'
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive designs that enhance user experience.',
    details: 'Our team of designers create visually stunning and user-centered designs that drive engagement.'
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-blue-600 text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button
                className="btn-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedService(service);
                }}
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        {selectedService && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedService(null)}>
            <div className="bg-white rounded-3xl max-w-2xl w-full p-8" onClick={(e) => e.stopPropagation()}>
              <div className="text-5xl mb-6">{selectedService.icon}</div>
              <h3 className="text-3xl font-bold text-primary mb-4">
                {selectedService.title}
              </h3>
              <p className="text-secondary mb-6">
                {selectedService.details}
              </p>
              <button
                className="btn-primary"
                onClick={() => setSelectedService(null)}
              >
                Закрыть
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}