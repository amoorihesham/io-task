import MaxContentWrapper from '@/components/layout/max-content-wrapper';
import BackButton from '@/components/shared/back-button';
import TeamButton from './_components/team-button';
import SearchResult from './_components/search-result';
import ServiceButton from './_components/service-button';
import { Suspense } from 'react';
import LoaderSkeleton from '@/components/loaders/loader';

const SearchPage = ({ searchParams }: { searchParams: Promise<{ query: string }> }) => {
  return (
    <>
      <header
        style={{ backgroundImage: `url(https://io-task.onrender.com/uploads/hero_8a5cb6eaee.jpg)` }}
        className='h-dvh bg-cover bg-no-repeat bg-center flex items-center justify-center'
      />
      <MaxContentWrapper className='py-10 lg:py-20'>
        <BackButton />
        <div className='grid grid-cols-12 mt-10 gap-6'>
          <div className='col-span-2 flex flex-col gap-4 px-2'>
            <TeamButton />
            <ServiceButton />
          </div>
          <div className='col-span-10'>
            <Suspense fallback={<LoaderSkeleton />}>
              <SearchResult SearchParams={searchParams} />
            </Suspense>
          </div>
        </div>
      </MaxContentWrapper>
    </>
  );
};

export default SearchPage;
