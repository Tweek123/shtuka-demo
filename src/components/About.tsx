'use client';

import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Алексей Иванов',
    role: 'Главный дизайнер',
    image: '/team/alexey.jpg',
    description: 'Специалист по созданию уникальных визуальных концепций'
  },
  {
    name: 'Мария Петрова',
    role: 'Арт-директор',
    image: '/team/maria.jpg',
    description: 'Эксперт в области брендинга и стратегического дизайна'
  }
];

const stats = [
  { value: '5+', label: 'Лет опыта' },
  { value: '200+', label: 'Проектов' },
  { value: '98%', label: 'Довольных клиентов' }
];

export default function About() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl font-bold text-gray-900 mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            О нашей студии
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Мы создаем инновационные дизайнерские решения, которые помогают брендам выделяться
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div 
            className="space-y-8"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">Наша команда</h3>
              <p className="text-lg text-gray-600">Профессионалы с многолетним опытом в дизайне и брендинге</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-square w-full bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-gray-600 mb-2">{member.role}</p>
                  <p className="text-gray-500">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">Наши достижения</h3>
              <p className="text-lg text-gray-600">Мы гордимся тем, что делаем наших клиентов успешными</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}