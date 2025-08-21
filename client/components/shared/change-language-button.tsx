'use clint';
import React from 'react';
import { Button } from '../ui/button';
import { Globe } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

const ChangeLanguageButton = () => {
  const { changeLanguage, locale } = useI18n();
  return (
    <Button
      aria-label='change sit language button'
      onClick={() => changeLanguage(locale === 'en' ? 'ar' : 'en')}
      variant={'ghost'}
      size={'sm'}
      className='text-background hover:bg-brown-main/90 cursor-pointer hover:text-background'>
      <Globe />
      {locale === 'en' ? 'العربية' : 'EN'}
    </Button>
  );
};

export default ChangeLanguageButton;
