import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { cn } from '@/lib/utils';
import { getOurTeamData } from '@/actions';
import Link from 'next/link';

const OurTeamCarouselWrapper = async () => {
  const data = await getOurTeamData();
  return (
    <>
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
    </>
  );
};

export default OurTeamCarouselWrapper;
