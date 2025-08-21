import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious } from '../ui/carousel';
import { getHeroData } from '@/actions';
import { Button } from '../ui/button';
import CarouselBullets from '../ui/carousel-bullets';

const HeroCarouselWrapper = async () => {
  const data = await getHeroData();
  return (
    <Carousel>
      <CarouselContent>
        {data.slides.map((slide) => (
          <CarouselItem
            className='flex flex-col-reverse lg:flex-row items-center gap-y-6 lg:justify-between basis-full'
            key={slide.id}>
            <div className='space-y-4 lg:space-y-6'>
              <h1 className='text-3xl lg:text-[40px] text-background font-bold font-sans leading-[28px]'>{slide.heading}</h1>
              <p className='max-w-[374px] lg:max-w-[700px] font-medium lg:text-lg font-sans leading-[28px] text-background mb-5 lg:mb-16'>
                {slide.description}
              </p>
              <Button
                variant={'secondary'}
                className='text-lg font-medium font-sans text-brown-main hover:bg-background/80 leading-[28px] py-5 px-3 lg:py-7 lg:px-8 cursor-pointer transition-colors duration-300'>
                {slide.cta}
              </Button>
            </div>
            <div>
              <Image
                src={`https://io-task.onrender.com${slide.person.url}`}
                alt={slide.person.alternativeText || 'person image'}
                width={374}
                height={374}
                priority
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='absolute w-full h-[50px] left-0 -bottom-15 xl:-left-40 xl:w-[100px] xl:h-[250px] xl:top-1/2 xl:-translate-y-1/2'>
        <CarouselPrevious className='left-1/2 -translate-x-1/2 hidden xl:flex bg-transparent disabled:text-background/90 text-background hover:bg-transparent hover:text-background' />
        <CarouselBullets amount={data.slides.length} />
      </div>
    </Carousel>
  );
};

export default HeroCarouselWrapper;
