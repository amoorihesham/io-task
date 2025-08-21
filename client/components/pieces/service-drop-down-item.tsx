'use client';
import { DropdownMenuItem } from '../ui/dropdown-menu';
import { Link } from '@/lib/i18n/navigation';

const ServiceDropDownItem = ({
  serviceId,
  title,
  setIsMenuOpen,
}: {
  serviceId: string;
  title: string;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <DropdownMenuItem
      onClick={() => setIsMenuOpen(false)}
      className='bg-transparent focus:bg-transparent focus:text-background transition-colors duration-300 cursor-pointer text-lg font-medium font-sans text-background/70'>
      <Link href={`/services/${serviceId}`}>{title}</Link>
    </DropdownMenuItem>
  );
};

export default ServiceDropDownItem;
