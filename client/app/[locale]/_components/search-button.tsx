'use client';
import { InjectedProps } from '@/types';
import withI18n from '@/components/shared/hocs/with-i18n';
import { Button } from '@/components/ui/button';

const SearchButton = ({ t, isSubmitting }: { isSubmitting: boolean } & InjectedProps) => {
  return (
    <Button
      aria-label='submit form data button'
      variant={'outline'}
      type='submit'
      className='bg-transparent w-full uppercase text-background cursor-pointer hover:bg-brown-main hover:text-background'
      disabled={isSubmitting}>
      {t('search')}
    </Button>
  );
};

export default withI18n('navigation')(SearchButton);
