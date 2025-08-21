'use client';
import { SetStateAction, useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';
import SearchForm from '@/app/[locale]/_components/search-form';

const SearchDropDown = ({ setIsSheetOpen }: { setIsSheetOpen?: React.Dispatch<SetStateAction<boolean>> }) => {
  const [openSearchBox, setOpenSearchBox] = useState(false);

  return (
    <DropdownMenu
      open={openSearchBox}
      onOpenChange={setOpenSearchBox}>
      <DropdownMenuTrigger asChild>
        <Button
          variant={'ghost'}
          className='capitalize font-sans text-background text-lg px-4 py-2 flex items-center gap-x-1 hover:bg-transparent hover:text-background cursor-pointer'>
          <Search className='size-6' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='start'
        className='shadow-2xl top-50 z-[100145] bg-brown-main border-gray-600 text-background/80 text-lg font-medium max-w-[1540px] w-[300px] p-4'>
        <SearchForm
          setOpenSearchBox={setOpenSearchBox}
          setIsSheetOpen={setIsSheetOpen}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SearchDropDown;
