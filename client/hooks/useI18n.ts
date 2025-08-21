'use client';
import { useRouter, usePathname } from '@/lib/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';

export function useI18n(namespace?: string) {
  const t = useTranslations(namespace);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function changeLanguage(locale: string) {
    if (!pathname) return;

    router.push(pathname, { locale });
  }

  return { changeLanguage, t, locale };
}
