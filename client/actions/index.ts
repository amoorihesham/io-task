'use server';

export const getHomePageData = async () => {
  const data = await fetch(
    'http://localhost:1337/api/home-page?populate[heroImage][fields][0]=url&populate[heroImage][fields][1]=alternativeText&populate[slides][fields][0]=cta&populate[slides][fields][1]=heading&populate[slides][fields][2]=description&populate[slides][populate][person][fields][0]=url&populate[slides][populate][person][fields][1]=alternativeText&populate[team][fields][0]=title&populate[team][fields][1]=description&populate[team][populate][members][fields][0]=name&populate[team][populate][members][fields][1]=position&populate[team][populate][members][fields][2]=whatsapp&populate[team][populate][members][fields][3]=phone&populate[team][populate][members][fields][4]=email&populate[team][populate][members][populate][image][fields][0]=url&populate[team][populate][members][populate][image][fields][1]=alternativeText&populate[testimonials][fields][0]=title&populate[testimonials][fields][1]=description&populate[testimonials][populate][clients][fields][0]=name&populate[testimonials][populate][clients][fields][1]=position&populate[testimonials][populate][clients][fields][2]=description&populate[testimonials][populate][clients][populate][image][fields][0]=url&populate[testimonials][populate][clients][populate][image][fields][1]=alternativeText'
  );
  const acc = await data.json();

  return acc.data;
};
