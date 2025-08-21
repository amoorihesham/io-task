'use client';
import React, { ChangeEvent, FocusEvent } from 'react';
import { InjectedProps } from '@/types';
import withI18n from '@/components/shared/hocs/with-i18n';

const SearchInput = ({
  handleBlur,
  handleChange,
  t,
  value,
}: {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
} & InjectedProps) => {
  return (
    <input
      name='query'
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={t('search-query')}
      className='w-full border border-background/80 rounded-sm py-2 px-3 placeholder:text-background/60 capitalize'
    />
  );
};

export default withI18n('navigation')(SearchInput);
