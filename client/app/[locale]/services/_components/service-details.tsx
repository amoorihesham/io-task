import { notFound } from 'next/navigation';
import { Square } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ServiceType } from '@/types';
import { getServiceDetails } from '@/actions';
import { getLocale } from 'next-intl/server';

const ServiceDetailsWrapper = async ({ params }: { params: Promise<{ serviceId: string }> }) => {
  const srvId = (await params).serviceId;
  const data: ServiceType = await getServiceDetails(srvId);
  const locale = await getLocale();

  if (!data) return notFound();

  return (
    <>
      <div className='mt-8 lg:mt-14'>
        <h1 className='font-medium font-sans text-3xl lg:text-[42px] leading-[32px] text-brown-main'>{data.title}</h1>
        <p className='mt-8 lg:mt-14 text-[#1e1e1e] font-normal font-sans leading-[26px] max-w-[1142px]'>{data.description}</p>
        <div className='mt-4 lg:mt-6 space-y-6 lg:space-y-10'>
          {data.details.map((detail) => (
            <div key={detail.id}>
              <h5 className='font-bold font-sans text-brown-main leading-[26px] mb-2 lg:mb-4'>{detail.title}</h5>
              <div
                className={cn(
                  'ps-4 lg:ps-6 flex items-start gap-x-2 text-[#1e1e1e] font-bold font-sans max-w-[908px] leading-[26px]',
                  locale === 'en' ? 'border-l-2 lg:border-l-4 border-l-gray-300' : 'border-r-2 lg:border-r-4 border-r-gray-300'
                )}>
                <Square className='size-6 text-brown-main fill-brown-main' />
                <div className=''>
                  <p className='mb-2'>{detail.description}</p>
                  {detail.subTitle && <p className='mb-4'>{detail.subTitle}</p>}
                  {detail.steps &&
                    detail.steps
                      .split('-')
                      .map((item) => item.trim())
                      .filter((item) => item.length > 0)
                      .map((item, idx) => (
                        <p
                          key={idx}
                          className='font-normal font-sans text-[#1e1e1e] my-1'>
                          - {item}
                        </p>
                      ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {data.note && <p className='mt-10 lg:mt-18 font-normal font-sans text-[#1e1e1e] max-w-[1142px]'>{data.note}</p>}
    </>
  );
};

export default ServiceDetailsWrapper;
