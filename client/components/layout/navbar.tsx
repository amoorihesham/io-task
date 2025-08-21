'use client';
import MaxContentWrapper from './max-content-wrapper';
import AppSheet from './app-sheet';
import SearchDropDown from '../pieces/search-drop-down';
import ChangeLanguageButton from '../shared/change-language-button';
import BookAppointmentButton from '../pieces/book-appointment-button';
import NavigationItem from '../pieces/navigation-item';
import ServicesDropDown from '../pieces/services-drop-down';
import { useCallback, useEffect, useState } from 'react';
import { getServicesList } from '@/actions';
import { useI18n } from '@/hooks/useI18n';

const Navbar = () => {
  const [servicesList, setServicesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { locale } = useI18n();

  const getServices = useCallback(async () => {
    try {
      setIsLoading(true);
      const services = await getServicesList(locale);
      setServicesList(services);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [locale]);

  useEffect(() => {
    getServices();
  }, [getServices]);

  return (
    <nav className='bg-brown-main/40 flex items-center justify-center h-[71px] fixed w-full top-0 z-[1000] backdrop-blur-lg'>
      <MaxContentWrapper className='w-full h-full flex items-center justify-center lg:justify-center gap-x-14'>
        <div className='items-center gap-x-6 hidden lg:flex'>
          <NavigationItem
            href='/'
            localeKey='home'
          />
          <NavigationItem
            href='/about'
            localeKey='about-us'
          />
          <ServicesDropDown
            servicesList={servicesList}
            isLoading={isLoading}
          />
          <NavigationItem
            href='/our-team'
            localeKey='our-team'
          />
          <NavigationItem
            href='/our-blogs'
            localeKey='blogs'
          />
          <NavigationItem
            href='/contact-us'
            localeKey='contact-us'
          />
        </div>
        <div className='items-center gap-x-6 hidden lg:flex'>
          <ChangeLanguageButton />
          <SearchDropDown />
          <BookAppointmentButton />
        </div>
        <AppSheet
          servicesList={servicesList}
          isLoading={isLoading}
        />
      </MaxContentWrapper>
    </nav>
  );
};

export default Navbar;
