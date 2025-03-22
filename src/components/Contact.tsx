'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  project: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  project?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Пожалуйста, введите email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Пожалуйста, введите корректный email';
    }
    
    if (!formData.project) {
      newErrors.project = 'Пожалуйста, выберите тип проекта';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Пожалуйста, расскажите о вашем проекте';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', project: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-bubblegum-light via-peach-light to-mango-light">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-bubblegum-dark mb-6">
            Обсудим ваш проект?
          </h2>
          <p className="text-lg text-mango-dark max-w-2xl mx-auto">
            Расскажите о вашей идее, и мы поможем воплотить её в жизнь
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-mango-dark mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.name ? 'border-red-500' : 'border-peach'
                  } focus:border-bubblegum focus:ring-2 focus:ring-bubblegum/20 outline-none transition-colors duration-300`}
                  placeholder="Ваше имя"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-mango-dark mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.email ? 'border-red-500' : 'border-peach'
                  } focus:border-bubblegum focus:ring-2 focus:ring-bubblegum/20 outline-none transition-colors duration-300`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="project" className="block text-mango-dark mb-2">
                  Тип проекта
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.project ? 'border-red-500' : 'border-peach'
                  } focus:border-bubblegum focus:ring-2 focus:ring-bubblegum/20 outline-none transition-colors duration-300 bg-white`}
                >
                  <option value="">Выберите тип проекта</option>
                  <option value="branding">Брендинг</option>
                  <option value="web">Веб-дизайн</option>
                  <option value="ui">UI/UX Дизайн</option>
                  <option value="graphic">Графический дизайн</option>
                </select>
                {errors.project && (
                  <p className="mt-1 text-sm text-red-500">{errors.project}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-mango-dark mb-2">
                  О проекте
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.message ? 'border-red-500' : 'border-peach'
                  } focus:border-bubblegum focus:ring-2 focus:ring-bubblegum/20 outline-none transition-colors duration-300`}
                  placeholder="Расскажите о вашем проекте и ожиданиях"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-3 bg-bubblegum hover:bg-bubblegum-dark text-white rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed relative ${
                  isSubmitting ? 'cursor-wait' : ''
                }`}
              >
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </button>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 text-center mt-4"
                >
                  Спасибо! Мы свяжемся с вами в ближайшее время.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-center mt-4"
                >
                  Произошла ошибка. Пожалуйста, попробуйте позже.
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-bubblegum mb-2">
                Студия
              </h3>
              <p className="text-mango-dark">
                Москва, Цветной бульвар, 7с2
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-bubblegum mb-2">
                Телефон
              </h3>
              <p className="text-mango-dark">
                +7 (495) 123-45-67
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold text-bubblegum mb-2">
                Email
              </h3>
              <p className="text-mango-dark">
                hello@shtuka.design
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold text-bubblegum mb-2">
                Режим работы
              </h3>
              <p className="text-mango-dark">
                Пн-Пт: 10:00 - 19:00
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}