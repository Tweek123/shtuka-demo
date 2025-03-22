import Navbar from '../../components/Navbar';

export default function About() {
  const team = [
    {
      name: 'Анна Петрова',
      role: 'Арт-директор',
      image: '/images/team1.jpg',
      description: '10+ лет опыта в дизайне. Работала с крупнейшими брендами России и Европы.',
    },
    {
      name: 'Максим Иванов',
      role: 'Ведущий UI/UX дизайнер',
      image: '/images/team2.jpg',
      description: 'Эксперт в создании удобных и красивых интерфейсов. Более 50 успешных проектов.',
    },
    {
      name: 'Елена Сидорова',
      role: 'Бренд-дизайнер',
      image: '/images/team3.jpg',
      description: 'Специалист по созданию уникальных брендов и визуальных идентичностей.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">О нашей студии</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы - команда профессиональных дизайнеров, объединенных страстью к созданию
              красивых и функциональных решений для бизнеса.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-gray-600">Завершенных проектов</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">10</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">15</div>
              <div className="text-gray-600">Наград</div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
            <p className="text-lg text-gray-600 mb-6">
              Мы стремимся создавать дизайн, который не только красив, но и эффективно решает
              бизнес-задачи наших клиентов. Наш подход основан на глубоком понимании потребностей
              пользователей и бизнес-целей заказчика.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Качество</h3>
                <p className="text-gray-600">
                  Мы не идем на компромиссы когда дело касается качества нашей работы.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Инновации</h3>
                <p className="text-gray-600">
                  Постоянно следим за трендами и внедряем новые технологии.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Результат</h3>
                <p className="text-gray-600">
                  Ориентируемся на достижение измеримых бизнес-результатов.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-gray-600 mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 