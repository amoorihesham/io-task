'use client';
import { use } from 'react';
import { notFound } from 'next/navigation';
import ReadMoreButton from './read-more';
import { ServiceType } from '@/types';

const SearchResult = ({ servicesList }: { servicesList: any }) => {
  const data: ServiceType[] = use(servicesList);
  console.log(data);
  if (!data?.length) return notFound();

  return data.map((service) => (
    <div
      key={service.id}
      className='py-8 border-b border-[#97979780]'>
      <h2 className='font-medium font-sans text-brown-main text-xl'>{service.title}</h2>
      <ReadMoreButton />
    </div>
  ));
};

export default SearchResult;
