'use client';
import React, { useState } from 'react';
import MaxContentWrapper from './max-content-wrapper';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { services } from '@/CONSTANTS';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className='bg-brown-main/40 flex items-center justify-center h-[71px] fixed w-full top-0 z-[1000] backdrop-blur-lg'>
      <MaxContentWrapper className='w-full h-full flex items-center justify-center gap-x-14'>
        <div className='flex items-center gap-x-6'>
          <Link
            href={'/'}
            className='capitalize font-sans text-background text-lg px-6 py-2'>
            Home
          </Link>
          <Link
            href={'/about-us'}
            className='capitalize font-sans text-background text-lg px-6 py-2'>
            About Us
          </Link>
          <DropdownMenu
            modal={false}
            open={isMenuOpen}
            onOpenChange={setIsMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant={'ghost'}
                className='capitalize font-sans text-background text-lg px-6 py-2 flex items-center gap-x-1 hover:bg-transparent hover:text-background cursor-pointer'>
                Services {isMenuOpen ? <ChevronUp className='size-6' /> : <ChevronDown className='size-6' />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='top-50 z-[1001] bg-brown-main border-gray-800 text-background/80 text-lg font-medium flex items-start justify-between max-w-[1540px] w-[1540px] p-6'>
              <div className='space-y-7'>
                {services.slice(0, 5).map((service) => (
                  <DropdownMenuItem
                    key={service.text}
                    className='bg-transparent focus:bg-transparent focus:text-background transition-colors duration-300 cursor-pointer text-lg font-medium font-sans text-background/70'>
                    <Link href={service.href}>{service.text}</Link>
                  </DropdownMenuItem>
                ))}
              </div>
              <div className='space-y-7'>
                {services.slice(5, 10).map((service) => (
                  <DropdownMenuItem
                    key={service.text}
                    className='bg-transparent focus:bg-transparent focus:text-background transition-colors duration-300 cursor-pointer text-lg font-medium font-sans text-background/70'>
                    <Link href={service.href}>{service.text}</Link>
                  </DropdownMenuItem>
                ))}
              </div>
              <div className='space-y-7'>
                {services.slice(10, 15).map((service) => (
                  <DropdownMenuItem
                    key={service.text}
                    className='bg-transparent focus:bg-transparent focus:text-background transition-colors duration-300 cursor-pointer text-lg font-medium font-sans text-background/70'>
                    <Link href={service.href}>{service.text}</Link>
                  </DropdownMenuItem>
                ))}
              </div>
              <div className='space-y-7'>
                {services.slice(15).map((service) => (
                  <DropdownMenuItem
                    key={service.text}
                    className='bg-transparent focus:bg-transparent focus:text-background transition-colors duration-300 cursor-pointer text-lg font-medium font-sans text-background/70'>
                    <Link href={service.href}>{service.text}</Link>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href={'/our-team'}
            className='capitalize font-sans text-background text-lg px-6 py-2'>
            Our Team
          </Link>
          <Link
            href={'/our-blogs'}
            className='capitalize font-sans text-background text-lg px-6 py-2'>
            Blogs
          </Link>
          <Link
            href={'/contact-us'}
            className='capitalize font-sans text-background text-lg px-6 py-2'>
            Contact Us
          </Link>
        </div>
        <div className='flex items-center gap-x-6'>
          <Button
            variant={'ghost'}
            size={'lg'}
            className='cursor-pointer transition-colors duration-300 hover:bg-brown-main/60'>
            <Search className='size-6 text-white' />
          </Button>
          <Button
            variant={'outline'}
            size={'lg'}
            className='cursor-pointer transition-colors duration-300 bg-transparent text-background hover:bg-brown-main/80 hover:text-background hover:border-brown-main/80'>
            Book Appointment
          </Button>
        </div>
      </MaxContentWrapper>
    </nav>
  );
};

export default Navbar;
