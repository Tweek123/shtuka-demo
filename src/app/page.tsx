import Hero from '@/components/Hero';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Card from '@/components/Card';
import { faHouse, faPaintRoller, faUsers,faRocket, faHeart } from '@fortawesome/free-solid-svg-icons';
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
import Slider from '@/components/Slider';
import Image from 'next/image';

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
      <Section className='!px-0'>
        <Container className='!py-0'>
          <Card icon={faHouse} text={'ПРОЕКТИРУЕМ ЧАСТНЫЕ И КОММЕРЧЕСКИЕ ИНТЕРЬЕРЫ БОЛЕЕ 15 ЛЕТ'} subtext={'СМОТРИТЕ ВИДЕО ОБЗОРЫ  ПРОЕКТОВ:'} />
        </Container>
      </Section>
      <Section className='!px-0'>
        <Container className='!py-0'>
          <div className="flex flex-col flex-grow gap-10">
          <Video src="https://rutube.ru/play/embed/05d273dfa2a39fc4f8b5070df6a73200/" />
          <Video src="https://rutube.ru/play/embed/b40bccbb08a8a3cf8941f68906c56eac/" />
          <Video src="https://rutube.ru/play/embed/76379aa05adc3e6d3b47fc7f58b44c84/" />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex flex-col">
          <Typography className='text-sm mx-auto mb-6' color='text-[#eb2f5b]' variant='p' fontFamily="VarelaRound">С ВАМИ БУДУТ РАБОТАТЬ</Typography>
          <Typography className='mx-auto text-center mb-6 text-black' color='text-[#eb2f5b]' variant='h1' fontFamily="womby">
            СТУДИЯ ШТУКА. 
            <Underline>ДИЗАЙН
            ИНТЕРЬЕРА
            В УФЕ  ОТ
            АРХИТЕКТОРА И
            ДИЗАЙНЕРА</Underline>
          </Typography>
          <Button>РАССЧИТАТЬ ПРОЕКТ</Button>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex flex-col gap-4">
          <Owner title="ЮЛИЯ ЯКОВЛЕВА. АРХИТЕКТОР" src={'/images/avatar/yakovleva.jpg'} items={['Призовое место в конкурсе от 1 ТРЕСТ и ВДНХ на дизайн-проект интерьера квартиры', '15-летний опыт в дизайне интерьеров и высшее архитектурное образование']} />
          <Owner title="ИВАН ЖИГУЛЁВ. ДИЗАЙНЕР" src={'/images/avatar/zhiguliov.jpg'} items={['Реализованы интерьеры домов premium класса, площадью более 500 м2.', 'Так же интерьеры клиник, детских садов, HoReCa объектов и др.']} />
          </div>
        </Container>
      </Section>
      <Section className="!px-0">
        <Container className="!py-0">
          <div className="flex flex-col w-full aspect-[4/5] relative">
          <Image
            src={'/images/custom/clinik.jpg'}
            alt="Avatar"
            fill
            className="object-cover"
          />
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="!py-0">
          <div className="flex flex-col gap-8">
          <Info icon={faHouse} text={'ОТЗЫВЫ О НАС:'} subtext={'РЕАЛИЗАЦИЯ ИНТЕРЬЕРА КОСМЕТОЛОГИИ'} />
          <Quote mode='black' text="“РЕЗУЛЬТАТ ПРЕДВОСХИТИЛ ОЖИДАНИЯ! САМОЕ ГЛАВНОЕ, ЧТО МЫ КАЖДЫЙ ДЕНЬ СЛЫШИМ ХВАЛЕБНЫЕ ОТЗЫВЫ ОБ ИНТЕРЬЕРЕ ОТ КЛИЕНТОВ НАШЕЙ КЛИНИКИ.”" />
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
      <Section className='!px-0'>
        <Container className='!py-0'>
          <div className="flex flex-col gap-8 w-full">
            <Info icon={faPaintRoller} text={'ВЫЯВИМ НУЖНЫЙ ВАМ СТИЛЬ ИНТЕРЬЕРА И РЕАЛИЗУЕМ ЕГО'} subtext={'ИНДИВИДУАЛЬНЫЙ ПОДБОР ИНТЕРЬЕРА, В ЗАВИСИМОСТИ ОТ ОСОБЕННОСТЕЙ ПОМЕЩЕНИЯ, ЗАДАЧ И ВАШИХ ПРЕДПОЧТЕНИЙ'} />
            <Slider className='aspect-[4/5] w-full'>
              <div className="aspect-[4/5] w-full relative">
                <Image src={'/images/hero/1.jpg'} alt="Hero 1" fill className="object-cover object-center" />
              </div>
              <div className="aspect-[4/5] w-full relative">
                <Image src={'/images/hero/2.jpg'} alt="Hero 2" fill className="object-cover object-center" />
              </div>
              <div className="aspect-[4/5] w-full relative">
                <Image src={'/images/hero/3.jpg'} alt="Hero 3" fill className="object-cover object-center" />
              </div>
          </Slider>
          </div>
        </Container>
      </Section>
      <Section className='!px-0'>
        <Container>
          <div className="flex flex-col relative pb-8">
            <div className="h-full w-full absolute top-0 left-0">
              <Image src={'/images/custom/cosmetology.jpg'} alt="Hero 2" fill className="object-cover object-center" />
            </div>
            <div className="flex flex-col gap-8 ml-auto w-[60%] mb-[120px] z-10 pt-8">
              <Typography variant='h3' color='text-black' fontFamily='ArialBlack'>СМОТРИТЕ <Underline gradient='to-[#eb2f5b]'>ВИДЕО ОБЗОР РЕМОНТА</Underline></Typography>
              <Typography variant='h2' color='text-black' fontFamily='ArialBlack'>КЛИНИКИ КОСМЕТОЛОГИИ RESTETICA, СДЕЛАННЫЙ ПО НАШЕМУ <Underline gradient="to-[#eb2f5b]" >ДИЗАЙН ПРОЕКТУ ИНТЕРЬЕРА</Underline></Typography>
            </div>
            <Video className='z-10 px-4' src="https://rutube.ru/play/embed/76379aa05adc3e6d3b47fc7f58b44c84/" />
          </div>
        </Container>
      </Section>
      <Section background='bg-[#353535]'>
        <Container>
          <div className="flex flex-col flex-grow bg-[#353535]">
          <div className="flex flex-col gap-8 items-center flex-grow mb-4 text-center">
            <Typography variant='h1' fontFamily='ArialBlack' color='text-white'>СДЕЛАЕМ 3D ТУР ВАШЕГО ПРОЕКТА</Typography>
            <Typography variant='h2' fontFamily='ArialBlack' color='text-white'>ПЕРЕДВИГАЙТЕ ИЗОБРАЖЕНИЕ, ЧТОБЫ УВИДЕТЬ ВСЕ ДЕТАЛИ</Typography>
          </div>
          <iframe className='mb-10' width="100%" height="400"  allow="xr-spatial-tracking; gyroscope; accelerometer"  scrolling="no" src="https://kuula.co/share/collection/7bCfS?logo=1&amp;info=1&amp;fs=1&amp;vr=0&amp;sd=1&amp;thumbs=1"></iframe>
          <div className="flex flex-col gap-8 items-center flex-grow text-center">
            <Typography variant='h1' fontFamily='ArialBlack' color='text-white'>ХОТИТЕ ТАК ЖЕ?</Typography>
            <Typography variant='h2' fontFamily='ArialBlack' color='text-white'>ЗАПОЛНИТЕ ФОРМУ, И МЫ  ВАМИ СВЯЖЕМСЯ</Typography>
            <Button>РАССЧИТАТЬ ПРОЕКТ</Button>
          </div>
          </div>
        </Container>
      </Section>
      <Section className='px-0'>
        <Container>
          <div className="flex flex-col">
            <Typography variant='h1' className='text-center mb-8' color='text-black' fontFamily='womby'><Underline>ПОЧЕМУ НУЖНО ЗАКАЗАТЬ ПРОЕКТ У НАС?</Underline></Typography>
            <div className="flex flex-col -mx-4">
              <Card className='py-8 w-full' icon={faHeart} text={'ГАРАНТИИ'} subtext={'РАБОТАЕМ, ПОКА ВЫ НЕ БУДЕТЕ НА 100% УДОВЛЕТВОРЕНЫ ДИЗАЙНОМ!У НАС ОГРОМНЫЙ ОПЫТ ПО РЕАЛИЗАЦИИ ОБЪЕКТОВ ВСЕ СЧЕТА ОТ ПОСТАВЩИКОВ У ВАС НА РУКАХ К ЗАВЕРШЕНИЮ ПРОЕКТА'} />
              <Card className='py-8 w-full' icon={faRocket} text={'ВИДЕО ВИЗУАЛИЗАЦИИ'} subtext={'ВИДЕО ФОРМАТ ВИЗУАЛИЗАЦИИ – ЭТО ЛУЧШЕЕ, ЧТО МОЖНО ПРЕДЛОЖИТЬ ФОТО  ДАЕТ НЕ ПОЛНУЮ КАРТИНУ, ТОЛЬКО 2-3 РАКУРСА ЗАГЛЯНИТЕ В БУДУЩЕЕ И ПРОГУЛЯЕТЕСЬ В ИНТЕРЬЕРЕ ОТ ПЕРВОГО ЛИЦА, КАК В КОМПЬЮТЕРНОЙ ИГРЕ'} />
              <Card className='py-8 w-full' icon={faUsers} text={'ПОДДЕРЖКА'} subtext={'РЕАЛИЗУЕМ ИНТЕРЬЕРЫ ВПЛОТЬ ДО ВЫБОРА ШТОР И ДЕКОРА. ПОМОЖЕМ С ПОИСКОМ ПОДРЯДЧИКОВ И ПОЛНОСТЬЮ КОМПЛЕКТУЕМ ИНТЕРЬЕР НА СВЯЗИ С ВАМИ И ВАШИМИ СТРОИТЕЛЯМИ'} /> 
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col flex-1">
            <Typography variant='h1' className='text-center mb-16' color='text-black' fontFamily='womby'><Underline>СЛОЖНЫЕ РЕАЛИЗОВАННЫЕ РЕШЕНИЯ НА НАШИХ ОБЪЕКТАХ:</Underline></Typography>
            <div className="flex flex-col -mx-4 gap-12">
              <Project src='/images/projects/1.jpg' text={'ХОЛЛ ЧАСТНОГО ДОМА'} subtext={'РОСПИСЬ СТЕН ХУДОЖНИКОМ, ИНДИВИДУАЛЬНЫЙ ДИЗАЙН НАПОЛЬНОЙ ПЛИТКИ'} />
              <Project src='/images/projects/2.jpg' text={'ВАННАЯ КОМНАТА С ЗИМНИМ САДОМ'} subtext={'ИНДИВИДУАЛЬНЫЙ ДИЗАЙН ПАННО НА СТЕНЕ, ЗИМНИЙ САД ЗА СТЕКЛОМ'} />
              <Project src='/images/projects/3.jpg' text={'БАССЕЙН В КОТТЕДЖЕ'} subtext={'СКРУГЛЕННЫЕ СТЕНЫ, ИМИТАЦИЯ СЛЭБОВ КОЛОТОГО КАМНЯ'} />
              <Project src='/images/projects/4.jpg' text={'БАННЫЙ КОМПЛЕКС В КОТТЕДЖЕ'} subtext={'БАЛКИ НА ПОТОЛКЕ, НАСТЕННОЕ ПАННО С РАСТЕНИЯМИ'} />  
              <Project src='/images/projects/5.jpg' text={'ВАННАЯ КОМНАТА ЧАСТНОГО ДОМА'} subtext={'УНИКАЛЬНАЯ АВТОРСКАЯ МОЗАИКА'} />  
              <Project src='/images/projects/6.jpg' text={'ВАННАЯ КОМНАТА С ЗИМНИМ САДОМ'} subtext={'СКАЛА НА СТЕНЕ, МЕБЕЛЬ С ПАННО ИЗ РАСТЕНИЙ, ПАНЕЛИ-РЕЙКИ СО СВЕТОВЫМИ ВСТАВКАМИ'} /> 
              <Project src='/images/projects/7.jpg' text={'КОСМЕТОЛОГИЯ'} subtext={'СКРУГЛЕННЫЕ РИФЛЕНЫЕ СТЕНЫ, ВСТРОЕННАЯ МЕБЕЛЬ'} /> 
              <Project src='/images/projects/8.jpg' text={'КУХНЯ В КОТТЕДЖЕ'} subtext={'ШПОНИРОВАННЫЕ ПОТОЛКИ, ВСТРОЕННАЯ МЕБЕЛЬ'} />   
            </div>
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
              ПРОЕКТЫ ДИЗАЙНА ИНТЕРЬЕРА <Underline gradient="to-[#eb2f5b]">КВАРТИР, ДОМОВ И КОММЕРЧЕСКИХ ОБЪЕКТОВ</Underline>
            </Typography>
            <Gallery />
          </div>
        </Container>                                      
      </Section>
      <Section >
        <Container>
          <div className="flex flex-col w-full">
            <Slider >
              <div className="flex flex-col gap-8 py-8">
              <div className="aspect-[1023/640] w-full relative">
                  <Image src={'/images/notes/shop-1.jpg'} alt="Hero 1" fill className="object-cover object-center" />
                </div>
              <div className="aspect-[739/1280] w-full relative">
                <Image src={'/images/notes/shop-2.jpg'} alt="Hero 1" fill className="object-cover object-center" />
              </div>
              <Quote className='max-w-full' text={'Закончили ремонт и магазин открыли! Все получилось очень красиво, спасибо за работу! \nАлия. Магазин-пекарня в Языково'} />
              </div>
              <div className="flex flex-col gap-8 py-8">
              <div className="aspect-[2061/1280] w-full relative">
                  <Image src={'/images/notes/barber-1.jpg'} alt="Hero 1" fill className="object-cover object-center" />
                </div>
                <div className="aspect-[958/734] w-full relative">
                  <Image src={'/images/notes/barber-2.jpg'} alt="Hero 1" fill className="object-cover object-center" />
                </div>
              <Quote className='max-w-full ' text={'Спасибо, Иван, Барбершоп запустили, удалось реализовать все как по проекту. Марат .\nБарбершоп Че в Уфе'} />
              </div>
              <div className="flex flex-col gap-8 py-8">
              <div className="aspect-[1746/1068] w-full relative">
                  <Image src={'/images/notes/appart-1.jpg'} alt="Hero 1" fill className="object-cover object-center" />
                </div>
              <div className="aspect-[2433/1081] w-full relative">
                  <Image src={'/images/notes/appart-2.jpg'} alt="Hero 1" fill className="object-cover object-center" />
              </div>
              <Quote className='max-w-full' text={'В квартире полностью закончен ремонт, поставлена мебель, было оказано полное сопровождение, от проекта до реализации.'} />
              </div>
            </Slider>
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
            <div className="flex flex-col px-4 py-12 bg-white rounded-bubble">
            <Typography className='mb-8 text-center font-light' variant='h3' fontFamily="ArialBlack" color='text-black'>
              Записаться к дизайнеру:
            </Typography>
              <Button  size='lg'>ОСТАВИТЬ ЗАЯВКУ</Button>
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
