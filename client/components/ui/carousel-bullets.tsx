'use client';

import React, { useContext } from 'react';
import { CarouselContext } from './carousel';
import { cn } from '@/lib/utils';

const CarouselBullets = ({ amount }: { amount: number }) => {
  const ctx = useContext(CarouselContext);

  return (
    <ul className='xl:space-y-3 absolute bottom-2 xl:bottom-30 left-1/2 -translate-x-1/2 flex items-center gap-x-3 xl:block'>
      {Array.from({ length: amount }).map((_, idx) => (
        <li
          key={idx}
          className={cn('size-4 rounded-full border cursor-pointer', ctx?.api?.internalEngine().index.get() === idx && 'bg-background')}
          onClick={() => ctx?.api?.scrollTo(idx)}></li>
      ))}
    </ul>
  );
};

export default CarouselBullets;
