import { useI18n } from '@/hooks/useI18n';
import { InjectedProps } from '@/types';
import React, { ComponentType } from 'react';

export const withI18n =
  (namespace: string) =>
  <P extends object>(Component: ComponentType<P & InjectedProps>) => {
    return function WithI18nWrapper(props: P) {
      const { t, locale } = useI18n(namespace);
      return (
        <Component
          {...props}
          t={t}
          locale={locale}
        />
      );
    };
  };

export default withI18n;
