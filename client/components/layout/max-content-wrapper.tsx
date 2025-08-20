import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export default function MaxContentWrapper({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('max-w-7xl mx-auto', className)}>{children}</div>;
}
