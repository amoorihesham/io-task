import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export default function MaxContentWrapper({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('max-w-7xl mx-auto px-2 lg:px-0', className)}>{children}</div>;
}
