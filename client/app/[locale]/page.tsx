import { getHomePageData } from '@/actions';
import MaxContentWrapper from '@/components/layout/max-content-wrapper';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { Link } from '@/lib/i18n/navigation';
import { cn } from '@/lib/utils';
import { getLocale } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import CarouselBullets from '@/components/ui/carousel-bullets';

export default async function Home() {
  const locale = await getLocale();
  const data = await getHomePageData();
  console.log(data);
  return (
    <>
      <header
        style={{ backgroundImage: `url(https://io-task.onrender.com${data.heroImage.url})` }}
        className='h-dvh bg-cover bg-no-repeat bg-center flex items-center justify-center'>
        <MaxContentWrapper className=' h-full flex justify-center items-center'>
          <Carousel className='w-full flex items-center'>
            <CarouselContent className='w-full'>
              {data.slides.map((slide) => (
                <CarouselItem
                  className='flex flex-col-reverse lg:flex-row items-center gap-y-6 lg:justify-between w-full'
                  key={slide.id}>
                  <div className='space-y-4 lg:space-y-6'>
                    <h1 className='text-3xl lg:text-[40px] text-background font-bold font-sans leading-[28px]'>{slide.heading}</h1>
                    <p className='max-w-[700px] font-medium lg:text-lg font-sans leading-[28px] text-background mb-5 lg:mb-16'>
                      {slide.description}
                    </p>
                    <Button
                      variant={'secondary'}
                      className='text-lg font-medium font-sans text-brown-main hover:bg-background/80 leading-[28px] py-5 px-6 lg:py-7 lg:px-8 cursor-pointer transition-colors duration-300'>
                      {slide.cta}
                    </Button>
                  </div>
                  <div>
                    <Image
                      src={`https://io-task.onrender.com${slide.person.url}`}
                      alt={slide.person.alternativeText || 'person image'}
                      width={374}
                      height={374}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className='absolute w-full h-[50px] left-0 -top-15 lg:-left-40 lg:w-[100px] lg:h-[250px] lg:top-1/2 lg:-translate-y-1/2'>
              <CarouselPrevious className='left-1/2 -translate-x-1/2 hidden lg:flex bg-transparent disabled:text-background/90 text-background hover:bg-transparent hover:text-background' />
              <CarouselBullets amount={data.slides.length} />
            </div>
          </Carousel>
        </MaxContentWrapper>
      </header>

      {/* OUR TEAM */}
      <MaxContentWrapper className='py-20'>
        <h1 className='text-[42px] font-sans font-bold leading-[52px] text-brown-main text-center'>{data.team.title}</h1>
        <p className='text-lg font-medium text-[#1e1e1e] font-sans max-w-[760px] text-center mx-auto leading-[28px] mt-4'>
          {data.team.description}
        </p>
        <Carousel className='max-w-4xl mx-auto mt-10'>
          <CarouselContent className='flex items-center justify-between mb-6 lg:mb-0'>
            {data.team.members.map((member) => (
              <CarouselItem
                key={member.id}
                className='w-full lg:basis-1/3 flex flex-col items-center lg:block'>
                <Image
                  src={`https://io-task.onrender.com${member.image.url}`}
                  alt='member image'
                  width={269}
                  height={185}
                  className='mb-4'
                />
                <h3 className='text-[22px] font-medium text-brown-main font-sans leading-[32px] text-center'>{member.name}</h3>
                <p className='text-sm font-bold font-sans text-[#15143966] leading-[26px] text-center'>{member.position}</p>
                <div className='flex items-center justify-center mt-4 gap-x-3'>
                  <Link href={'#'}>
                    <Image
                      src={'/assets/icons/whatsapp.svg'}
                      alt='whatsapp icon'
                      width={20}
                      height={15}
                    />
                  </Link>
                  <Link href={'#'}>
                    <Image
                      src={'/assets/icons/phone.svg'}
                      alt='phone icon'
                      width={20}
                      height={15}
                    />
                  </Link>
                  <Link href={'#'}>
                    <Image
                      src={'/assets/icons/email.svg'}
                      alt='email icon'
                      width={20}
                      height={15}
                    />
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={cn('top-full lg:top-1/2 lg:-translate-y-1/2 lg:-left-20 left-0 ')} />
          <CarouselNext className={cn('top-full lg:top-1/2 left-10 lg:-translate-y-1/2 lg:left-[100%] ')} />
        </Carousel>
      </MaxContentWrapper>

      {/* TESTIMONIALS */}
      <div className='bg-brown-main py-20'>
        <MaxContentWrapper>
          <h1 className='text-[42px] font-sans font-bold leading-[52px] text-background'>{data.testimonials.title}</h1>
          <p className='text-lg font-normal text-background/60 font-sans max-w-[580px] leading-[28px] mt-4'>
            {data.testimonials.description}
          </p>
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
        </MaxContentWrapper>
      </div>
    </>
  );
}
