'use client';
import React, { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';
import LoaderSkeleton from '../loaders/loader';
import { Link } from '@/lib/i18n/navigation';

const ServicesDropDown = ({ servicesList, isLoading }: { servicesList: any[]; isLoading: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useI18n('navigation');

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
      <DropdownMenuContent className='top-50 z-[1001] bg-brown-main border-gray-800 text-background/80 text-lg font-medium flex items-start justify-between max-w-[1540px] w-[1540px] p-6'>
        <div className='grid grid-cols-4 gap-6'>
          {isLoading ? (
            <div className='w-full h-full flex items-center justify-center'>
              <LoaderSkeleton />
            </div>
          ) : (
            servicesList.map((service) => (
              <DropdownMenuItem
                key={service.id}
                onClick={() => setIsMenuOpen(false)}
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
