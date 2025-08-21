import { getServiceDetails, getServicesList } from '@/actions';
import MaxContentWrapper from '@/components/layout/max-content-wrapper';
import { cn } from '@/lib/utils';
import { ChevronLeft, Square } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/lib/i18n/navigation';
import { notFound } from 'next/navigation';
import React from 'react';

export const generateStaticParams = async () => {
  const services = await getServicesList();

  return services.map((service) => ({ serviceId: service.documentId }));
};

const ServiceDetails = async ({ params }: { params: Promise<{ serviceId: string }> }) => {
  const t = await getTranslations('service-page');
  const local = await getLocale();
  const serviceId = (await params).serviceId;
  const service = await getServiceDetails(serviceId);

  if (!service) return notFound();

  return (
    service && (
      <>
        <header
          style={{ backgroundImage: `url(http://localhost:1337${service?.heroImage?.url})` }}
          className='h-dvh bg-cover bg-no-repeat bg-center flex items-center justify-center'
        />
        <MaxContentWrapper className='py-10 lg:py-20'>
          <Link
            href={'/services'}
            className={cn(
              'text-brown-main/80 hover:text-brown-main font-sans font-bold flex items-center gap-x-1  justify-center transition-colors duration-300 w-fit',
              local === 'en' ? 'flex-row' : 'flex-row-reverse'
            )}>
            <ChevronLeft /> {t('back')}
          </Link>

          <div className='mt-8 lg:mt-14'>
            <h1 className='font-medium font-sans text-3xl lg:text-[42px] leading-[32px] text-brown-main'>{service.title}</h1>
            <p className='mt-8 lg:mt-14 text-[#1e1e1e] font-normal font-sans leading-[26px] max-w-[1142px]'>{service.description}</p>
            <div className='mt-4 lg:mt-6 space-y-6 lg:space-y-10'>
              {service.details.map((detail) => (
                <div key={detail.id}>
                  <h5 className='font-bold font-sans text-brown-main leading-[26px] mb-2 lg:mb-4'>{detail.title}</h5>
                  <div className='border-l-2 lg:border-l-4 border-l-gray-300 ps-4 lg:ps-6 flex items-start gap-x-2 text-[#1e1e1e] font-bold font-sans max-w-[908px] leading-[26px]'>
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
          {service.note && <p className='mt-10 lg:mt-18 font-normal font-sans text-[#1e1e1e] max-w-[1142px]'>{service.note}</p>}
        </MaxContentWrapper>
      </>
    )
  );
};

export default ServiceDetails;
