import Hero from '@/components/Hero';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Card from '@/components/Card';
import { faHouse, faPaintRoller, faUsers,faRocket } from '@fortawesome/free-solid-svg-icons';
import Video from '@/components/Video';
import Typography from '@/components/Typography';
import Underline from '@/components/Underline';
import Owner from '@/components/Owner';
import Info from '@/components/Info';
import Quote from '@/components/Quote';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import Project from '@/components/Project';
import Gallery from '@/components/Gallery';

/**
 * The `Home` component represents the main page layout of the website.
 * It includes several sections such as the hero section, project showcase,
 * video reviews, team introduction, owner profiles, client feedback, and testimonials.
 * Each section is wrapped in a `Section` component with content provided by various
 * other components such as `Hero`, `Card`, `Video`, `Typography`, `Owner`, `Info`, and `Quote`.
 */
  /**
   * The `Home` component represents the main page layout of the website.
   * It includes several sections such as the hero section, project showcase,
   * video reviews, team introduction, owner profiles, client feedback, and testimonials.
   * Each section is wrapped in a `Section` component with content provided by various
   * other components such as `Hero`, `Card`, `Video`, `Typography`, `Owner`, `Info`, and `Quote`.
   */
export default function Home() {
  return (
    <main>
      <Hero />
      <Section>
        <Container>
          <Card icon={faHouse} text={'Проектируем частные и коммерческие интерьеры более 15 лет'} subtext={'СМОТРИТЕ ВИДЕО ОБЗОРЫ  ПРОЕКТОВ:'} />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex flex-col flex-grow gap-10">
          <Video src="https://rutube.ru/video/05d273dfa2a39fc4f8b5070df6a73200/?r=plemwd" />
          <Video src="https://rutube.ru/video/05d273dfa2a39fc4f8b5070df6a73200/?r=plemwd" />
          <Video src="https://rutube.ru/video/05d273dfa2a39fc4f8b5070df6a73200/?r=plemwd" />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex flex-col">
          <Typography className='text-sm mx-auto mb-6' color='text-[#eb2f5b]' variant='p' fontFamily="VarelaRound">С ВАМИ БУДУТ РАБОТАТЬ</Typography>
          <Typography className='mx-auto text-center mb-6 text-black' color='text-[#eb2f5b]' variant='h1' fontFamily="womby">
            СТУДИЯ ШТУКА. 
            <Underline>ДИЗАЙН ИНТЕРЬЕРА</Underline>
            <br />
            <Underline>В УФЕ  ОТ</Underline>
            <br /> 
            <Underline>АРХИТЕКТОРА И</Underline>
            <br /> 
            <Underline>ДИЗАЙНЕРА</Underline>
          </Typography>
          <Button>РАССЧИТАТЬ ПРОЕКТ</Button>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex flex-col gap-4">
          <Owner title="ЮЛИЯ ЯКОВЛЕВА. АРХИТЕКТОР" src={"https://1shtuka.ru/wordpress/wp-content/uploads/2023/11/iv1-150x150.jpg"} items={['Призовое место в конкурсе от 1 ТРЕСТ и ВДНХ на дизайн-проект интерьера квартиры', '15-летний опыт в дизайне интерьеров и высшее архитектурное образование']} />
          <Owner title="ИВАН ЖИГУЛЁВ. ДИЗАЙНЕР" src={"https://1shtuka.ru/wordpress/wp-content/uploads/2023/11/iv1-150x150.jpg"} items={['Реализованы интерьеры домов premium класса, площадью более 500 м2.', 'Так же интерьеры клиник, детских садов, HoReCa объектов и др.']} />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <Info icon={faHouse} text={'ОТЗЫВЫ О НАС:'} subtext={'РЕАЛИЗАЦИЯ ИНТЕРЬЕРА КОСМЕТОЛОГИИ'} />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex flex-col gap-8">
          <Quote text="“РЕЗУЛЬТАТ ПРЕДВОСХИТИЛ ОЖИДАНИЯ! САМОЕ ГЛАВНОЕ, ЧТО МЫ КАЖДЫЙ ДЕНЬ СЛЫШИМ ХВАЛЕБНЫЕ ОТЗЫВЫ ОБ ИНТЕРЬЕРЕ ОТ КЛИЕНТОВ НАШЕЙ КЛИНИКИ.”" />
          <div className="flex flex-row items-center">
            <Avatar size='sm' hasBorder={false} src='https://1shtuka.ru/wordpress/wp-content/uploads/2021/03/7.jpg' />
            <div className="flex flex-col">
            <Typography variant='p' color='text-black' fontFamily='womby'>ГУЛЬНАРА А.</Typography>
            <Typography variant='p' color='text-[#0A0A0A]' fontFamily='womby'>ОТЗЫВ НА ДИЗАЙН КЛИНИКИ RESTETICA</Typography>
            </div>
          </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex flex-col gap-8">
            <Info icon={faPaintRoller} text={'ВЫЯВИМ НУЖНЫЙ ВАМ СТИЛЬ ИНТЕРЬЕРА И РЕАЛИЗУЕМ ЕГО'} subtext={'ИНДИВИДУАЛЬНЫЙ ПОДБОР ИНТЕРЬЕРА, В ЗАВИСИМОСТИ ОТ ОСОБЕННОСТЕЙ ПОМЕЩЕНИЯ, ЗАДАЧ И ВАШИХ ПРЕДПОЧТЕНИЙ'} />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex flex-col">
            <div  className="flex flex-col gap-8 ml-auto w-[60%] mb-[120px]">
              <Typography variant='h3' color='text-black' fontFamily='ArialBlack'>СМОТРИТЕ <Underline gradient='to-[#eb2f5b]'>ВИДЕО ОБЗОР РЕМОНТА</Underline></Typography>
              <Typography variant='h2' color='text-black' fontFamily='ArialBlack'>КЛИНИКИ КОСМЕТОЛОГИИ RESTETICA, СДЕЛАННЫЙ ПО НАШЕМУ <Underline gradient="to-[#eb2f5b]" >ДИЗАЙН ПРОЕКТУ ИНТЕРЬЕРА</Underline></Typography>
            </div>
            <Video src="https://rutube.ru/video/05d273dfa2a39fc4f8b5070df6a73200/?r=plemwd" />
          </div>
        </Container>
      </Section>
      <Section background='bg-[#353535]'>
        <Container>
          <div className="flex flex-col flex-grow bg-[#353535] py-28">
          <div className="flex flex-col gap-8 items-center flex-grow mb-4 text-center">
            <Typography variant='h1' fontFamily='ArialBlack' color='text-white'>СДЕЛАЕМ 3D ТУР ВАШЕГО ПРОЕКТА</Typography>
            <Typography variant='h2' fontFamily='ArialBlack' color='text-white'>ПЕРЕДВИГАЙТЕ ИЗОБРАЖЕНИЕ, ЧТОБЫ УВИДЕТЬ ВСЕ ДЕТАЛИ</Typography>
          </div>
          <iframe className='mb-40' width="100%" height="400"  allow="xr-spatial-tracking; gyroscope; accelerometer"  scrolling="no" src="https://kuula.co/share/collection/7bCfS?logo=1&amp;info=1&amp;fs=1&amp;vr=0&amp;sd=1&amp;thumbs=1"></iframe>
          <div className="flex flex-col gap-8 items-center flex-grow">
            <Typography variant='h1' fontFamily='ArialBlack' color='text-white'>ХОТИТЕ ТАК ЖЕ?</Typography>
            <Typography variant='h2' fontFamily='ArialBlack' color='text-white'>ЗАПОЛНИТЕ ФОРМУ, И МЫ  ВАМИ СВЯЖЕМСЯ</Typography>
            <Button>РАССЧИТАТЬ ПРОЕКТ</Button>
          </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex flex-col flex-1">
            <Typography variant='h1' className='text-center' color='text-black' fontFamily='womby'><Underline>ПОЧЕМУ НУЖНО ЗАКАЗАТЬ</Underline><br /><Underline>ПРОЕКТ У НАС?</Underline></Typography>
            <Card icon={faHouse} text={'ГАРАНТИИ'} subtext={'РАБОТАЕМ, ПОКА ВЫ НЕ БУДЕТЕ НА 100% УДОВЛЕТВОРЕНЫ ДИЗАЙНОМ!У НАС ОГРОМНЫЙ ОПЫТ ПО РЕАЛИЗАЦИИ ОБЪЕКТОВ ВСЕ СЧЕТА ОТ ПОСТАВЩИКОВ У ВАС НА РУКАХ К ЗАВЕРШЕНИЮ ПРОЕКТА'} />
            <Card icon={faRocket} text={'ВИДЕО ВИЗУАЛИЗАЦИИ'} subtext={'ВИДЕО ФОРМАТ ВИЗУАЛИЗАЦИИ – ЭТО ЛУЧШЕЕ, ЧТО МОЖНО ПРЕДЛОЖИТЬ ФОТО  ДАЕТ НЕ ПОЛНУЮ КАРТИНУ, ТОЛЬКО 2-3 РАКУРСА ЗАГЛЯНИТЕ В БУДУЩЕЕ И ПРОГУЛЯЕТЕСЬ В ИНТЕРЬЕРЕ ОТ ПЕРВОГО ЛИЦА, КАК В КОМПЬЮТЕРНОЙ ИГРЕ'} />
            <Card icon={faUsers} text={'ПОДДЕРЖКА'} subtext={'РЕАЛИЗУЕМ ИНТЕРЬЕРЫ ВПЛОТЬ ДО ВЫБОРА ШТОР И ДЕКОРА. ПОМОЖЕМ С ПОИСКОМ ПОДРЯДЧИКОВ И ПОЛНОСТЬЮ КОМПЛЕКТУЕМ ИНТЕРЬЕР НА СВЯЗИ С ВАМИ И ВАШИМИ СТРОИТЕЛЯМИ'} /> 
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col flex-1">
            <Typography variant='h1' className='text-center mb-16' color='text-black' fontFamily='womby'><Underline>СЛОЖНЫЕ РЕАЛИЗОВАННЫЕ</Underline><br /><Underline>РЕШЕНИЯ НА НАШИХ</Underline><br /><Underline>ОБЪЕКТАХ:</Underline></Typography>
            <Project />
            <Project />
            <Project />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col flex-1 gap-4">
            <Card background='bg-[#f7f7f7]' icon={faHouse} text={'РАССЧИТАЙТЕ СТОИМОСТЬ ДИЗАЙН ПРОЕКТА'} subtext={'ОТВЕТЬТЕ НА 5 ВОПРОСОВ И ПОДБЕРИТЕ СОСТАВ ПРОЕКТА'} />
            <Button className='bg-black'>РАССЧИТАТЬ ПРОЕКТ</Button>
          </div>
        </Container>
      </Section>
      <Section background='bg-black'>
        <Container>
          <div className="flex flex-col">
            <Typography className='mb-8' variant='h1' color='text-white' fontFamily='ArialBlack'>
              ПРОЕКТЫ ДИЗАЙНА ИНТЕРЬЕРА <Underline gradient="to-[#eb2f5b]">КВАРТИР</Underline>, <Underline gradient="to-[#eb2f5b]">ДОМОВ</Underline> И <Underline gradient="to-[#eb2f5b]">КОММЕРЧЕСКИХ ОБЪЕКТОВ</Underline>
            </Typography>
            <Gallery />
          </div>
        </Container>                                      
      </Section>
      <Section background='bg-[#EFEFEF]'>
        <Container>
          <div className="flex flex-col">
            <Typography className='mb-8 font-light' variant='p' color='text-[#eb2f5b]' fontFamily='VarelaRound'>
            ЕСТЬ СОМНЕНИЯ?
            </Typography>
            <Typography className='mb-8' variant='h1' color='text-black' fontFamily='womby'>
              ХОТИТЕ ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ ДИЗАЙНЕРА <Underline gradient="to-[#eb2f5b]">БЕСПЛАТНО?</Underline>
            </Typography>
            <Typography className='mb-8 font-light' variant='h3' fontFamily="Metal" color='text-black'>
            Записывайтесь на консультацию с дизайнером интерьера! Мы обсудим вашу планировку и вы точно поймете, нужен ли вам дизайн проект интерьера.
            </Typography>
            <div className="flex flex-col p-12 bg-white rounded-bubble">
            <Typography className='mb-8 text-center font-light' variant='h3' fontFamily="ArialBlack" color='text-black'>
              Записаться к дизайнеру:
            </Typography>
              <Button className='bg-black' size='lg'>ОСТАВИТЬ ЗАЯВКУ</Button>
            </div>
          </div>
        </Container>                                      
      </Section>
      <Section background='bg-[#1C1C1C]'>
        <Container>
          <div className="flex flex-col flex-1 text-center gap-4">
            <Typography className='font-light' variant='p' color='text-[#eb2f5b]' fontFamily='VarelaRound'>
            КОНТАКТЫ
            </Typography>
            <Typography variant='h1' color='text-[#eb2f5b]' fontFamily='womby'>
            ☎ 8-987-021-99-12
            </Typography>
            <Typography variant='h3' fontFamily="Metal" color='text-white'>
            Instagram @shtuka.design
            </Typography>
            <Typography variant='h3' fontFamily="Metal" color='text-white'>
            г. Уфа, ВДНХ-ДОМ
            </Typography>
          </div>
        </Container>                                      
      </Section>
      {/* <About />
      <Services />
      <Portfolio />
      <Contact /> */}
    </main>
  );
}
