import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '../ui/button';
import { useLocale, useTranslations } from 'next-intl';
import { ChevronDown, ChevronUp, Globe, Menu, Search } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { useI18n } from '@/hooks/useI18n';
import { useState } from 'react';
import { useFormik } from 'formik';
import z from 'zod';
import { Link, useRouter } from '@/lib/i18n/navigation';

const schema = z.object({
  query: z.string().min(1, 'Provide a query'),
});

const AppSheet = ({ servicesList }: { servicesList: any[] }) => {
  const { changeLanguage } = useI18n();
  const locale = useLocale();
  const t = useTranslations('navigation');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
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
      setOpenSearchBox(false);
      setIsSheetOpen(false);
      resetForm();
      router.push(`/search?query=${values.query}`);
    },
  });

  return (
    <Sheet
      open={isSheetOpen}
      onOpenChange={setIsSheetOpen}>
      <SheetTrigger className='flex lg:hidden'>
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
          <Button
            onClick={() => changeLanguage(locale === 'en' ? 'ar' : 'en')}
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
            <DropdownMenuContent className='top-50 z-[10001] bg-brown-main border-gray-800 text-background/80 text-lg font-medium max-w-[1540px] w-[300px] p-4'>
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
        </div>
        <div className='flex flex-col gap-y-6 items-center'>
          <Link
            href={'/'}
            className='capitalize font-sans text-background text-lg px-4 py-2'
            onClick={() => setIsSheetOpen(false)}>
            {t('home')}
          </Link>
          <Link
            href={'/about-us'}
            className='capitalize font-sans text-background text-lg px-4 py-2'
            onClick={() => setIsSheetOpen(false)}>
            {t('about-us')}
          </Link>
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
              align='start'
              sideOffset={8}
              className='bg-brown-main z-[10000] max-w-xs'>
              {servicesList.map((service) => (
                <DropdownMenuItem
                  key={service.id}
                  className='text-lg text-background/80 hover:text-background focus:text-background bg-transparent hover:bg-transparent focus:bg-transparent'>
                  <Link
                    href={`/services/${service.documentId}`}
                    onClick={() => {
                      setIsSheetOpen(false);
                      setIsMenuOpen(false);
                    }}>
                    {service.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href={'/our-team'}
            className='capitalize font-sans text-background text-lg px-4 py-2'
            onClick={() => setIsSheetOpen(false)}>
            {t('our-team')}
          </Link>
          <Link
            href={'/our-blogs'}
            className='capitalize font-sans text-background text-lg px-4 py-2'
            onClick={() => setIsSheetOpen(false)}>
            {t('blogs')}
          </Link>
          <Link
            href={'/contact-us'}
            className='capitalize font-sans text-background text-lg px-4 py-2'
            onClick={() => setIsSheetOpen(false)}>
            {t('contact-us')}
          </Link>
          <Button
            variant={'outline'}
            size={'lg'}
            className='cursor-pointer transition-colors duration-300 bg-transparent text-background hover:bg-brown-main/80 hover:text-background hover:border-brown-main/80'
            onClick={() => setIsSheetOpen(false)}>
            {t('book-appointment')}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AppSheet;
