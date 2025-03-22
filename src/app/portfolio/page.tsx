import Navbar from '../../components/Navbar';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Редизайн веб-сайта',
      category: 'Веб-дизайн',
      description: 'Полный редизайн корпоративного сайта с фокусом на улучшение пользовательского опыта и конверсии.',
      image: '/images/project1.jpg',
    },
    {
      id: 2,
      title: 'Мобильное приложение для фитнеса',
      category: 'UI/UX Дизайн',
      description: 'Разработка интерфейса и пользовательского опыта для фитнес-приложения с функциями трекинга и персонализации.',
      image: '/images/project2.jpg',
    },
    {
      id: 3,
      title: 'Ребрендинг ресторана',
      category: 'Брендинг',
      description: 'Создание нового визуального стиля и айдентики для сети ресторанов премиум-класса.',
      image: '/images/project3.jpg',
    },
    {
      id: 4,
      title: 'E-commerce платформа',
      category: 'Веб-дизайн',
      description: 'Дизайн интернет-магазина с акцентом на удобство покупок и мобильную версию.',
      image: '/images/project4.jpg',
    },
    {
      id: 5,
      title: 'Приложение для доставки',
      category: 'UI/UX Дизайн',
      description: 'Разработка интуитивно понятного интерфейса для сервиса доставки еды.',
      image: '/images/project5.jpg',
    },
    {
      id: 6,
      title: 'Фирменный стиль event-агентства',
      category: 'Брендинг',
      description: 'Разработка полного брендбука и маркетинговых материалов для event-агентства.',
      image: '/images/project6.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Наше Портфолио</h1>
          <p className="text-xl text-gray-600 text-center mb-12">Избранные проекты нашей команды</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 