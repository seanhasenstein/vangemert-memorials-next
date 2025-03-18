import { Metadata } from 'next';

import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Hmong Memorials Gallery | Van Gemert Memorials',
};

export default async function HmongGalleryPage() {
  const images = await getImages('hmong-memorials');

  return <Gallery galleryImages={images} galleryName="Hmong Memorials" />;
}
