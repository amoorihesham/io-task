'use client';
import Link from 'next/link';
import withI18n from '@/components/shared/hocs/with-i18n';
import { ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { InjectedProps } from '@/types';

const BackButton = ({ t, locale }: InjectedProps) => {
  return (
    <Link
      href={'/services'}
      className={cn(
        'text-brown-main/80 hover:text-brown-main font-sans font-bold flex items-center gap-x-1  justify-center transition-colors duration-300 w-fit',
        locale === 'en' ? 'flex-row' : 'flex-row-reverse'
      )}>
      <ChevronLeft /> {t('back')}
    </Link>
  );
};

export default withI18n('search-page')(BackButton);
