import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.mnaraschool.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: BASE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/admissions`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/curriculum`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/curriculum/early-years`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/curriculum/primary`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/curriculum/middle-school`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/curriculum/highschool`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/co-curricular`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/co-curricular/sports`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/co-curricular/robotics`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/co-curricular/little-einsteins`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/co-curricular/art-and-craft`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/co-curricular/debate`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/events`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/multimedia`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${BASE_URL}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms-of-service`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/cookie-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
