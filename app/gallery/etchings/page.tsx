import { Metadata } from 'next';

import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Etchings Gallery | Van Gemert Memorials',
  description:
    'Browse our gallery of custom etchings and engravings on memorial headstones. Detailed artwork crafted by Van Gemert Memorials in De Pere, WI.',
};

export default async function EtchingsGalleryPage() {
  const images = await getImages('etchings');

  return <Gallery galleryImages={images} galleryName="Etchings" />;
}
