import { getServiceDetails, getServicesList } from '@/actions';
import MaxContentWrapper from '@/components/layout/max-content-wrapper';
import ServiceDetailsWrapper from '../_components/service-details';

export const revalidate = 60;

export const generateStaticParams = async () => {
  const services = await getServicesList();

  return services ? services.map((service) => ({ serviceId: service.documentId })) : [];
};

const ServiceDetails = ({ params }: { params: Promise<{ serviceId: string }> }) => {
  const service = getServiceDetails(params);

  return (
    <>
      <header
        style={{ backgroundImage: `url(https://io-task.onrender.com/uploads/hero_8a5cb6eaee.jpg)` }}
        className='h-dvh bg-cover bg-no-repeat bg-center flex items-center justify-center'
      />
      <MaxContentWrapper className='py-10 lg:py-20'>
        <ServiceDetailsWrapper service={service} />
      </MaxContentWrapper>
    </>
  );
};

export default ServiceDetails;
