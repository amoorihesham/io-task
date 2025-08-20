import Image from 'next/image';
import MaxContentWrapper from './max-content-wrapper';
import { Button } from '../ui/button';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-brown-main mt-6 py-10'>
      <MaxContentWrapper>
        <div className='w-full flex justify-end items-end gap-x-10'>
          <div className='w-1/4'>
            <form className=''>
              <div className='relative w-full'>
                <input
                  type='text'
                  className='bg-background py-3 px-3 rounded-sm w-full'
                  placeholder='ex@gmail.com'
                />
                <Button className='absolute right-2 top-1/2 -translate-y-1/2 text-xs font-medium font-sans text-background bg-brown-main hover:bg-brown-main/80 transition-colors duration-300 cursor-pointer'>
                  subscribe
                </Button>
              </div>
            </form>
          </div>
          <div className='flex items-center gap-x-6'>
            <span className='font-normal font-sans text-background capitalize'>contacts</span>
            <div className='flex items-center gap-x-4'>
              <Link href={'#'}>
                <Image
                  src={'/assets/icons/twitter.svg'}
                  alt='twitter icon'
                  width={24}
                  height={26}
                />
              </Link>
              <Link href={'#'}>
                <Image
                  src={'/assets/icons/facebook.svg'}
                  alt='facebook icon'
                  width={11}
                  height={26}
                />
              </Link>
              <Link href={'#'}>
                <Image
                  src={'/assets/icons/google.svg'}
                  alt='google icon'
                  width={24}
                  height={26}
                />
              </Link>
            </div>
          </div>
        </div>
        <hr className='my-8 border-gray-400' />
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-x-6'>
            <Link
              href={'#'}
              className='text-background font-normal font-sans capitalize'>
              About
            </Link>
            <Link
              href={'#'}
              className='text-background font-normal font-sans capitalize'>
              Our Strategy
            </Link>
            <Link
              href={'#'}
              className='text-background font-normal font-sans capitalize'>
              Our Advantages
            </Link>
            <Link
              href={'#'}
              className='text-background font-normal font-sans capitalize'>
              Social Responsibility
            </Link>
            <Link
              href={'#'}
              className='text-background font-normal font-sans capitalize'>
              Our Services
            </Link>
          </div>
          <div>
            <p className='font-sans font-normal text-background'>© 2024 . All rights reserved.</p>
          </div>
        </div>
      </MaxContentWrapper>
    </footer>
  );
};

export default Footer;
