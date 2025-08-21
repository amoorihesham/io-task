import { cn } from '@/lib/utils';
import { Loader } from 'lucide-react';
import React from 'react';

const LoaderSkeleton = ({ className }: { className?: string }) => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <Loader
        className={cn('text-7xl text-background animate-spin', className)}
        size={48}
      />
    </div>
  );
};

export default LoaderSkeleton;
