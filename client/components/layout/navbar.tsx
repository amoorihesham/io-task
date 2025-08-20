import React from 'react';
import MaxContentWrapper from './max-content-wrapper';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';

const links = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Services',
    href: '/services',
  },
  {
    text: 'Blog',
    href: '/blog',
  },
  {
    text: 'Our team',
    href: '/our-team',
  },
  {
    text: 'Contact us',
    href: '/contact-us',
  },
];

const Navbar = () => {
  return (
    <nav className='bg-brown-main/40 flex items-center justify-center h-[71px] fixed w-full top-0 z-[1000] backdrop-blur-lg'>
      <MaxContentWrapper className='w-full h-full flex items-center justify-center gap-x-14'>
        <div>
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className='capitalize font-sans text-background text-lg px-6 py-2'>
              {link.text}
            </Link>
          ))}
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
