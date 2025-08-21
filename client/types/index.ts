import { useI18n } from '@/hooks/useI18n';

export type ServiceType = {
  createdAt: string;
  description: string | null;
  details: any[] | [];
  documentId: string;
  heroImage: { id: number; documentId: string; url: string; alternativeText: string };
  href: string | null;
  id: number;
  locale: string;
  note: string | null;
  publishedAt: string;
  title: string;
  updatedAt: string;
};

export type UseI18nReturn = ReturnType<typeof useI18n>;

export type InjectedProps = {
  t: UseI18nReturn['t'];
  locale: UseI18nReturn['locale'];
};
