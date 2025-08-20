import MaxContentWrapper from '@/components/layout/max-content-wrapper';
import { Button } from '@/components/ui/button';
import Carousel from '@/components/ui/Carousel';
import Image from 'next/image';

const getHomePageData = async () => {
  const data = await fetch(
    'http://localhost:1337/api/home-page?populate[heroImage][fields][0]=url&populate[heroImage][fields][1]=alternativeText&populate[slides][fields][0]=cta&populate[slides][fields][1]=heading&populate[slides][fields][2]=description&populate[slides][populate][person][fields][0]=url&populate[slides][populate][person][fields][1]=alternativeText'
  );
  const acc = await data.json();

  return acc.data;
};

export default async function Home() {
  const data = await getHomePageData();
  console.log(data);
  return (
    <>
      <header
        style={{ backgroundImage: `url(http://localhost:1337${data.heroImage.url})` }}
        className='h-dvh bg-cover bg-no-repeat bg-center flex items-center justify-center'>
        <MaxContentWrapper className='h-[700px] flex justify-center'>
          <Carousel slides={data.slides} />
        </MaxContentWrapper>
      </header>
    </>
  );
}
