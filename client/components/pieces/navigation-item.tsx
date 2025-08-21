'use client';
import { InjectedProps } from '@/types';
import { Link } from '@/lib/i18n/navigation';
import withI18n from '../shared/hocs/with-i18n';

const NavigationItem = ({ t, href, localeKey }: { href: string; localeKey: string } & InjectedProps) => {
  return (
    <Link
      href={href}
      className='capitalize font-sans text-background text-lg px-4 py-2'>
      {t(localeKey)}
    </Link>
  );
};

export default withI18n('navigation')(NavigationItem);
