import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vangemertmemorials.com';

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/staff`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8 },
    {
      url: `${baseUrl}/gallery/single-memorials`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery/double-memorials`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery/multiple-memorials`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery/slant-memorials`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery/benches`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery/etchings`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery/granite-colors`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery/civic`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery/hmong-memorials`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
