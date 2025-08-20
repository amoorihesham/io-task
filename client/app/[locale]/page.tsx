import { getHomePageData } from '@/actions';
import MaxContentWrapper from '@/components/layout/max-content-wrapper';
import Carousel from '@/components/Carousel';
import { Carousel as ShadCarousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const data = await getHomePageData();

  return (
    <>
      <header
        style={{ backgroundImage: `url(http://localhost:1337${data.heroImage.url})` }}
        className='h-dvh bg-cover bg-no-repeat bg-center flex items-center justify-center'>
        <MaxContentWrapper className='h-[700px] flex justify-center'>
          <Carousel slides={data.slides} />
        </MaxContentWrapper>
      </header>

      {/* OUR TEAM */}
      <MaxContentWrapper className='py-20'>
        <h1 className='text-[42px] font-sans font-bold leading-[52px] text-brown-main text-center'>{data.team.title}</h1>
        <p className='text-lg font-medium text-[#1e1e1e] font-sans max-w-[760px] text-center mx-auto leading-[28px] mt-4'>
          {data.team.description}
        </p>
        <ShadCarousel className='max-w-4xl mx-auto mt-10'>
          <CarouselContent className='flex items-center justify-between '>
            {data.team.members.map((member) => (
              <CarouselItem
                key={member.id}
                className='max-w-[300px]'>
                <Image
                  src={`http://localhost:1337${member.image.url}`}
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
          <CarouselPrevious />
          <CarouselNext />
        </ShadCarousel>
      </MaxContentWrapper>

      {/* TESTIMONIALS */}
      <div className='bg-brown-main py-20'>
        <MaxContentWrapper>
          <h1 className='text-[42px] font-sans font-bold leading-[52px] text-background'>{data.testimonials.title}</h1>
          <p className='text-lg font-normal text-background/60 font-sans max-w-[580px] leading-[28px] mt-4'>
            {data.testimonials.description}
          </p>
          <ShadCarousel className='mt-10'>
            <CarouselContent>
              {data.testimonials.clients.map((client) => (
                <CarouselItem
                  key={client.id}
                  className='flex items-start gap-x-10'>
                  <Image
                    src={`http://localhost:1337${client.image.url}`}
                    alt='client image'
                    width={374}
                    height={374}
                  />
                  <div className='h-full flex flex-col justify-between'>
                    <h3 className='text-[24px] font-normal text-background/60 font-sans leading-[32px] max-w-[728px] '>
                      {client.description}
                    </h3>
                    <div className='space-y-4'>
                      <p className='text-2xl font-semibold font-sans text-background leading-[26px]'>{client.name}</p>
                      <p className=' font-normal font-sans text-background leading-[26px]'>{client.position}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </ShadCarousel>
        </MaxContentWrapper>
      </div>
    </>
  );
}
