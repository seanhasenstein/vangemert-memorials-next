import { Metadata } from 'next';

import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Hmong Memorials Gallery | Van Gemert Memorials',
  description:
    'Browse our gallery of Hmong memorial headstones. Culturally meaningful custom-designed monuments crafted by Van Gemert Memorials in De Pere, WI.',
};

export default async function HmongGalleryPage() {
  const images = await getImages('hmong-memorials');

  return <Gallery galleryImages={images} galleryName="Hmong Memorials" />;
}
