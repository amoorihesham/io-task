'use client';
import { InjectedProps } from '@/types';
import { Button } from '../ui/button';
import withI18n from '../shared/hocs/with-i18n';

const BookAppointmentButton = ({ t }: InjectedProps) => {
  return (
    <Button
      variant={'outline'}
      size={'lg'}
      className='cursor-pointer transition-colors duration-300 bg-transparent text-background hover:bg-brown-main/80 hover:text-background hover:border-brown-main/80 hidden lg:flex'>
      {t('book-appointment')}
    </Button>
  );
};

export default withI18n('navigation')(BookAppointmentButton);
