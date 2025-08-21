import { useRouter, usePathname } from '@/lib/i18n/navigation';

export function useChangeLanguage() {
  const router = useRouter();
  const pathname = usePathname();

  function changeLanguage(locale: string) {
    if (!pathname) return;

    router.push(pathname, { locale });
  }

  return changeLanguage;
}
