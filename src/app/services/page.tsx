import Navbar from '../../components/Navbar';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Веб-дизайн',
      description: 'Создаем современные и удобные веб-сайты, которые привлекают внимание и конвертируют посетителей в клиентов.',
      features: [
        'Дизайн landing page',
        'Корпоративные сайты',
        'Интернет-магазины',
        'Адаптивный дизайн',
        'Оптимизация конверсии',
      ],
      image: '/images/web-design.jpg',
    },
    {
      id: 2,
      title: 'Брендинг',
      description: 'Разрабатываем уникальный фирменный стиль, который выделит ваш бренд среди конкурентов.',
      features: [
        'Логотип и айдентика',
        'Брендбук',
        'Упаковка',
        'Маркетинговые материалы',
        'Гайдлайны бренда',
      ],
      image: '/images/branding.jpg',
    },
    {
      id: 3,
      title: 'UI/UX Дизайн',
      description: 'Создаем интуитивно понятные интерфейсы и улучшаем пользовательский опыт ваших продуктов.',
      features: [
        'Мобильные приложения',
        'Веб-приложения',
        'Прототипирование',
        'Пользовательские исследования',
        'Тестирование юзабилити',
      ],
      image: '/images/ui-ux.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Наши Услуги</h1>
          <p className="text-xl text-gray-600 text-center mb-12">Комплексные решения для вашего бизнеса</p>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="w-full lg:w-1/2 space-y-6">
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                  <p className="text-lg text-gray-600">{service.description}</p>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Что включено:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href="/contact"
                    className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                  >
                    Заказать услугу
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 