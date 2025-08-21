'use client';
import Link from 'next/link';
import withI18n from '@/components/shared/hocs/with-i18n';
import { InjectedProps } from '@/types';

const ReadMoreButton = ({ t }: InjectedProps) => {
  return (
    <Link
      href={'#'}
      className='text-brown-main text-lg font-sans font-medium capitalize underline mt-10 block'>
      {t('read-more')}
    </Link>
  );
};

export default withI18n('search-page')(ReadMoreButton);
