'use client';
import Image from 'next/image';
import MaxContentWrapper from './max-content-wrapper';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useFormik } from 'formik';
import z from 'zod';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { useLocale, useTranslations } from 'next-intl';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { subscribe } from '@/redux/thunks/subscribe';

const subscribeSchema = z.object({
  email: z.email(),
});

const Footer = () => {
  const dispatch = useAppDispatch();
  const { isLoading, success, error } = useAppSelector((state) => state.subscribe);
  const t = useTranslations('footer');
  const locale = useLocale();
  const { setSubmitting, errors, isSubmitting, handleBlur, handleChange, handleSubmit, values, resetForm } = useFormik({
    initialValues: {
      email: '',
    },
    validate: (values) => {
      const errors: Partial<{ email: string }> = {};
      const { success, error } = subscribeSchema.safeParse(values);

      if (!success) errors.email = error.issues[0].message;

      return errors;
    },
    onSubmit: async (values) => {
      const result = await dispatch(subscribe(JSON.stringify(values.email)));
      if (!success) {
        toast.error(t('subscribe-error'));
        setSubmitting(false);
        return;
      }
      toast.success(`${result.meta.arg} ${t('subscribe-success')}`);
      setSubmitting(false);
      resetForm();
    },
  });

  return (
    <footer className='bg-brown-main mt-6 py-10'>
      <MaxContentWrapper>
        <div className='w-full flex justify-end items-end gap-x-10'>
          <div className='w-1/4'>
            <form
              className=''
              onSubmit={handleSubmit}>
              {errors.email && <p className='my-2 text-red-500 font-medium capitalize'>{errors.email}</p>}
              <div className='relative w-full'>
                <input
                  type='text'
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className='bg-background py-3 px-3 rounded-sm w-full'
                  placeholder={t('email')}
                />
                <Button
                  className={cn(
                    'absolute top-1/2 -translate-y-1/2 text-xs font-medium font-sans text-background bg-brown-main hover:bg-brown-main/80 transition-colors duration-300 cursor-pointer',
                    locale === 'ar' ? 'left-2' : 'right-2'
                  )}
                  disabled={isSubmitting || isLoading}>
                  {isSubmitting ? `${t('subscribe')}...` : t('subscribe')}
                </Button>
              </div>
            </form>
          </div>
          <div className='flex items-center gap-x-6'>
            <span className='font-normal font-sans text-background capitalize'>{t('contacts')}</span>
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
              {t('about')}
            </Link>
            <Link
              href={'#'}
              className='text-background font-normal font-sans capitalize'>
              {t('our-strategy')}
            </Link>
            <Link
              href={'#'}
              className='text-background font-normal font-sans capitalize'>
              {t('our-advantages')}
            </Link>
            <Link
              href={'#'}
              className='text-background font-normal font-sans capitalize'>
              {t('social-responsibility')}
            </Link>
            <Link
              href={'#'}
              className='text-background font-normal font-sans capitalize'>
              {t('our-services')}
            </Link>
          </div>
          <div>
            <p className='font-sans font-normal text-background'>{t('copyright')}</p>
          </div>
        </div>
      </MaxContentWrapper>
    </footer>
  );
};

export default Footer;
