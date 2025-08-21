'use client';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import SearchDropDown from '../pieces/search-drop-down';
import ChangeLanguageButton from '../shared/change-language-button';
import ServicesDropDown from '../pieces/services-drop-down';
import NavigationItem from '../pieces/navigation-item';
import BookAppointmentButton from '../pieces/book-appointment-button';

const AppSheet = ({ servicesList, isLoading }: { servicesList: any[]; isLoading: boolean }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <Sheet
      open={isSheetOpen}
      onOpenChange={setIsSheetOpen}>
      <SheetTrigger
        className='flex lg:hidden'
        aria-label='open side menu for the site navigation'>
        <Menu className='text-background cursor-pointer size-8' />
      </SheetTrigger>
      <SheetContent className='bg-brown-main z-[1005] px-4'>
        <SheetHeader>
          <SheetTitle className='sr-only'>Navigation on mobile</SheetTitle>
          <SheetDescription className='sr-only'>
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>

        <div className='flex items-center justify-between mt-6'>
          <ChangeLanguageButton />
          <SearchDropDown setIsSheetOpen={setIsSheetOpen} />
        </div>
        <div className='flex flex-col gap-y-6 items-center'>
          <NavigationItem
            href='/'
            localeKey='home'
            closeSheetHandler={setIsSheetOpen}
          />
          <NavigationItem
            href='/about'
            localeKey='about-us'
            closeSheetHandler={setIsSheetOpen}
          />
          <ServicesDropDown
            servicesList={servicesList}
            isLoading={isLoading}
            closeSheetHandler={setIsSheetOpen}
          />
          <NavigationItem
            href='/our-team'
            localeKey='our-team'
            closeSheetHandler={setIsSheetOpen}
          />
          <NavigationItem
            href='/our-blogs'
            localeKey='blogs'
            closeSheetHandler={setIsSheetOpen}
          />
          <NavigationItem
            href='/contact-us'
            localeKey='contact-us'
            closeSheetHandler={setIsSheetOpen}
          />
          <BookAppointmentButton />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AppSheet;
