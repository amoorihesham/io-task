import { useRouter, usePathname } from '@/lib/i18n/navigation';

export function useChangeLanguage() {
  const router = useRouter();
  const pathname = usePathname();

  function changeLanguage(locale: string) {
    if (!pathname) return;

    // Split current path
    const segments = pathname.split('/');

    // Replace the locale (first segment after '/')
    segments[1] = locale;

    const newPath = segments.join('/') || '/';
    router.push(newPath);
  }

  return changeLanguage;
}
