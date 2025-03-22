'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Rebrand 2024',
    category: 'Брендинг',
    emoji: '✨',
    description: 'Редизайн айдентики для технологической компании'
  },
  {
    title: 'Интернет-магазин LUXE',
    category: 'Веб-дизайн',
    emoji: '🛍️',
    description: 'Дизайн премиального онлайн-бутика'
  },
  {
    title: 'Мобильное приложение FoodApp',
    category: 'UI/UX Дизайн',
    emoji: '📱',
    description: 'Дизайн приложения доставки еды'
  },
  {
    title: 'Рекламная кампания EventPro',
    category: 'Графический дизайн',
    emoji: '🎨',
    description: 'Серия рекламных материалов для event-агентства'
  }
];

export default function Portfolio() {
  return (
    <section className="py-20 px-4 bg-lemon-yellow">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-bubblegum via-mango to-peach bg-clip-text text-transparent mb-6">
            Портфолио
          </h2>
          <p className="text-lg text-mango-dark max-w-2xl mx-auto">
            Избранные проекты нашей студии
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl shadow-xl"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-bubblegum-light to-mango-light relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl transition-transform duration-300 group-hover:scale-110">{project.emoji}</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-peach-light mb-2">{project.category}</p>
                  <p className="text-sm text-white/80">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-bubblegum hover:bg-bubblegum-dark text-white rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
            Все проекты
          </button>
        </motion.div>
      </div>
    </section>
  );
}