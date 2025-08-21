'use client';
import { InjectedProps } from '@/types';
import { Button } from '../ui/button';
import withI18n from '../shared/hocs/with-i18n';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ServicesDropDownTrigger = ({ t, isMenuOpen }: { isMenuOpen: boolean } & InjectedProps) => {
  return (
    <Button
      variant={'ghost'}
      className='capitalize font-sans text-background text-lg px-4 py-2 flex items-center gap-x-1 hover:bg-transparent hover:text-background cursor-pointer'>
      {t('services')} {isMenuOpen ? <ChevronUp className='size-6' /> : <ChevronDown className='size-6' />}
    </Button>
  );
};

export default withI18n('navigation')(ServicesDropDownTrigger);
