'use client';
import Link from 'next/link';
import withI18n from '@/components/shared/hocs/with-i18n';
import { InjectedProps } from '@/types';

const TeamButton = ({ t }: InjectedProps) => {
  return (
    <Link
      href={'#'}
      className='text-brown-main text-lg font-sans font-medium'>
      {t('team')}
    </Link>
  );
};

export default withI18n('search-page')(TeamButton);
