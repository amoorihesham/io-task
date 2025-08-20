import { getSearchResults } from '@/actions';
import MaxContentWrapper from '@/components/layout/max-content-wrapper';
import { cn } from '@/lib/utils';
import { ChevronLeft, Square } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

const SearchPage = async ({ searchParams }: { searchParams: Promise<{ query: string }> }) => {
  const t = await getTranslations('search-page');
  const local = await getLocale();
  const q = (await searchParams).query;
  const services = await getSearchResults(q);

  if (!services.length) return notFound();
  console.log(q);
  return (
    services && (
      <>
        <header
          style={{ backgroundImage: `url(http://localhost:1337/uploads/hero_984c6b76ba.jpg)` }}
          className='h-dvh bg-cover bg-no-repeat bg-center flex items-center justify-center'
        />
        <MaxContentWrapper className='py-10 lg:py-20'>
          <Link
            href={'/services'}
            className={cn(
              'text-brown-main/80 hover:text-brown-main font-sans font-bold flex items-center gap-x-1  justify-center transition-colors duration-300 w-fit',
              local === 'en' ? 'flex-row' : 'flex-row-reverse'
            )}>
            <ChevronLeft /> {t('back')}
          </Link>
          <div className='grid grid-cols-12 mt-10 gap-6'>
            <div className='col-span-2 flex flex-col gap-4'>
              <Link
                href={'#'}
                className='text-brown-main text-lg font-sans font-medium'>
                {t('team')}
              </Link>
              <Link
                href={'#'}
                className='text-brown-main text-lg font-sans font-medium'>
                {t('service')}
              </Link>
            </div>
            <div className='col-span-10'>
              {services.map((service) => (
                <div
                  key={service.id}
                  className='pb-10 border-b border-[#97979780]'>
                  <h2 className='font-medium font-sans text-brown-main text-xl'>{service.title}</h2>
                  <Link
                    href={'#'}
                    className='text-brown-main text-lg font-sans font-medium capitalize underline mt-10 block'>
                    {t('read-more')}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </MaxContentWrapper>
      </>
    )
  );
};

export default SearchPage;
