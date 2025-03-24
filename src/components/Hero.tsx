'use client';
import Typography from './Typography';
import Container from './Container';
import Section from './Section';
import Divider from './Divider';
import Slider from '@/components/Slider';
import Image from 'next/image';
import phone1 from '@/public/images/hero/1.jpg'
import phone2 from '@/public/images/hero/2.jpg'
import phone3 from '@/public/images/hero/3.jpg'

const Hero = () => {
  return (
    <Section padding='px-0'>
      <Container className='relative overflow-hidden max-w-full !py-0'>
        <div className="flex flex-col min-h-screen w-full relative">
        <div className="flex flex-col min-h-screen w-full relative">
  <Slider className='z-10 min-h-screen w-full absolute'>
    <div className="min-h-screen w-full relative">
      <Image src={'/images/hero/1.jpg'} alt="Hero 1" fill className="object-cover object-center" />
    </div>
    <div className="min-h-screen w-full relative">
      <Image src={'/images/hero/2.jpg'} alt="Hero 2" fill className="object-cover object-center" />
    </div>
    <div className="min-h-screen w-full relative">
      <Image src={'/images/hero/3.jpg'} alt="Hero 3" fill className="object-cover object-center" />
    </div>
  </Slider>
</div>
          <div className="flex flex-col z-10 absolute left-0 right-0 m-auto h-full px-4 pt-24 pb-8 max-w-[420px]">
            <div className="flex flex-row justify-between mb-2">
              <Divider orientation="vertical"  />
              <Typography className='px-2 py-1 text-xs' variant='h1' color='text-white' background="bg-dark-custom">
                SHTUKA
              </Typography>
              <Typography className='px-2 py-1 text-xs' variant='h1' color='text-[#CBCAC6]' background="bg-dark-custom">
                СТУДИЯ ЖИГУЛЕВА И ЯКОВЛЕВОЙ
              </Typography>
            </div>
            <div className='flex flex-row justify-between'>
                <Divider orientation="vertical" />
                <Typography className='px-1 py-1 text-[28px] text-black' variant='h1'>
                  ДИЗАЙН ИНТЕРЬЕРА
                </Typography>
                <Divider orientation="vertical" />
            </div>

            <div className='mt-auto'>
            <Typography className='px-8 py-4 text-md mt-auto text-center' variant='h1' color='text-white' background="bg-black">
              НОВЫЙ УРОВЕНЬ КОМФОРТА
              <Divider className='mt-4' color='bg-white' />
              <span className='text-base font-light text-white' >когда каждый метр работает на вас</span>
            </Typography>
          </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;