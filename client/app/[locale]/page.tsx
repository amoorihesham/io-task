import MaxContentWrapper from '@/components/layout/max-content-wrapper';
import { Suspense } from 'react';
import TestimonialsCarouselWrapper from '@/components/wrappers/carousel-testimonials';
import OurTeamCarouselWrapper from '@/components/wrappers/carousel-our-team';
import HeroCarouselWrapper from '@/components/wrappers/carousel-hero';
import LoaderSkeleton from '@/components/loaders/loader';

export default function Home() {
  return (
    <>
      <header
        style={{ backgroundImage: `url(https://io-task.onrender.com/uploads/hero_8a5cb6eaee.jpg)` }}
        className='h-dvh bg-cover bg-no-repeat bg-center flex items-center justify-center'>
        <MaxContentWrapper className=' h-full flex justify-center items-center'>
          <Suspense fallback={<LoaderSkeleton className='text-brown-main' />}>
            <HeroCarouselWrapper />
          </Suspense>
        </MaxContentWrapper>
      </header>

      {/* OUR TEAM */}
      <MaxContentWrapper className='py-10 lg:py-20'>
        <Suspense fallback={<LoaderSkeleton className='text-brown-main' />}>
          <OurTeamCarouselWrapper />
        </Suspense>
      </MaxContentWrapper>

      {/* TESTIMONIALS */}
      <div className='bg-brown-main py-10 lg:py-20'>
        <MaxContentWrapper>
          <Suspense fallback={<LoaderSkeleton className='text-brown-main' />}>
            <TestimonialsCarouselWrapper />
          </Suspense>
        </MaxContentWrapper>
      </div>
    </>
  );
}
