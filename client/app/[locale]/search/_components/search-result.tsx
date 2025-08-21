import { getSearchResults } from '@/actions';
import { ServiceType } from '@/types';
import ReadMoreButton from './read-more';
import NoSearchResult from '../../_components/no-search-result';

const SearchResult = async ({ SearchParams }: { SearchParams: Promise<{ query: string }> }) => {
  const q = (await SearchParams).query;
  const data: ServiceType[] = await getSearchResults(q);

  if (!data?.length) return <NoSearchResult />;

  return data.map((service) => (
    <div
      key={service.id}
      className='py-8 border-b border-[#97979780]'>
      <h2 className='font-medium font-sans text-brown-main text-xl'>{service.title}</h2>
      <ReadMoreButton />
    </div>
  ));
};

export default SearchResult;
