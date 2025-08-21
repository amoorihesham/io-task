'use client';

import withI18n from '@/components/shared/hocs/with-i18n';
import { InjectedProps } from '@/types';

const NoSearchResult = ({ t }: InjectedProps) => {
  return <h3 className='font-medium font-sans text-2xl text-brown-main'>{t('no-result')}</h3>;
};

export default withI18n('search-page')(NoSearchResult);
