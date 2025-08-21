'use client';
import { InjectedProps } from '@/types';
import { Link } from '@/lib/i18n/navigation';
import withI18n from '../shared/hocs/with-i18n';
import React, { SetStateAction } from 'react';

const NavigationItem = ({
  t,
  href,
  localeKey,
  closeSheetHandler,
}: { href: string; localeKey: string; closeSheetHandler?: React.Dispatch<SetStateAction<boolean>> } & InjectedProps) => {
  return (
    <Link
      href={href}
      className='capitalize font-sans text-background text-lg px-4 py-2'
      onClick={() => closeSheetHandler?.(false)}>
      {t(localeKey)}
    </Link>
  );
};

export default withI18n('navigation')(NavigationItem);
