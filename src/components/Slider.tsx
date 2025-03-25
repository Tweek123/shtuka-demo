'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

type SliderProps = {
  children: React.ReactNode;
  className?: string;
};

const Slider = ({ children, className }: SliderProps) => {
  const childrenArray = React.Children.toArray(children);
  const swiperRef = useRef<any>(null);

  return (
    <div className={`w-full relative ${className}`}>
      <button 
        className="custom-prev !z-50 absolute" 
        onClick={() => {
          swiperRef.current?.slidePrev()}}
      >
        ←
      </button>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        freeMode={true}
        autoHeight
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {childrenArray.map((child, index) => (
          <SwiperSlide key={index}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
      <button 
        className="custom-next !z-50 absolute" 
        onClick={() => swiperRef.current?.slideNext()}
      >
        →
      </button>
    </div>
  );
};

export default Slider;