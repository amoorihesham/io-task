import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { cn } from '@/lib/utils';
import { getLocale } from 'next-intl/server';
import { getTestimonialsData } from '@/actions';

const TestimonialsCarouselWrapper = async () => {
  const locale = await getLocale();
  const data = await getTestimonialsData();
  return (
    <>
      <h1 className='text-[42px] font-sans font-bold leading-[52px] text-background'>{data.testimonials.title}</h1>
      <p className='text-lg font-normal text-background/60 font-sans max-w-[580px] leading-[28px] mt-4'>{data.testimonials.description}</p>
      <Carousel className='mt-10'>
        <CarouselContent className='mb-6'>
          {data.testimonials.clients.map((client) => (
            <CarouselItem
              key={client.id}
              className='flex flex-col lg:flex-row items-center lg:items-start gap-y-6 lg:gap-x-10'>
              <Image
                src={`https://io-task.onrender.com${client.image.url}`}
                alt='client image'
                width={374}
                height={374}
              />
              <div className='h-full flex flex-col gap-y-4 lg:justify-between'>
                <h3 className='text-lg text-center lg:text-left lg:text-[24px] font-normal text-background/60 font-sans leading-[32px] max-w-[728px] '>
                  {client.description}
                </h3>
                <div className='space-y-2 lg:space-y-4 text-center lg:text-left'>
                  <p className='text-2xl font-semibold font-sans text-background leading-[26px]'>{client.name}</p>
                  <p className=' font-normal font-sans text-background leading-[26px]'>{client.position}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className={cn(
            'top-full disabled:bg-background/20 disabled:text-background bg-background text-foreground',
            locale === 'en' ? 'right-15 lg:right-20' : 'left-2 '
          )}
        />
        <CarouselNext
          className={cn(
            'top-full disabled:bg-background/20 disabled:text-background bg-background text-foreground',
            locale === 'en' ? 'right-2' : 'left-15 lg:left-20'
          )}
        />
      </Carousel>
    </>
  );
};

export default TestimonialsCarouselWrapper;
