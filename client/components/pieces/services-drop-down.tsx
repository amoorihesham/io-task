'use client';
import React, { SetStateAction, useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';
import LoaderSkeleton from '../loaders/loader';
import { Link } from '@/lib/i18n/navigation';

const ServicesDropDown = ({
  servicesList,
  isLoading,
  closeSheetHandler,
}: {
  servicesList: any[];
  isLoading: boolean;
  closeSheetHandler: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, locale } = useI18n('navigation');

  return (
    <DropdownMenu
      open={isMenuOpen}
      onOpenChange={setIsMenuOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant={'ghost'}
          className='capitalize font-sans text-background text-lg px-4 py-2 flex items-center gap-x-1 hover:bg-transparent hover:text-background cursor-pointer'>
          {t('services')} {isMenuOpen ? <ChevronUp className='size-6' /> : <ChevronDown className='size-6' />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={locale === 'en' ? 'center' : 'end'}
        className='shadow-2xl top-50 z-[10010] bg-brown-main border-gray-600 text-background/80 text-lg font-medium flex items-start justify-between w-[304px] lg:max-w-[1540px] lg:w-[1540px] p-6 max-h-[400px] lg:max-h-[560px]'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-6'>
          {isLoading ? (
            <div className='w-full h-full flex items-center justify-center'>
              <LoaderSkeleton />
            </div>
          ) : (
            servicesList.map((service) => (
              <DropdownMenuItem
                key={service.id}
                onClick={() => {
                  setIsMenuOpen(false);
                  closeSheetHandler(false);
                }}
                className='bg-transparent focus:bg-transparent focus:text-background transition-colors duration-300 cursor-pointer text-lg font-medium font-sans text-background/70'>
                <Link href={`/services/${service.documentId}`}>{service.title}</Link>
              </DropdownMenuItem>
            ))
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ServicesDropDown;
