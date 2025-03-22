'use client';
import Typography from './Typography';
import Container from './Container';
import Section from './Section';
import Divider from './Divider';
const Hero = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col max-w-[320px] mx-auto">
          <div className="flex flex-row justify-between">
            <Divider orientation="vertical"  />
            <Typography className='px-2 py-1 text-xs' variant='h1' color='text-white' background="bg-dark-custom">
              SHTUKA
            </Typography>
            <Typography className='px-2 py-1 text-xs' variant='h1' color='text-[#CBCAC6]' background="bg-dark-custom">
              СТУДИЯ ЖИГУЛЕВА И ЯКОВЛЕВОЙ
            </Typography>
          </div>
          <div className='flex flex-row flex-grow justify-between'>
          <Divider orientation="vertical" />
          <Typography className='px-1 py-1 text-[28px] text-black' variant='h1'>
              ДИЗАЙН ИНТЕРЬЕРА
          </Typography>
          <Divider orientation="vertical" />
          </div>

         <Typography className='px-8 py-1 text-md mt-[160px] text-center' variant='h1' color='text-white' background="bg-dark-custom">
          Новый уровень комфорта
          <Divider className='mt-4' color='bg-white' />
          <span className='text-sm text-[#CBCAC6]' >когда каждый метр работает на вас</span>
        </Typography>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;