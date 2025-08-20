'use client';
import React, { useState } from 'react';
import MaxContentWrapper from './max-content-wrapper';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ChevronDown, ChevronUp, Globe, Search } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import z from 'zod';
import { useLocale, useTranslations } from 'next-intl';
import { useChangeLanguage } from '@/hooks/useChangeLanguage';

const schema = z.object({
  query: z.string().min(1, 'Provide a query'),
});

const Navbar = ({ servicesList }: { servicesList: any[] }) => {
  const cl = useChangeLanguage();
  const locale = useLocale();
  const t = useTranslations('navigation');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const router = useRouter();

  const { handleSubmit, errors, isSubmitting, values, handleChange, handleBlur, resetForm } = useFormik({
    initialValues: {
      query: '',
    },
    validate: (values) => {
      const parsed = schema.safeParse(values);
      if (parsed.success) return {};
      return { query: parsed.error.issues[0]?.message || 'Invalid' };
    },
    onSubmit: async (values) => {
      console.log(values);
      setOpenSearchBox(false);
      resetForm();
      router.push(`/search?query=${values.query}`);
    },
  });

  return (
    <nav className='bg-brown-main/40 flex items-center justify-center h-[71px] fixed w-full top-0 z-[1000] backdrop-blur-lg'>
      <MaxContentWrapper className='w-full h-full flex items-center justify-center gap-x-14'>
        <div className='flex items-center gap-x-6'>
          <Link
            href={'/'}
            className='capitalize font-sans text-background text-lg px-4 py-2'>
            {t('home')}
          </Link>
          <Link
            href={'/about-us'}
            className='capitalize font-sans text-background text-lg px-4 py-2'>
            {t('about-us')}
          </Link>
          <DropdownMenu
            modal={false}
            open={isMenuOpen}
            onOpenChange={setIsMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant={'ghost'}
                className='capitalize font-sans text-background text-lg px-4 py-2 flex items-center gap-x-1 hover:bg-transparent hover:text-background cursor-pointer'>
                {t('services')} {isMenuOpen ? <ChevronUp className='size-6' /> : <ChevronDown className='size-6' />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='top-50 z-[1001] bg-brown-main border-gray-800 text-background/80 text-lg font-medium flex items-start justify-between max-w-[1540px] w-[1540px] p-6'>
              <div className='space-y-7'>
                {servicesList.slice(0, 5).map((service) => (
                  <DropdownMenuItem
                    key={service.id}
                    className='bg-transparent focus:bg-transparent focus:text-background transition-colors duration-300 cursor-pointer text-lg font-medium font-sans text-background/70'>
                    <Link href={`/services/${service.documentId}`}>{service.title}</Link>
                  </DropdownMenuItem>
                ))}
              </div>
              <div className='space-y-7'>
                {servicesList.slice(5, 10).map((service) => (
                  <DropdownMenuItem
                    key={service.id}
                    className='bg-transparent focus:bg-transparent focus:text-background transition-colors duration-300 cursor-pointer text-lg font-medium font-sans text-background/70'>
                    <Link href={`/services/${service.documentId}`}>{service.title}</Link>
                  </DropdownMenuItem>
                ))}
              </div>
              <div className='space-y-7'>
                {servicesList.slice(10, 15).map((service) => (
                  <DropdownMenuItem
                    key={service.id}
                    className='bg-transparent focus:bg-transparent focus:text-background transition-colors duration-300 cursor-pointer text-lg font-medium font-sans text-background/70'>
                    <Link href={`/services/${service.documentId}`}>{service.title}</Link>
                  </DropdownMenuItem>
                ))}
              </div>
              <div className='space-y-7'>
                {servicesList.slice(15).map((service) => (
                  <DropdownMenuItem
                    key={service.id}
                    className='bg-transparent focus:bg-transparent focus:text-background transition-colors duration-300 cursor-pointer text-lg font-medium font-sans text-background/70'>
                    <Link href={`/services/${service.documentId}`}>{service.title}</Link>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href={'/our-team'}
            className='capitalize font-sans text-background text-lg px-4 py-2'>
            {t('our-team')}
          </Link>
          <Link
            href={'/our-blogs'}
            className='capitalize font-sans text-background text-lg px-4 py-2'>
            {t('blogs')}
          </Link>
          <Link
            href={'/contact-us'}
            className='capitalize font-sans text-background text-lg px-4 py-2'>
            {t('contact-us')}
          </Link>
        </div>
        <div className='flex items-center gap-x-6'>
          <Button
            onClick={() => cl(locale === 'en' ? 'ar' : 'en')}
            variant={'ghost'}
            size={'sm'}
            className='text-background hover:bg-brown-main/90 cursor-pointer hover:text-background'>
            <Globe />
            {locale === 'en' ? 'العربية' : 'EN'}
          </Button>
          <DropdownMenu
            modal={false}
            open={openSearchBox}
            onOpenChange={setOpenSearchBox}>
            <DropdownMenuTrigger asChild>
              <Button
                variant={'ghost'}
                className='capitalize font-sans text-background text-lg px-4 py-2 flex items-center gap-x-1 hover:bg-transparent hover:text-background cursor-pointer'>
                {openSearchBox ? <Search className='size-6' /> : <Search className='size-6' />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='top-50 z-[1001] bg-brown-main border-gray-800 text-background/80 text-lg font-medium max-w-[1540px] w-[300px] p-4'>
              {errors.query && <p className='text-center capitalize text-red-500 mb-2'>{errors.query}</p>}
              <form
                onSubmit={handleSubmit}
                className='w-full space-y-3'>
                <input
                  name='query'
                  value={values.query} // 👈 controlled by Formik
                  onChange={handleChange} // 👈 updates Formik state
                  onBlur={handleBlur}
                  placeholder={t('search-query')}
                  className='w-full border border-background/80 rounded-sm py-2 px-3 placeholder:text-background/60 capitalize'
                />
                <Button
                  variant={'outline'}
                  type='submit'
                  className='bg-transparent w-full uppercase text-background cursor-pointer hover:bg-brown-main hover:text-background'
                  disabled={isSubmitting}>
                  {t('search')}
                </Button>
              </form>
            </DropdownMenuContent>
          </DropdownMenu>
          {/*  */}
          <Button
            variant={'outline'}
            size={'lg'}
            className='cursor-pointer transition-colors duration-300 bg-transparent text-background hover:bg-brown-main/80 hover:text-background hover:border-brown-main/80'>
            {t('book-appointment')}
          </Button>
        </div>
      </MaxContentWrapper>
    </nav>
  );
};

export default Navbar;
