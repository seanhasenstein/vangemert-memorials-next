import { Metadata } from 'next';

import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Etchings Gallery | Van Gemert Memorials',
};

export default async function EtchingsGalleryPage() {
  const images = await getImages('etchings');

  return <Gallery galleryImages={images} galleryName="Etchings" />;
}
