import { Metadata } from 'next';

import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Civic Gallery | Van Gemert Memorials',
  description:
    'Browse our gallery of civic and veterans memorial projects. Community monuments and commemorative works by Van Gemert Memorials in De Pere, WI.',
};

export default async function CvicGalleryPage() {
  const images = await getImages('civic');

  return <Gallery galleryImages={images} galleryName="Civic Memorials" />;
}
