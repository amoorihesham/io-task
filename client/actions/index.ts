'use server';

import { getLocale } from 'next-intl/server';

export const getHomePageData = async () => {
  const locale = await getLocale();
  const data = await fetch(
    `https://io-task.onrender.com/api/home-page?locale=${locale}&populate[heroImage][fields][0]=url&populate[heroImage][fields][1]=alternativeText&populate[slides][fields][0]=cta&populate[slides][fields][1]=heading&populate[slides][fields][2]=description&populate[slides][populate][person][fields][0]=url&populate[slides][populate][person][fields][1]=alternativeText&populate[team][fields][0]=title&populate[team][fields][1]=description&populate[team][populate][members][fields][0]=name&populate[team][populate][members][fields][1]=position&populate[team][populate][members][fields][2]=whatsapp&populate[team][populate][members][fields][3]=phone&populate[team][populate][members][fields][4]=email&populate[team][populate][members][populate][image][fields][0]=url&populate[team][populate][members][populate][image][fields][1]=alternativeText&populate[testimonials][fields][0]=title&populate[testimonials][fields][1]=description&populate[testimonials][populate][clients][fields][0]=name&populate[testimonials][populate][clients][fields][1]=position&populate[testimonials][populate][clients][fields][2]=description&populate[testimonials][populate][clients][populate][image][fields][0]=url&populate[testimonials][populate][clients][populate][image][fields][1]=alternativeText`
  );
  const acc = await data.json();

  return acc.data;
};

export const getHeroData = async () => {
  const locale = await getLocale();
  const data = await fetch(
    `https://io-task.onrender.com/api/home-page?locale=${locale}&populate[heroImage][fields][0]=url&populate[heroImage][fields][1]=alternativeText&populate[slides][fields][0]=cta&populate[slides][fields][1]=heading&populate[slides][fields][2]=description&populate[slides][populate][person][fields][0]=url&populate[slides][populate][person][fields][1]=alternativeText`
  );
  const acc = await data.json();

  return acc.data;
};

export const getOurTeamData = async () => {
  const locale = await getLocale();
  const data = await fetch(
    `https://io-task.onrender.com/api/home-page?locale=${locale}&populate[team][fields][0]=title&populate[team][fields][1]=description&populate[team][populate][members][fields][0]=name&populate[team][populate][members][fields][1]=position&populate[team][populate][members][fields][2]=whatsapp&populate[team][populate][members][fields][3]=phone&populate[team][populate][members][fields][4]=email&populate[team][populate][members][populate][image][fields][0]=url&populate[team][populate][members][populate][image][fields][1]=alternativeText`
  );
  const acc = await data.json();

  return acc.data;
};

export const getTestimonialsData = async () => {
  const locale = await getLocale();
  const data = await fetch(
    `https://io-task.onrender.com/api/home-page?locale=${locale}&populate[testimonials][fields][0]=title&populate[testimonials][fields][1]=description&populate[testimonials][populate][clients][fields][0]=name&populate[testimonials][populate][clients][fields][1]=position&populate[testimonials][populate][clients][fields][2]=description&populate[testimonials][populate][clients][populate][image][fields][0]=url&populate[testimonials][populate][clients][populate][image][fields][1]=alternativeText`
  );
  const acc = await data.json();

  return acc.data;
};

export const getServicesList = async (locale?: string) => {
  const response = await fetch(`https://io-task.onrender.com/api/services?locale=${locale || 'en'}`);
  const data = await response.json();

  return data.data;
};

export const getServiceDetails = async (serviceName?: Promise<{ serviceId: string }>) => {
  const locale = await getLocale();
  const sr = (await serviceName)?.serviceId;
  const response = await fetch(
    `https://io-task.onrender.com/api/services?locale=${locale}&filters[documentId][$eq]=${sr}&populate[fields][0]=title&populate[fields][1]=description&populate[fields][2]=href&populate[fields][3]=note&populate[heroImage][fields][0]=url&populate[heroImage][fields][1]=alternativeText&populate[details][populate][fields][0]=title&populate[details][populate][fields][1]=description&populate[details][populate][fields][2]=steps&populate[details][populate][fields][3]=subTitle`
  );
  const data = await response.json();

  return data.data[0];
};

export const getSearchResults = async (
  query: Promise<{
    query: string;
  }>
) => {
  const locale = await getLocale();
  const q = (await query).query;
  const response = await fetch(
    `https://io-task.onrender.com/api/services?locale=${locale}&filters[title][$containsi]=${q}&populate[fields][0]=title&populate[fields][1]=description&populate[fields][2]=href&populate[fields][3]=note&populate[heroImage][fields][0]=url&populate[heroImage][fields][1]=alternativeText&populate[details][populate][fields][0]=title&populate[details][populate][fields][1]=description&populate[details][populate][fields][2]=steps&populate[details][populate][fields][3]=subTitle`
  );
  const data = await response.json();

  return data.data;
};
