import Hero from '@/components/Hero';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Card from '@/components/Card';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Video from '@/components/Video';
import Typography from '@/components/Typography';
import Underline from '@/components/Underline';
import SquareList from '@/components/SkyareList';
import Owner from '@/components/Owner';
import Info from '@/components/Info';
import Quote from '@/components/Quote';


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
          <button className="px-6 py-3 bg-[#eb2f5b] text-white rounded-full hover:bg-[#d8275a] transition-colors duration-300 max-w-64 w-full mx-auto">
          РАССЧИТАТЬ ПРОЕКТ
</button>
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
          <Quote text="“РЕЗУЛЬТАТ ПРЕДВОСХИТИЛ ОЖИДАНИЯ! САМОЕ ГЛАВНОЕ, ЧТО МЫ КАЖДЫЙ ДЕНЬ СЛЫШИМ ХВАЛЕБНЫЕ ОТЗЫВЫ ОБ ИНТЕРЬЕРЕ ОТ КЛИЕНТОВ НАШЕЙ КЛИНИКИ.”" />
        </Container>
      </Section>
      {/* <About />
      <Services />
      <Portfolio />
      <Contact /> */}
    </main>
  );
}
