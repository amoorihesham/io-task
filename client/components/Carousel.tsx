'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Button } from './ui/button';
import { ChevronLeft } from 'lucide-react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Carousel({ slides }: { slides: any[] }) {
  console.log(slides);
  return (
    <>
      <Swiper
        spaceBetween={50}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true, el: '' }}
        navigation={{
          prevEl: '.swiper-button-prev',
        }}
        className='w-full'>
        {slides.map((slide) => (
          <SwiperSlide className='flex items-center justify-between '>
            <div className='space-y-6'>
              <h1 className='text-[40px] text-background font-bold font-sans leading-[28px]'>{slide.heading}</h1>
              <p className='max-w-[700px] font-medium text-lg font-sans leading-[28px] text-background mb-16'>{slide.description}</p>
              <Button
                variant={'secondary'}
                className='text-lg font-medium font-sans text-brown-main hover:bg-background/80 leading-[28px] py-7 px-8 cursor-pointer transition-colors duration-300'>
                {slide.cta}
              </Button>
            </div>
            <div>
              <Image
                src={`http://localhost:1337${slide.person.url}`}
                alt={slide.person.alternativeText}
                width={374}
                height={374}
              />
            </div>
          </SwiperSlide>
        ))}

        <Button
          className='swiper-button-prev after:text-background after:size-1 hover:bg-transparent cursor-pointer left-0'
          variant={'ghost'}>
          <ChevronLeft className='text-background size-10' />
        </Button>
      </Swiper>
    </>
  );
}
